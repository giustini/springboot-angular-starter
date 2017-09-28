import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Dummy } from '../model/dummy.model';

@Injectable()
export class DummyDAO {

  constructor(private http: Http) { }

  getDummy(): Promise<Dummy> {

    return this.http.get('/rest/dummy')
      .toPromise()
      .then(response => response.json() as Dummy)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
