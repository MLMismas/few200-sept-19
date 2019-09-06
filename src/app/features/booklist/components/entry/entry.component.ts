import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookListState } from '../../reducers';
import { bookAdded } from '../../actions/booklist.actions';
import { BooklistListItem } from '../../models/index';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private store: Store<BookListState>) { }
  model = {
    title: '',
    format: '',
    author: ''
  };
  ngOnInit() {

  }


  add(titleEl: HTMLInputElement, authorEl: HTMLInputElement, formatEl: HTMLSelectElement) {

    this.store.dispatch(bookAdded({ title: titleEl.value }, { author: authorEl.value }, { format: formatEl.value }));
    this.model.title = '';
    this.model.author = '';
    this.model.format = '';
    titleEl.value = '';
    authorEl.value = '';
    formatEl.selectedIndex = 0;
    titleEl.focus();
  }
}
