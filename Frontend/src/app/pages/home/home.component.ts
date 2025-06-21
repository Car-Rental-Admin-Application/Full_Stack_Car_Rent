import { Component } from '@angular/core';
import {Router, RouterModule, RouterOutlet} from '@angular/router';
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [
    RouterOutlet,
    MatToolbar,
    MatIcon,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule // N'oubliez pas d'importer RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  logout() {
    // Implémentez votre logique de déconnexion ici
    this.router.navigate(['/login']);
  }
}
