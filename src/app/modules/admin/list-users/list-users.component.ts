import { Component } from '@angular/core';
import { RolesService } from '../../../services/roles.service';
import { Role } from '../../../interfaces/role.interface';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {

  users: Role[];

  constructor(private roles$: RolesService) {
    this.users = [];
    this.loadUsers()
  
  }

  loadUsers() {
    this.roles$.loadRoles().subscribe(
      role => {

        let data = Object.values(role)

        data.forEach(user => {
          let userAux: Role = {
            email: user.email,
            role: user.role
          }
    
          this.users.push(userAux);

        });
        
      }
    );
  }



}
