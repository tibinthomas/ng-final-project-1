import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
    token: string;

    constructor(private router: Router) {}

    signupUser(email: string, pass: string) {
        firebase.auth().createUserWithEmailAndPassword(email, pass)
        .catch(error => console.log(error))
    }

    signinUser(email: string, pass: string) {
        firebase.auth().signInWithEmailAndPassword(email, pass)
            .catch(error => console.log(error))
            .then((response) =>  { firebase.auth().currentUser.getToken()
                                    .then((token: string) => this.token = token);
                                    this.router.navigate(['/']);
                                 }
                 )
    }

    getToken() {
        firebase.auth().currentUser.getToken()
            .then((token: string) =>  this.token = token);
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
    }
}
