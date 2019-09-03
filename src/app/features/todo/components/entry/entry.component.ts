import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  @Output() itemAdded = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  addItem(itemEl: HTMLInputElement) {
    // console.log(`Adding ${itemEl.value}`);
    this.itemAdded.emit(itemEl.value);
    itemEl.value = '';
    itemEl.focus();
  }
}
