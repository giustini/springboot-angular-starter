import { Component, OnInit } from '@angular/core';
import { Dummy } from '../../model/dummy.model';
import { DummyDAO } from '../../daos/dummy.dao';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  dummy: Dummy;

  constructor(private dummyDAO: DummyDAO) { }

  getDummy(): void {
    this.dummyDAO
      .getDummy()
      .then(dummy => {
        this.dummy = dummy
      });
  }

  ngOnInit() {
    this.getDummy();
  }

}
