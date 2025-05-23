import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../../../core/interfaces/user.interface';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-utilisateur',
  standalone: false,
  templateUrl: './utilisateur.component.html',
  styleUrl: './utilisateur.component.css'
})
export class UtilisateurComponent implements OnInit {
  users: UserInfo[] = [];
  newUser: UserInfo = { name: '', email: '', password: '', roles: 'USER' };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAll().subscribe((users: UserInfo[]) => this.users = users);
  }

  addUser(): void {
    this.userService.register(this.newUser).subscribe(() => {
      this.loadUsers();
      this.newUser = { name: '', email: '', password: '', roles: 'USER' };
      const modal = document.getElementById('closeModalBtn') as HTMLElement;
      modal.click(); // ferme le modal
    });
  }

  deleteUser(id: number): void {
    this.userService.delete(id).subscribe(() => this.loadUsers());
  }
}
