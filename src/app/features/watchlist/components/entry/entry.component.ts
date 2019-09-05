import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { WatchListState } from '../../reducers';
import { showAdded } from '../../actions/list.actions';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private store: Store<WatchListState>) { }

  ngOnInit() {
  }

  add(showEl: HTMLInputElement) {
    // do either of the two things we always do (dispatch an action)
    this.store.dispatch(showAdded({ title: showEl.value }));
    showEl.value = '';
    showEl.focus();
  }
}
