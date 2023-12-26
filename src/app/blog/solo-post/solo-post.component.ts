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
  comments: any[] | undefined;

  constructor(    private route: ActivatedRoute,
    private backendService: MyBackendService,
    private sharedService: SharedService,
    private commentService: CommentService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const postId = params.get('id');

      // Vérification de null avant l'appel du service
      if (postId !== null) {
        this.backendService.getPostById(postId).subscribe(data => {
          this.post = data;
        });
        this.commentService.getCommentsByPost(postId).subscribe(comments => {
          this.comments = comments;
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

 
  loadComments() {
    const postId = this.route.snapshot.paramMap.get('id');
    this.commentService.getCommentsByPost(postId!).subscribe(data => {
      this.comments = data;
    });
  }

  publishComment() {
    const postId = this.route.snapshot.paramMap.get('id');
    const commentData = {
      content: this.newCommentContent,
      userId: this.userId,
      postId: postId
    };

    this.commentService.publishComment(commentData).subscribe(
      (response: any) => {
        console.log('Comment published successfully:', response);
        this.loadComments(); // Rechargez les commentaires après la publication
      },
      (error: any) => {
        console.error('Error publishing comment:', error);
      }
    );

    this.newCommentContent = '';
  }

  deleteComment(commentId: string) {
    this.commentService.deleteComment(commentId).subscribe(
      (response: any) => {
        console.log('Comment deleted successfully:', response);
        this.loadComments(); // Rechargez les commentaires après la suppression
      },
      (error: any) => {
        console.error('Error deleting comment:', error);
      }
    );
  }
}
