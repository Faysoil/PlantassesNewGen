import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'plantassesNewGen';
  userName: string | null = null;
  
  constructor(private authService: AuthService) {}

  get isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  ngOnInit() {
    this.userName = this.authService.getUserNameFromToken();
  }

  // get userName(): string | null {
  //   // Vous pouvez obtenir le nom de l'utilisateur à partir du token ou du service côté serveur
  //   // Retourne null s'il n'est pas disponible
  //   return 'NomUtilisateur'; // Remplacez cela par la logique réelle
  // }

  logout(): void {
    this.authService.clearToken();
    // Ajoutez d'autres étapes de déconnexion si nécessaire
  }
}
