import { CarService } from './../../service/car.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cars } from 'src/app/model/cars';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  cars$: Observable<Cars[]> = this.carService.getAll()

    constructor(
private carService: CarService
    ) {}

ngOnInit(): void {
}

}
