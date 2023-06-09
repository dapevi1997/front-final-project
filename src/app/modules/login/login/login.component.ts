import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Role } from 'src/app/interfaces/role.interface';
import { AuthService } from 'src/app/services/auth.service';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  formRecoverPasswordWithEmail: FormGroup;
  role!: Role;
  roleActualUser!: string | null;

  constructor(private login$: AuthService, private roles$: RolesService, private router$: Router, private toastr$: ToastrService) {
    this.roleActualUser = localStorage.getItem("role");

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });

    this.formRecoverPasswordWithEmail = new FormGroup(
      {
        email: new FormControl(null, [Validators.required, Validators.email])
      }
    );
  }



  async login() {
    const email = this.form.value.email;
    const password = this.form.value.password;

    await this.login$.login(email, password)
      .then((bool)=>{
        if(bool==false){
          this.toastr$.warning("Debe verificar el correo")
        }
        
      })
      .catch(err => {
        if (err.code == "auth/user-not-found") {
          this.toastr$.warning("Usuario no registrado, contactarse con el superadmin para el registro y entrega de sus credenciales.")
        } else if (err.code == "auth/wrong-password") {
          this.toastr$.warning("Contraseña incorrecta")
        }
        else {
          this.toastr$.error("Ha ocurrido un error con el login de usuario")
        }
      });

      if(this.login$.getIdToken() !== "" && this.login$.getIdToken() !== null ){
        this.roles$.loadRoles().subscribe(
          role => {
    
            let data = Object.values(role)
    
            data.forEach(user => {
    
              if (user.email == email) {
                localStorage.setItem("role", user.role)
                this.roleActualUser = user.role;
                if (user.role == "ADMIN") {
               
                  this.router$.navigate(['/adm']).then(
                    () => {
                    
                      this.toastr$.success('Bienvenido')
                    }
    
                  );
                }
                if (user.role == "OPERATIONS") {
    
    
                  this.router$.navigate(['/operations']).then(
                    () =>
                      this.toastr$.success('Bienvenido')
    
                  );
                }
                if (user.role == "LEARNER") {
    
    
                  this.router$.navigate(['/learner']).then(
                    () =>
                      this.toastr$.success('Bienvenido')
                  );
                }
    
    
    
              }
            });
         
          }
        );
      }




   



  }

  updatePasswordWithEmail() {
    try {
      this.login$.recoverPasswordWithEmail(this.formRecoverPasswordWithEmail.value.email)?.then(
        (res) => {
          this.toastr$.success("Email enviado con éxito")
        }
      );

    } catch (error) { console.log(error) }


  }

}
