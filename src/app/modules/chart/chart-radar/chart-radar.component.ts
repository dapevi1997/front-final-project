import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { LigaService } from 'src/app/services/liga.service';

@Component({
  selector: 'app-chart-radar',
  templateUrl: './chart-radar.component.html',
  styleUrls: ['./chart-radar.component.css']
})
export class ChartRadarComponent implements OnInit {

  calificaciones: number[] = [];

  ngOnInit(): void {
    this.calificaciones = this.ligaservice.promedioTraer()
    this.radarChartOptions
    this.radarChartLabels
    this.radarChartData
    this.radarChartType
    console.log("este es ngOnInit chart "+this.calificaciones)
  }

  constructor(
    private ligaservice:LigaService,
  )
  {}

  PintarRadar(): void{

  }

  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  public radarChartLabels: string[] = ['jum', 'te', '3', '4'];

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      { data:  this.calificaciones, label: 'Series A' },
      { data: [4.9, 4.6, 4.1, 4.2], label: 'Series B' }

    ],
  };

  public radarChartType: ChartType = 'radar';


}
