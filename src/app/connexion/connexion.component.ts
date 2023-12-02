import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  loginForm = {
    email: '',
    password: ''
  };
    constructor(private http: HttpClient, private router: Router, private toastr: ToastrService, private authService: AuthService) {}
  
    onLogin() {
      this.http.post<any>('http://localhost:3000/auth/login', this.loginForm)
        .subscribe(response => {
          console.log(response);
          const token = response.token;
    
          // Utilisez le service AuthService pour gérer le token
          this.authService.setToken(token);
    
          this.router.navigate(['/blog']);
        }, error => {
          console.error(error);
          console.log('non');
        });
    }
}
