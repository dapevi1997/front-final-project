import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-chart-radar',
  templateUrl: './chart-radar.component.html',
  styleUrls: ['./chart-radar.component.css']
})
export class ChartRadarComponent implements OnInit {


    @Input() Calificaciones!:number[];
    Calificaciones2!:number[];

    ngOnInit(): void {

      this.Calificaciones2=this.Calificaciones;
      console.log(this.Calificaciones2)
    }

    // Radar
    public radarChartOptions: ChartConfiguration['options'] = {
      responsive: true,
    };
    public radarChartLabels: string[] = [ 'jum', 'te', '3', '4' ];

    public radarChartData: ChartData<'radar'> = {

      labels: this.radarChartLabels,
      datasets: [
        { data: this.Calificaciones2, label: 'Series A' },
        { data: [ 4.9, 4.6, 4.1, 4.2], label: 'Series B' }
      ]
    };
    public radarChartType: ChartType = 'radar';

}
