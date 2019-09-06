import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BooklistListItem } from './models';
import { Store } from '@ngrx/store';
import { BookListState, selectBooklistItems } from './reducers';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  items$: Observable<BooklistListItem[]>;

  constructor(private store: Store<BookListState>) { }

  ngOnInit() {
    this.items$ = this.store.select(selectBooklistItems);
  }

}
