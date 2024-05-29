import { Component } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { users } from '../../../assets/users';
import { User } from '../../interfaces/user';
import { UserCardComponent } from "../../components/user-card/user-card.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-users',
    standalone: true,
    templateUrl: './users.component.html',
    styles: ``,
    imports: [SearchInputComponent, UserCardComponent, RouterLink]
})
export class UsersComponent {

  public users = users;

  public filteredUsers: User[] = this.users;

  onSearch(search: string) {
    console.log(search);
    this.filteredUsers = this.users.filter(user =>
      user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }

}
