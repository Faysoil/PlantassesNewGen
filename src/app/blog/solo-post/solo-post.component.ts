import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyBackendService } from 'src/app/my-backend.service';
import { SharedService } from 'src/app/shared.service';
import { CommentService } from 'src/app/comment.service';

@Component({
  selector: 'app-solo-post',
  templateUrl: './solo-post.component.html',
  styleUrls: ['./solo-post.component.css']
})
export class SoloPostComponent implements OnInit {
  userName: string | null = null;
  userId: number | null = null;
  post: any;
  newCommentContent: string = '';
  _id: number | null = null;

  constructor(private route: ActivatedRoute,private backendService: MyBackendService, private sharedService: SharedService,
    private commentService: CommentService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const postId = params.get('id');

      // Vérification de null avant l'appel du service
      if (postId !== null) {
        this.backendService.getPostById(postId).subscribe(data => {
          this.post = data;
        });
      }
    })
    this.sharedService.userName$.subscribe((userName) => {
      this.userName = userName;
    });

    // Abonnez-vous à l'observable pour recevoir les mises à jour de l'ID de l'utilisateur
    this.sharedService.userId$.subscribe((userId) => {
      this.userId = userId;
    });
  
  }

  publishComment() {
    const postId = this.route.snapshot.paramMap.get('id'); // Supposons que vous avez un paramètre d'itinéraire 'id' pour l'ID du post
    const commentData = {
      content: this.newCommentContent,
      postId: postId, // Utilisez l'ID du post actuel
      _id:2
    };

    this.commentService.publishComment(commentData).subscribe(
      (response: any) => {
        // Le commentaire a été publié avec succès, vous pouvez mettre à jour l'affichage des commentaires ici si nécessaire
        console.log('Comment published successfully:', response);
      },
      (error: any) => {
        console.error('Error publishing comment:', error);
      }
    );

    // Effacez le champ de texte après la publication
    this.newCommentContent = '';
  }
}
