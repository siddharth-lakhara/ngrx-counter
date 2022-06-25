import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public counter = 0;

  public increment() {
    this.counter = this.counter + 1;
  }

  public decrement() {
    this.counter = this.counter - 1 >= 0 ? this.counter - 1 : 0;
  }
}
