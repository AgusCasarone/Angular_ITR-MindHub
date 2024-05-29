import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'search-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './search-input.component.html',
  styles: ``
})
export class SearchInputComponent {

  @Output() searching = new EventEmitter<string>();

  search: string = '';

  constructor() { }

  onsearch() {
    console.log(this.search);
    this.searching.emit(this.search);
  }
}
