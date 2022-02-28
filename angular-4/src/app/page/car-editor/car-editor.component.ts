import { Cars } from './../../model/cars';
import { Observable, switchMap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-car-editor',
  templateUrl: './car-editor.component.html',
  styleUrls: ['./car-editor.component.scss']
})
export class CarEditorComponent implements OnInit {

  constructor(
    private av: ActivatedRoute,
    private carService: CarService,
    private router: Router
  ) { }

  car$: Observable<Cars> = this.av.params.pipe(
    switchMap(params => this.carService.get(params['id']))
  )

  ngOnInit(): void {
  }

  onUpdate(car: Cars): void {
    this.carService.update(car).subscribe(
      car => this.router.navigate(['/', 'cars'])
    )
  }

}
