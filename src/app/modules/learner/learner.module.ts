import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadarLearnerComponent } from './radar-learner/radar-learner.component';
import { LearnerRoutingModule } from './learner-routing.module';
import { ChartModule } from '../chart/chart.module';
import { PromediosEstudianteComponent } from './promedios-estudiante/promedios-estudiante.component';
import { GraficaEstudianteComponent } from './grafica-estudiante/grafica-estudiante.component';
import { NavBarEstudianteComponent } from './nav-bar-estudiante/nav-bar-estudiante.component';



@NgModule({
  declarations: [
    RadarLearnerComponent,
    PromediosEstudianteComponent,
    GraficaEstudianteComponent,
    NavBarEstudianteComponent
  ],
  imports: [
    CommonModule,
    LearnerRoutingModule,
    ChartModule
  ]
})
export class LearnerModule { }
