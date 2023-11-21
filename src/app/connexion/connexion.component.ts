import { Component } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  loginForm = {
    email: '',
    password: ''
  };


  onLogin() {
    // Ajoutez la logique d'authentification ici, par exemple, envoyer une demande HTTP au backend
    console.log('Email:', this.loginForm.email);
    console.log('Password:', this.loginForm.password);
    // Ajoutez ici votre logique d'authentification avec le backend
  }
}
