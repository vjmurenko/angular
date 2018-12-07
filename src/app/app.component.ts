import { UserService } from './users.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService]
})
export class AppComponent {

  users = [];
  searchStr=""

  constructor(private usersService: UserService) {

  }

  ngOnInit() {
    this.usersService.getUsers().subscribe(users => {
     this.users = users ;
    });
  }


}

