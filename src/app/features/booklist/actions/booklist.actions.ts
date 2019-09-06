import { BookListEntity } from '../reducers/booklist.reducer';
import { createAction, props } from '@ngrx/store';

let currentFakeId = 1;

export const bookAdded = createAction(
  '[booklist] list bookadded',
  ({ title }: { title: string }, { author }: { author: string }, { format }: { format: string }) => ({
    entity: {
      id: currentFakeId++ + 'T',
      title,
      author,
      format,
    } as BookListEntity
  })
);

export const booksLoaded = createAction(
  '[booklist] list books loaded',
  props<{ books: BookListEntity[] }>()
);

export const bookAddedSuccess = createAction(
  '[booklist] list book added successfully',
  props<{ oldid: string, newEntity: BookListEntity }>()
);
