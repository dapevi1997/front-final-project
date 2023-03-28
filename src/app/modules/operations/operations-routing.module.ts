import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RadarLeaguesComponent } from './radar-leagues/radar-leagues.component';


const routes: Routes = [
  {
    path:"",
    component: RadarLeaguesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationsRoutingModule { }
