import { Observable } from 'rxjs';
import { ConstructionService } from 'src/app/service/construction.service';
import { Component } from '@angular/core';
import { Construction } from './model/construction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-3';

  constructor(
    private constructionService: ConstructionService
  ) { }
  construction$: Observable<Construction[]> = this.constructionService.getAll()



  onDelete(cons: Construction) {
console.log(cons);
  }

}
