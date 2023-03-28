import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  role!: Role;
  roleActualUser!: string|null;

  constructor(private login$: AuthService, private roles$: RolesService, private router$: Router){
    this.roleActualUser = localStorage.getItem("role");
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }



  async login(){
   
    const email = this.form.value.email;
    const password = this.form.value.password;


    await this.login$.login(email, password);

    this.roles$.loadRoles().subscribe(
      role => {

        

        let data = Object.values(role)
      
        data.forEach(user => {
         
          if (user.email == email) {
            localStorage.setItem("role", user.role)
            this.roleActualUser = user.role;
            if(user.role == "ADMIN"){
              console.log("******* In if")

              this.router$.navigate(['/adm']);
            }
      
           

          }
        });
        //window.location.reload();
      }
    );

    
    
  }

}
