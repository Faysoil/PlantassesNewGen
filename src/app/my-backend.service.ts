// my-backend.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyBackendService {
  private apiUrl = 'http://localhost:3000'; 
  private blog = '/posts';

  constructor(private http: HttpClient) {}

  getSomeData(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}${this.blog}`);
  }
  createUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, userData);
  }

  getPostById(postId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts/${postId}`);
  }

  getAllUsers(): Observable<any>{
    return this.http.get(`${this.apiUrl}/users`)
  }

// Dans votre service Angular
toggleSelectPost(postId: string, userId: string): Observable<any> {
  const body = { userId };
  return this.http.put<any>(`${this.apiUrl}/posts/toggleSelect/${postId}`, body);
}

getSelectedPosts(userId: string): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/posts/selected/${userId}`);
}

}
