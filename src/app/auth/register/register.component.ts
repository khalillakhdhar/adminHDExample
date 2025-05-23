import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
name = '';
  email = '';
  password = '';
  roles = 'USER';

  constructor(private userService: UserService, private router: Router) {}

  onRegister(): void {
    const user = { name: this.name, email: this.email, password: this.password, roles: this.roles };

    this.userService.register(user).subscribe(
      () => {
        alert('Registration successful!');
        this.router.navigate(['/auth/login']);
      },
      (error: any) => {
        alert('Registration failed. Please try again.');
      }
    );
  }
}
