import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {
  role: string | null;

  constructor( private router$: Router){ 
    this.role = localStorage.getItem("role");
  }
  canActivate(){
    if(this.role !== "ADMIN") {
      alert("Solo un administrador puede ingresar aqui")
      this.router$.navigate(['/login']);
      return false;
    }
    return true;
  }
  
}
