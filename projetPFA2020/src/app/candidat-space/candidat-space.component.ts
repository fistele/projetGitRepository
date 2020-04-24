import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';
import {AuthLoginInfo} from '../auth/login-info';

@Component({
  selector: 'app-candidat-space',
  templateUrl: './candidat-space.component.html',
  styleUrls: ['./candidat-space.component.css']
})
export class CandidatSpaceComponent implements OnInit {

  constructor(private token: TokenStorageService) {
  }
  private envoiFichierService: any;
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;
  info: any;

  candidateStatut = 'New candidate';
  candidateFirstName = this.form.first_name;
  candidateLastName = this.form.last_name;
  candidateEmail = this.form.email;


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
      authorities: this.token.getAuthorities()
    };
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

