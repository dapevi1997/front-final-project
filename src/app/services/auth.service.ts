import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";


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

           // this.router$.navigate(['/']);
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

  recoverPasswordWithEmail (email: string){
    try {
      const auth = getAuth();

      return sendPasswordResetEmail(auth,email);

      
    } catch (error) {
      return null
      console.log(error)
    }
  }
  
  async loginRegistre(email: string, password: string) {
    let tokenAux = ""
    const auth = getAuth();

   await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in 
        const user = userCredential.user;
        await user.getIdToken().then((token) => {
          //console.log(token)
          tokenAux = token;
        })

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

    return tokenAux;

  }


}
