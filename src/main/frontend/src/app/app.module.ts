import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { FormsModule }            from '@angular/forms';
import { HttpModule }             from '@angular/http';

import { AppComponent }           from './app.component';
import { AppRoutingModule }       from "./app.routing";

import { DummyDAO }             from './daos/dummy.dao';
import { DummyComponent }         from './components/dummy/dummy.component';
import { PageNotFoundComponent }  from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DummyComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DummyDAO],
  bootstrap: [AppComponent]
})
export class AppModule { }
