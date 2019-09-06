import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooklistComponent } from './booklist.component';
import { ListComponent } from './components/list/list.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';
import { EntryComponent } from './components/entry/entry.component';
import { EffectsModule } from '@ngrx/effects';
import { ListEffects } from './effects/list.effects';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoanlistComponent } from './components/loanlist/loanlist.component';



@NgModule({
  declarations: [BooklistComponent, ListComponent, EntryComponent, LoanlistComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([ListEffects]),
    HttpClientModule,
    FormsModule
  ],
  exports: [BooklistComponent]
})
export class BooklistModule { }
