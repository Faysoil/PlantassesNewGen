import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  postForm = {
    title: '',
    userId: '', // Mettez à jour le userId avec la valeur de _id
    description: '',
    adresse: '',
    image: ''
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // Appelez la méthode pour récupérer l'id de l'utilisateur
    const userId = this.authService.getUserId();
    
    // Mettez à jour le userId dans le formulaire
    this.postForm.userId = userId || '';
  }

  createPost() {
    this.http.post<any>('http://localhost:3000/posts', this.postForm)
      .subscribe(response => {
        console.log(response);
        // Gérer la réponse ici (par exemple, redirection vers une autre page)
      }, error => {
        console.error(error);
      });
  }
}
