import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
  selector: 'user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styles: ``
})
export class UserCardComponent {

  @Input() user: User = {
    _id: '',
    name: '',
    email: '',
    password: '',
    age: 0
  }

}
