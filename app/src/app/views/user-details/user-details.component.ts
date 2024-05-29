import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { users } from '../../../assets/users';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './user-details.component.html',
  styles: ``
})
export class UserDetailsComponent implements OnInit {

  id: string = '';
  user: User = {
    _id: '',
    name: '',
    email: '',
    password: '',
    age: 0
  };

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.findUser();
  }

  findUser(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || "";
    })

    this.user = users.find(user => user._id == this.id) || {
      _id: '',
      name: '',
      email: '',
      password: '',
      age: NaN,
    };
  }

}
