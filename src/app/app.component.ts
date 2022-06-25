import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from './store/state.types';
import { counterActions } from './store/counter.actions';
import { selectCount } from './store/counter.selector';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  public count: number;
  public newCount: number;
  private subs = new Subscription();

  constructor(private store: Store<RootState>) {
    const sub = this.store.select(selectCount).subscribe((count) => {
      this.count = count;
    });
    this.subs.add(sub);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  public increment() {
    this.store.dispatch(counterActions.increment());
  }

  public decrement() {
    this.store.dispatch(counterActions.decrement());
  }

  public reset() {
    this.store.dispatch(counterActions.reset());
  }

  public saveNewCount(evt: Event) {
    this.newCount = +(<HTMLInputElement>evt.target).value;
  };

  public setCountValue() {
    this.store.dispatch(counterActions.setCount({ count: this.newCount }));
    this.newCount = 0;
  }
}
