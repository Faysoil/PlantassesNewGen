import { Component, OnInit } from '@angular/core';
import { MyBackendService } from '../my-backend.service';
import { SharedService } from '../shared.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent  implements OnInit  {
  posts: any[] | undefined;

  constructor(private backendService: MyBackendService, private authService: AuthService) {}

  ngOnInit() {
    this.backendService.getSomeData().subscribe((data) => {
      // Initialisez isSelected à false pour chaque post
      this.posts = data.map((post: any) => ({ ...post, isSelected: false }));
  });

  }
    truncateDescription(description: string, maxLength: number): string {
      if (description.length > maxLength) {
        return `${description.slice(0, maxLength)}...`;
      } else {
        return description;
      }
    }

toggleSelectPost(postId: string): void {
  const userId: string | null = this.authService?.getUserId();
  console.log(userId);

  if (userId !== null) {
    this.backendService.toggleSelectPost(postId, userId).subscribe(
      response => {
        console.log(response);
        // Mettez à jour votre interface utilisateur pour refléter le changement de sélection/désélection
      },
      error => {
        console.error(error);
      }
    );
  } else {
    console.error('User ID is null.');
    // Gérez le cas où l'ID de l'utilisateur est nul, si nécessaire
  }
}



}
