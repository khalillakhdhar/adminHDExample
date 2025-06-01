import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  // logout
  constructor(private authService:AuthService) {}
  logout(): void {
    this.authService.logout();
    window.location.replace('/auth/login');
  }

}
