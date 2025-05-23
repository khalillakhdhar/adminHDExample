import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

 onLogin(): void {
  this.authService.login(this.username, this.password).subscribe(
    (token) => {
      console.log('Token reçu:', token);
      if (token) {
        this.authService.saveToken(token);
        alert('Login successful!');
        this.router.navigate(['/admin']);
      } else {
        alert('Erreur: token vide');
      }
    },
    (error) => {
      console.error('Erreur de login:', error);
      alert('Invalid username or password');
    }
  );
}
}
