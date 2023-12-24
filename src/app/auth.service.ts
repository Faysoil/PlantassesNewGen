// auth.service.ts
import { Injectable } from '@angular/core';
import  { jwtDecode,JwtPayload } from 'jwt-decode';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'token';
 // sharedService: any;

constructor(private sharedService: SharedService) {}

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    // Vous pouvez ajouter une logique plus complexe ici si nécessaire
    return !!this.getToken();
  }

  getUserId(): string | null {
    const token = this.getToken();
    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        const userId = decoded._id; // Utilisez _id au lieu de userId

        // Utilisez le service partagé pour mettre à jour l'ID de l'utilisateur
        this.sharedService.setUserId(userId);

        return userId || null;
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    }
    return null;
  }

  

  getUserNameFromToken(): string | null {
    const token = this.getToken();
    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        const userName = decoded.name;
        const userId = decoded.userId;
        const _id = decoded._id;
  
        // Utilisez le service partagé pour mettre à jour le nom et l'ID de l'utilisateur
        this.sharedService.setUserName(userName);
        this.sharedService.setUserId(userId);
        this.sharedService.setUser_Id(_id);
        console.log('Decoded token:', decoded);

        return userName || null;
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    }
    return null;
  }
}
