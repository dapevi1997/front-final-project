import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbaroperations',
  templateUrl: './navbaroperations.component.html',
  styleUrls: ['./navbaroperations.component.css']
})
export class NavbaroperationsComponent {

  constructor(private authService: AuthService){

  }

  logout = () => {
    this.authService.logout();
  }


}
