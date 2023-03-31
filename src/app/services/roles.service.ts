import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Role } from '../interfaces/role.interface';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http$: HttpClient, private auth$: AuthService) { }

  loadRoles(){
    const token = this.auth$.getIdToken();
    return this.http$.get("https://angular-509fd-default-rtdb.firebaseio.com/roles.json?&auth=" + token);
  }

  saveRoles(email: string, role: string, token: string){


    let body: Role = {
      email: email,
      role: role
    }

    this.http$.post("https://angular-509fd-default-rtdb.firebaseio.com/roles.json?auth=" + token, body).subscribe(
      response => console.log("Se ha guardado rol" + response),
      error => console.log("Error: " + error)
    )

  }

}
