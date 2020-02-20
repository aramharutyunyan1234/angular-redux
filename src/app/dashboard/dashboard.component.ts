import { Component, OnInit } from '@angular/core';
import {UsersService} from "../Services/users.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users$: any;

  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
    /*this.users$ = this.usersService.getUsers().subscribe(data => {
      debugger
    });*/

  }

}
