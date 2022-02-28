import { CarEditorComponent } from 'src/app/page/car-editor/car-editor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './page/car/car.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'car',
    component: CarComponent,
  },
  {
    path: 'car/edit/:id',
    component: CarEditorComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
