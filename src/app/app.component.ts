import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'front-final-project';

  constructor(){}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyBwDJlChsaHaUGXvWwtesSs-DpIgpNeF5w",
      authDomain: "angular-509fd.firebaseapp.com"
 
    });
  }
}
