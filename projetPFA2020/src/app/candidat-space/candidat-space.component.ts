import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';
import {AuthLoginInfo} from '../auth/login-info';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-candidat-space',
  templateUrl: './candidat-space.component.html',
  styleUrls: ['./candidat-space.component.css']
})
export class CandidatSpaceComponent implements OnInit {

  constructor(private token: TokenStorageService, private userService: UserService,) {
  }
  private envoiFichierService: any;
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;
  info: any;

  user: any;

  candidateStatut = 'New candidate';
  candidateFirstName = '';
  candidateLastName = 'soft';
  candidateEmail = 'mail';


  fichierAEnvoyer: File = null;

  show = false;
  showDivRDV(statut) {
    if (statut === 'CV Sent') {
      this.show = !this.show;
    }
  }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities(),
    };
    this.userService.getUserInfo('http://localhost:8080/userData/' + this.token.getUsername())
      .subscribe(data => {
        this.user = data;
        this.candidateFirstName = this.user.first_name;
      }, error => {
          console.log(error);
        });
  }


  logout() {
    this.token.signOut();
   }

  envoiFichier(fichiers: FileList) {
    this.fichierAEnvoyer = fichiers.item(0);
  }

  envoiFichierParLeService() {
    this.envoiFichierService.postFile(this.fichierAEnvoyer).subscribe(resultat => {
    }, erreur => {
      console.log('Erreur lors de l\'envoi du fichier : ', erreur);
    });
  }
}

