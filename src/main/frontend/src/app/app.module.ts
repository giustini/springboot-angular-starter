import { BrowserModule }            from '@angular/platform-browser';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { NgModule }                 from '@angular/core';
import { FormsModule }              from '@angular/forms';
import { HttpModule }               from '@angular/http';

import { DataTableModule }          from "primeng/primeng";

import { AppComponent }             from './app.component';
import { AppRoutingModule }         from "./app.routing";

import { DummyDAO }                 from './daos/dummy.dao';
import { CarDAO }                   from './daos/car.dao';

import { DummyComponent }           from './components/dummy/dummy.component';
import { CarsComponent }            from "./components/cars/cars.component";
import { PageNotFoundComponent }    from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DummyComponent,
    CarsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    AppRoutingModule
  ],
  providers: [DummyDAO, CarDAO],
  bootstrap: [AppComponent]
})
export class AppModule { }
