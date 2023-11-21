// inscription.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyBackendService } from '../my-backend.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})
export class InscriptionComponent implements OnInit {

  rememberMeChecked: boolean = false;
  user: User = {
    name: '',
    lastName: '',
    age: 0,
    email: '',
    password: '',
  };

  constructor(private http: HttpClient,
    private backendService: MyBackendService) {}
  ngOnInit(): void {

  }
  

createUser() {
    // Envoie des données au backend sans userId
    this.backendService.createUser(this.user).subscribe(
      (response) => {
        // Traitement de la réponse du backend si nécessaire
        console.log('Utilisateur créé avec succès', response);
        // Réinitialisez le formulaire ou effectuez d'autres actions nécessaires
      },
      (error) => {
        console.error('Erreur lors de la création de l\'utilisateur', error);
        // Gérez les erreurs selon vos besoins
      }
    );
  }
}
