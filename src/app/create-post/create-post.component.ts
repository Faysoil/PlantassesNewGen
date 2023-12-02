import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

  postForm = {
    title: '',
    idUser: 3,
    description: '',  // Ajoutez les autres champs nécessaires
    adresse: '',
    image: '' // etc.
  };

  constructor(private http: HttpClient, private router: Router) {}

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
