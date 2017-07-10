import * as firebase from 'firebase';
export class AuthService {
    token: string;
    signupUser(email: string, pass: string) {
        firebase.auth().createUserWithEmailAndPassword(email, pass)
        .catch(error => console.log(error))
    }

    signinUser(email: string, pass: string) {
        firebase.auth().signInWithEmailAndPassword(email, pass)
            .catch(error => console.log(error))
            .then((response) => firebase.auth().currentUser.getToken()
                                    .then((token: string) => this.token = token)
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
