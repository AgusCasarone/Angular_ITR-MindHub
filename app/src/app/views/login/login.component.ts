import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent implements OnInit {

  formTitle: string = 'Create User';
  placeholderName: string= 'Your Name';
  placeholderEmail: string= 'your_name@email.com';
  placeholderPassword: string= '********';
  placeholderAge: string= '25';

  newUser: User = {
    _id: '',
    name: '',
    email: '',
    password: '',
    age: 0,
  };

  ngOnInit(): void {

  }

  showMessage(){
    console.log('Form submited');
    console.log(this.newUser);

    this.newUser = {
      _id: '',
      name: '',
      email: '',
      password: '',
      age: 0
    }
  }

}
