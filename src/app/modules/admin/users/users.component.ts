import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioI } from 'src/app/interfaces/usuario.interface';
import { AuthService } from 'src/app/services/auth.service';
import {RolesService} from 'src/app/services/roles.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[MessageService]
  
})
export class UsersComponent {
  constructor(
    private modalService: NgbModal,
    private messageService: MessageService,
    private toastr: ToastrService,
    private authService: AuthService,
    private rolService : RolesService
  ){}
    usuarioI : UsuarioI = {
      nombre : "",
      apellido: "",
      correo: "",
      contrasena: "",
      rol: ""

    }
  guardarUsuario = () =>{
     
    this.modalService.dismissAll();   
    this.authService.loginRegistre(this.usuarioI.correo, this.usuarioI.contrasena)
      .then(token=>{
        this.rolService.saveRoles(this.usuarioI.correo, this.usuarioI.rol, token);
        this.toastr.success('Usuario agregado exitosamente!','Success');  
      })
    ;
    
  //    setTimeout(() => {
  //    window.location.reload();
  //  }, 1000);
  }
 
}
