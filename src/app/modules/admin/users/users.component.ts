import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioI } from 'src/app/interfaces/usuario.interface';


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
    private toastr: ToastrService
  ){}
    usuarioI : UsuarioI = {
      nombre : "",
      apellido: "",
      correo: "",
      contrasena: "",
      rol: ""

    }
  guardarUsuario = () =>{
    console.log(this.usuarioI);    
    this.modalService.dismissAll();
    this.toastr.success('Usuario agregado exitosamente!','Success');  
  //    setTimeout(() => {
  //    window.location.reload();
  //  }, 1000);
  }
}
