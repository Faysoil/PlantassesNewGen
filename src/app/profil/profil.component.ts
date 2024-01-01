import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { SharedService } from '../shared.service';
import { MyBackendService } from '../my-backend.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  userName: string | null = null;
  userId: string | null = this.authService?.getUserId();
  selectedPosts: any[] = []; // Définissez le tableau des posts sélectionnés

  constructor(private authService: AuthService, private sharedService: SharedService, private backendService: MyBackendService) {}

  ngOnInit() {
    this.userName = this.authService.getUserNameFromToken();
  
    // Vérifiez si l'ID de l'utilisateur est disponible
    if (this.userId !== null) {
      // Récupérez les posts sélectionnés pour l'utilisateur
      this.backendService.getSelectedPosts(this.userId!).subscribe(
        (data: any[]) => {
          this.selectedPosts = data;
        },
        (error: any) => {
          console.error('Error fetching selected posts:', error);
        }
      );
    } else {
      console.error('User ID is null.');
      // Gérez le cas où l'ID de l'utilisateur est nul, si nécessaire
    }
  }
  

  truncateDescription(description: string, maxLength: number): string {
    if (description.length > maxLength) {
      return `${description.slice(0, maxLength)}...`;
    } else {
      return description;
    }
  }
}
