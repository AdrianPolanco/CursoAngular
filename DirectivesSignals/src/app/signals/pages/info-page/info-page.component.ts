import { Component, computed, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/single-user-response.interface';

@Component({
  selector: 'signals-info-page',
  templateUrl: './info-page.component.html',
  styleUrl: './info-page.component.css',
})
export class InfoPageComponent implements OnInit {
  userService: UserService = inject(UserService);
  userId: WritableSignal<number> = signal(1);
  currentUser = signal<User | undefined>(undefined);
  userFound = signal<boolean>(false);
  fullName = computed<string>(() => {
    if (!this.currentUser()) return "Usuario no encontrado";

    return `${this.currentUser()?.first_name} ${this.currentUser()?.last_name}`;
  });

  ngOnInit(): void {
    const id: number = this.userId();
    this.loadUser(id);
  }

  loadUser(id: number) {
    if (id <= 0) return;

    this.userId.set(id);

    this.userService.getUserById(id)
      .subscribe({
        next: (user: User) => {
          this.currentUser.set(user);
          this.userFound.set(true);
        },
        error: () => {
          this.currentUser.set(undefined);
          this.userFound.set(false)
        },
      });
  }
}
