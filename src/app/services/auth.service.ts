import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token!: string;

  constructor(private router$: Router) { }

  async login(email: string, password: string) {
    await firebase.auth().signInWithEmailAndPassword(email, password).then(

      response => {
        firebase.auth().currentUser?.getIdToken().then(
          token => {
            this.token = token;
            localStorage.setItem("token", this.token)
            //this.cookie$.set("token", this.token);

            this.router$.navigate(['/']);
          }
        );
      }

    );

  }

  getIdToken() {
   
    return localStorage.getItem("token");
  }

  logout() {
    firebase.auth().signOut().then(() => {
      this.token = "";
      localStorage.setItem("token", this.token);
      localStorage.setItem("role", "");

      window.location.reload();
    });
  }


}
