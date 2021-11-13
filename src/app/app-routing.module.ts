import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HombreComponent} from "./hombre/hombre.component";
import {HomeComponent} from "./home/home.component";



const routes: Routes = [
  {
    path: '', component: HomeComponent  ,
  },
  {
    path: 'hombre', component: HombreComponent ,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
