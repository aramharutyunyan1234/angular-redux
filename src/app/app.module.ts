import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UsersDummy} from "../general/dummyData/users-dummy";
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import {counterReducer} from "./store/reducers/counter.reducer";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // StoreModule.forRoot({ count: counterReducer })
   /* StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),*/
  ],
  providers: [
    UsersDummy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
