import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadarLeaguesComponent } from './radar-leagues/radar-leagues.component';
import { OperationsRoutingModule } from './operations-routing.module';



@NgModule({
  declarations: [
    RadarLeaguesComponent
  ],
  imports: [
    CommonModule,
    OperationsRoutingModule
  ]
})
export class OperationsModule { }
