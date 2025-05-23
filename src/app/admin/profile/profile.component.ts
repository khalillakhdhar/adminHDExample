import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { UserInfo } from '../../../core/interfaces/user.interface';
import { getDecodedToken } from '../../../core/utils/auth.utils';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent   implements OnInit {
  user: UserInfo = {
    name: '',
    email: '',
    roles: '',
    password: ''
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    const decoded = getDecodedToken();
    const email = decoded?.sub;

    if (email) {
      this.userService.getByEmail(email).subscribe(userData => {
        this.user = userData;
      });
    }
  }

  onUpdate(): void {
    if (!this.user.id) return;

    this.userService.update(this.user.id, this.user).subscribe(() => {
      alert('Profil mis à jour avec succès !');
    });
  }
}
