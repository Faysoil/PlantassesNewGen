// comment.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = 'http://localhost:3000/comments'; // Assurez-vous que l'URL est correcte

  constructor(private http: HttpClient) {}

  getCommentsForPost(postId: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiUrl}/post/${postId}`);
  }

  publishComment(commentData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, commentData);
  }

  getCommentsByPost(postId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/post/${postId}`);
  }

  deleteComment(commentId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${commentId}`);
  }
}
