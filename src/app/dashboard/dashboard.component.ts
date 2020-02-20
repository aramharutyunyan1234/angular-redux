import { Component, OnInit } from '@angular/core';
import {UsersService} from "../Services/users.service";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import { increment, decrement, reset } from '../store/actions/counter.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users$: any;
  count$: any;

  constructor(public usersService: UsersService,
              private store: Store<{ count: number }>
              ) {
    this.count$ = store.pipe(select('count'));
  }

  ngOnInit(): void {
    /*this.users$ = this.usersService.getUsers().subscribe(data => {
      debugger
    });*/

  }
  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
