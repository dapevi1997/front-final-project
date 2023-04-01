import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartRadarComponent } from './chart-radar/chart-radar.component';
import { ChartComponent } from '@swimlane/ngx-charts';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    ChartRadarComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ],
  exports:[
   ChartRadarComponent
  ]
})
export class ChartModule { }
