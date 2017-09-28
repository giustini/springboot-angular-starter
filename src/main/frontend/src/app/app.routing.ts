import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { DummyComponent } from './components/dummy/dummy.component';
import { CarsComponent } from "./components/cars/cars.component";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes:Routes = [
  { path: '', redirectTo: '/dummy', pathMatch: 'full' },
  { path: 'dummy', component: DummyComponent },
  { path: 'cars', component: CarsComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
