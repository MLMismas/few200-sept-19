import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import * as listActions from '../actions/booklist.actions';
import * as appActions from '../../../actions/app.actions';
import { BookListEntity } from '../reducers/booklist.reducer';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class ListEffects {
  readonly url = 'http://localhost:3000/books';

  constructor(private actions$: Actions, private client: HttpClient) { }

  loadBooksOnAppStart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      switchMap(() => this.client.get<BookListEntity[]>(this.url)
        .pipe(
          map(items => listActions.booksLoaded({ books: items }))
        )
      )
    ), { dispatch: true }
  );

  saveBookToServer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(listActions.bookAdded),
      map(a => a.entity),
      switchMap(a => this.client.post<BookListEntity>(this.url, { title: a.title, author: a.author, format: a.format })
        .pipe(
          map(result => listActions.bookAddedSuccess({ oldid: a.id, newEntity: result }))
        )
      )
    ), { dispatch: true }
  );
}

interface ListPostRequest {
  title: string;
  author: string;
  format: string;
}
