import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { User } from '../../interfaces/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-view',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule
  ],
  templateUrl: './form-view.component.html',
  styles: ``
})
export class FormViewComponent {
  protected formTitle: string = 'Create User';
  protected placeholderName: string= 'Your Name';
  protected placeholderEmail: string= 'your_name@email.com';
  protected placeholderPassword: string= '********';
  protected placeholderAge: string= '25';

  newUser: User = {
    name: '',
    email: '',
    password: '',
    age: 0,
  };


  showMessage(){
    console.log('Form submited');
    console.log(this.newUser);

    this.newUser = {
      name: '',
      email: '',
      password: '',
      age: 0
    }
  }
}
