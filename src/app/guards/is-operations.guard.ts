import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsOperationsGuard implements CanActivate {
  role: string | null;

  constructor( private router$: Router){ 
    this.role = localStorage.getItem("role");
  }
  canActivate(){
    if(this.role !== "OPERATIONS") {
      alert("Solo para usuarios operations")
      this.router$.navigate(['/login']);
      return false;
    }
    return true;
  }
  
}
