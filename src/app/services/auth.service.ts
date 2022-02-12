import { Injectable } from '@angular/core';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth,
              public router: Router) { }

  infoAuthentication: any = []

  signIn() {

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    signInWithPopup(auth, provider)
    .then((result) => {

      this.infoAuthentication = {
        userName: result.user.displayName,
        userEmail: result.user.email,
        imageUser: result.user.photoURL
      }

      const user = JSON.stringify(this.infoAuthentication)

      localStorage.setItem('userInfo', user)

      this.router.navigate(['grades'])

      console.log(result)

    })

  }

  value() {
    return getAuth()
  }

}