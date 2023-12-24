// comment.component.ts

import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service'; // Assurez-vous d'importer le service approprié
import { comment } from '../models/comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments: Comment[] | undefined; // Assurez-vous que le type Comment est correctement importé depuis votre modèle

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    // Appelez la méthode pour obtenir les commentaires (supposons que vous avez un postId à utiliser)
    const postId = 'votrePostId'; // Remplacez par l'ID réel du post
    this.commentService.getCommentsForPost(postId).subscribe(
      (comments) => {
        this.comments = comments;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
