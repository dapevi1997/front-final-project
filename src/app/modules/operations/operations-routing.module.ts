import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RadarLeaguesComponent } from './radar-leagues/radar-leagues.component';

import { PromediosoperationsComponent } from './promediosoperations/promediosoperations.component';
import { GraficaOperationsComponent } from './grafica-operations/grafica-operations.component';


const routes: Routes = [
  {
    path:"",
    children:[
    {
      path:"", component:PromediosoperationsComponent
    },
    {
      path:"graficaOperation",
      component: GraficaOperationsComponent
    },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationsRoutingModule { }
