import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RadarLearnerComponent } from './radar-learner/radar-learner.component'; 
import { GraficaEstudianteComponent } from './grafica-estudiante/grafica-estudiante.component';


const routes: Routes = [
  {
    path:"",
    children:[
      {
        path:"", component:RadarLearnerComponent
      },
  
      {
           path:"grafica",
           component: GraficaEstudianteComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnerRoutingModule { }