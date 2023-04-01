import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadarLeaguesComponent } from './radar-leagues/radar-leagues.component';
import { OperationsRoutingModule } from './operations-routing.module';
import { ChartModule } from '../chart/chart.module';

@NgModule({
  declarations: [
    RadarLeaguesComponent
  ],
  imports: [
    CommonModule,
    OperationsRoutingModule,
    ChartModule
  ]
})
export class OperationsModule { }
