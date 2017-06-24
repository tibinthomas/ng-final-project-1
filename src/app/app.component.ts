import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedComponent = 'shopping-list';

  onEventReceive(event) {
    this.selectedComponent = event;
  }
}
