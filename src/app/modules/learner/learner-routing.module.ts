import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RadarLearnerComponent } from './radar-learner/radar-learner.component'; 


const routes: Routes = [
  {
    path:"",
    component: RadarLearnerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnerRoutingModule { }