import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadarLearnerComponent } from './radar-learner/radar-learner.component';
import { LearnerRoutingModule } from './learner-routing.module';



@NgModule({
  declarations: [
    RadarLearnerComponent
  ],
  imports: [
    CommonModule,
    LearnerRoutingModule
  ]
})
export class LearnerModule { }
