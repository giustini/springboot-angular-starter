import { Component, OnInit } from '@angular/core';
import { Car } from '../../model/car.model';
import { CarDAO } from '../../daos/car.dao';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[];

  constructor(private carDAO: CarDAO) { }

  getCars(): void {
    this.carDAO
      .getCars()
      .then(cars => {
        this.cars = cars
      });
  }

  ngOnInit() {
    this.getCars();
  }

}
