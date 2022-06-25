import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/state.types';
import { counterActions } from './store/counter.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public counter = 0;

  constructor(private store: Store<AppState>) {}

  public increment() {
    this.counter = this.counter + 1;
    this.store.dispatch(counterActions.increment());
  }

  public decrement() {
    this.counter = this.counter - 1 >= 0 ? this.counter - 1 : 0;
    this.store.dispatch(counterActions.decrement());
  }
}
