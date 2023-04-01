import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadarLearnerComponent } from './radar-learner/radar-learner.component';
import { LearnerRoutingModule } from './learner-routing.module';
import { ChartModule } from '../chart/chart.module';



@NgModule({
  declarations: [
    RadarLearnerComponent
  ],
  imports: [
    CommonModule,
    LearnerRoutingModule,
    ChartModule
  ]
})
export class LearnerModule { }
