package com.pfa.AppRecrutement.controller;

import com.pfa.AppRecrutement.dao.UserRepository;
import com.pfa.AppRecrutement.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
public class UserRestAPI {

    @Autowired
    private UserRepository userRepository;

    @GetMapping(value="/listUsers")
    public List<User> listUsers(){
        return userRepository.findAll();
    }

    @GetMapping(value="/listUsers/{id}")
    public User listUsers(@PathVariable(name="id") Long id){
        return userRepository.findById(id).get();
    }
    //modifier un utilisateur
    @PutMapping(value="/modifyUser/{id}")
    public User update(@PathVariable (name="id") Long id, @RequestBody User user){
        user.setId(id);
        return userRepository.save(user);
    }

    @PostMapping (value="/addUser/")
    public User save(@RequestBody User user){
        return userRepository.save(user);
    }

    @DeleteMapping (value="/deleteUser/{id}")
    public void delete(@PathVariable (name="id") Long id){
        userRepository.deleteById(id);
    }

    @GetMapping(value = "/userData/{username}")
    public User getInfo(@PathVariable (name="username") String username){
        return new User();
    }

    @GetMapping(value = "/userData/{useremail}")
    public User getUserByEmail(@PathVariable (name="useremail") String useremail){
        return userRepository.findByEmail(useremail).orElse(null);
    }

}
