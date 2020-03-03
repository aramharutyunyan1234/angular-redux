import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {FormsModule} from '@angular/forms';
import {DashboardComponent} from "./dashboard.component";
import {StoreModule} from "@ngrx/store";
import {counterReducer} from "../store/reducers/counter.reducer";

import * as fromScoreboard from '../store/reducers/scoreboard.reducer';

@NgModule({
  declarations: [
    DashboardComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    StoreModule.forRoot({ count: counterReducer }),
    StoreModule.forRoot({ game: fromScoreboard.reducer }),
    StoreModule.forFeature(fromScoreboard.scoreboardFeatureKey, fromScoreboard.reducer)
  ]
})
export class DashboardModule { }
