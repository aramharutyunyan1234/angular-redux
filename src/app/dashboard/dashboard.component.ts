import {Component, OnInit} from '@angular/core';
import {UsersService} from "../Services/users.service";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {increment, decrement, reset} from '../store/actions/counter.actions';
import {awayScore, homeScore, setScores} from "../store/actions/scoreboard-page.actions";

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
  }

  ngOnInit(): void {
    /*this.users$ = this.usersService.getUsers().subscribe(data => {
      debugger
    });*/
    this.count$ = this.store.pipe(select('count'));

    this.store.dispatch(setScores({game: {home: 2, away: 3}}));
    // this.store.pipe(select(setScores({game: {home: 2, away: 3}})));


  }

  increment() {
    this.store.pipe(select(awayScore)).subscribe(data => {
      console.log(data);
    });
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
