import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbaroperations',
  templateUrl: './navbaroperations.component.html',
  styleUrls: ['./navbaroperations.component.css']
})
export class NavbaroperationsComponent {

  constructor(private authService: AuthService, private router$: Router){

  }

  logout() {
    Swal.fire({
      title: '¿Está seguro que desea cerrar sesión?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: "No"
      //denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.authService.logout();
        Swal.fire('Sesion cerrada', '', 'success').then(()=>this.router$.navigate(["login"]));
       
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }


}
