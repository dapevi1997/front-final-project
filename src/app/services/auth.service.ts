import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth, createUserWithEmailAndPassword, sendPasswordResetEmail, sendSignInLinkToEmail, sendEmailVerification, User } from "firebase/auth";
import { environment } from '../../environments/environment';
import jwt_decode from 'jwt-decode';
import { DecodedI } from '../interfaces/DecodeI';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token!: string;

  constructor(private router$: Router) { }


  async login(email: string, password: string) {


    const auth = getAuth();



    await firebase.auth().signInWithEmailAndPassword(email, password).then(
      response => {
        firebase.auth().currentUser?.getIdToken().then(
          token => {
            this.token = token;

            if (auth.currentUser?.emailVerified == true) {

              localStorage.setItem("token", this.token)
            } else {
              localStorage.setItem("token", "")
            }

          }
        );
      }

    );


    return auth.currentUser?.emailVerified





  }

  getIdToken() {

    return localStorage.getItem("token");
  }

  DecodeToken(token: string): DecodedI {
    return jwt_decode(token) as DecodedI;
    }

  logout() {
    firebase.auth().signOut().then(() => {
      this.token = "";
      localStorage.setItem("token", this.token);
      localStorage.setItem("role", "");
      localStorage.clear();
      //window.location.reload();
    });
  }

  recoverPasswordWithEmail(email: string) {
    try {
      const auth = getAuth();

      return sendPasswordResetEmail(auth, email);


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
        sendEmailVerification(auth.currentUser!);
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



        if(error.code == "auth/email-already-in-use"){
          tokenAux = "auth/email-already-in-use";

        }



      });


    return tokenAux;

  }







}
