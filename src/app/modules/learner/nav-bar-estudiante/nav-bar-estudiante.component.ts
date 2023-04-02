import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { RolesService } from 'src/app/services/roles.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-estudiante',
  templateUrl: './nav-bar-estudiante.component.html',
  styleUrls: ['./nav-bar-estudiante.component.css']
})
export class NavBarEstudianteComponent {
  formCreateUser: FormGroup;
  formCreateRadar: FormGroup;

  constructor(
    private authService: AuthService,
    private rolService: RolesService,

    private toastr$: ToastrService,
    private modalService: NgbModal,
    private router$: Router
  ){

    this.formCreateUser = new FormGroup(
      {
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
        passwordRepeat: new FormControl(null, [Validators.required]),
        role: new FormControl("LEARNER", [Validators.required]),
        name: new FormControl(null, [Validators.required]),
        lastname: new FormControl(null, [Validators.required])
      }, [this.passwordMatch("password", "passwordRepeat")]
    );

    this.formCreateRadar = new FormGroup(
      {}
    );

  }
  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
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

  createUser() {

    this.authService.loginRegistre(this.formCreateUser.value.email, this.formCreateUser.value.password)
      .then(token => {
        if (token == "auth/email-already-in-use") {
          this.toastr$.error("El email ingresado ya está en uso")
        }else{
          this.rolService.saveRoles(this.formCreateUser.value.name,this.formCreateUser.value.lastname,this.formCreateUser.value.email, this.formCreateUser.value.role, token);

          this.toastr$.success('Usuario agregado exitosamente!', 'Success');
        }
     
      }).catch(err => console.log(err))
      ;
  }

  passwordMatch(password: string, confirm_password: string) {

    return (form: AbstractControl) => {
      const passwordValue = form.get(password)?.value;
      const confirmPassValue = form.get(confirm_password)?.value;

      if (passwordValue === confirmPassValue) {
        return null;
      }
      return { passwordMismatchError: true }

    }


  }
}
