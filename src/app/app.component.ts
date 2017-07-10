import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedComponent = 'shopping-list';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBoUUnm3dwuqQJVcYNzWKglZiI14OB2dWI",
      authDomain: "ng-final-project.firebaseapp.com"
    })
  }
}
