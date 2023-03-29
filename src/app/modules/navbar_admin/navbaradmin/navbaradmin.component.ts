import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbaradmin',
  templateUrl: './navbaradmin.component.html',
  styleUrls: ['./navbaradmin.component.css']
})
export class NavbaradminComponent {
  constructor(
    private authService : AuthService
  ){}

  logout = () => {
    this.authService.logout();
  }
}
