import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Car } from '../model/car.model';

@Injectable()
export class CarDAO {

  constructor(private http: Http) { }

  getCars(): Promise<Car[]> {

    return this.http.get('/rest/cars')
      .toPromise()
      .then(response => response.json() as Car[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
