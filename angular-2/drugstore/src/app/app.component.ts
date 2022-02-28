import { Drug } from 'src/app/model/drug';
import { DrugService } from './service/drug.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'drugstore';

  constructor ( private drugService: DrugService){}


  drug$: Observable<Drug[]> = this.drugService.getAll()

}
