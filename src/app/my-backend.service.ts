// my-backend.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyBackendService {
  private apiUrl = 'http://localhost:3000'; 
  private endpoint = '/posts';

  constructor(private http: HttpClient) {}

  getSomeData(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}${this.endpoint}`);
  }
  createUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, userData);
  }

  getPostById(postId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts/${postId}`);
  }

  // Ajoutez d'autres méthodes en fonction de vos besoins
}
