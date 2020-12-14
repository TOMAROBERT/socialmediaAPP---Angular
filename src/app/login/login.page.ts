import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
// import auth from 'firebase/firebase-auth';
// import firebase from 'firebase/app';
// import auth from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string ="";
  password: string ="";
  constructor(public afAuth : AngularFireAuth) { }

  ngOnInit() {
  }

  async login(){
    const { username,password } = this
    try{
      const res = await this.afAuth.signInWithEmailAndPassword(username + '@email.com',password)
    }catch(err){
      console.dir(err); 
    }
  }
}