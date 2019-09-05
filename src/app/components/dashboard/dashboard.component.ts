import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectCurrentCount, selectCountBy } from 'src/app/reducers';
import { Observable } from 'rxjs';

@Component(
  {
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
  }
)

export class DashboardComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  currentCount$: Observable<number>;
  by$: Observable<number>;


  ngOnInit() {
    this.currentCount$ = this.store.select(selectCurrentCount);
    this.by$ = this.store.select(selectCountBy);
  }
}
