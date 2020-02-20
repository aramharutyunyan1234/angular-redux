import {Inject, inject, Injectable} from '@angular/core';
import {UsersDummy} from "../../general/dummyData/users-dummy";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(@Inject(UsersDummy) public usersDummy ) { }

  getUsers() {
    return this.usersDummy.getUsersList();
  }
}
