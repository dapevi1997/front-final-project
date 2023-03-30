import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { RolesService } from '../../../services/roles.service';
import { ToastrService } from 'ngx-toastr';
import { group } from 'd3';

@Component({
  selector: 'app-navbaradmin',
  templateUrl: './navbaradmin.component.html',
  styleUrls: ['./navbaradmin.component.css']
})
export class NavbaradminComponent {
  formCreateUser: FormGroup;
  formCreateRadar: FormGroup;

  constructor(
    private authService : AuthService,
    private rolService: RolesService,
    private toastr$: ToastrService
  ){
    this.formCreateUser = new FormGroup(
      {
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required]),
        passwordRepeat: new FormControl(null, [Validators.required]),
        role: new FormControl("SELOPC", [Validators.required])
      },[this.passwordMatch("password","passwordRepeat" )]
    );

    this.formCreateRadar = new FormGroup(
      {}
    );

  }

  logout = () => {
    this.authService.logout();
  }

  createUser(){
    console.log(this.formCreateUser.value.email, this.formCreateUser.value.password,this.formCreateUser.value.role)
    this.authService.loginRegistre(this.formCreateUser.value.email, this.formCreateUser.value.password)
    .then(token=>{
      console.log(token)
      this.rolService.saveRoles(this.formCreateUser.value.email, this.formCreateUser.value.role, token);
      
      this.toastr$.success('Usuario agregado exitosamente!','Success');  
    })
  ;
  }

  passwordMatch(password: string, confirm_password: string) {

    return (form: AbstractControl) => {
      const passwordValue = form.get(password)?.value;
      const confirmPassValue = form.get(confirm_password)?.value;

      if(passwordValue === confirmPassValue){
        return null;
      }
      return {passwordMismatchError: true}

     }


  }



}
