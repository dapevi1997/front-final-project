import { Component, Input, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { LigaService } from 'src/app/services/liga.service';

@Component({
  selector: 'app-chart-radar',
  templateUrl: './chart-radar.component.html',
  styleUrls: ['./chart-radar.component.css']
})
export class ChartRadarComponent implements OnInit, OnChanges{

  calificaciones: number[] = [];
  radarChartData!: ChartData<'radar'>;

  constructor(
    private ligaservice:LigaService,
  )
  {}
  ngOnChanges(): void {
    this.calificaciones = this.ligaservice.notasTraer()
    console.log("este es ngOnChanges chart "+this.calificaciones)
    this.radarChartData = {
      labels: ['jum', 'te', '3', '4'],
      datasets: [
        { data: this.calificaciones, label: 'Notas Aprendiz' },
        { data: [4.9, 4.6, 4.1, 4.2], label: 'Nivel Apropiación' }
      ]
    };
  }

  ngOnInit(): void {
    this.calificaciones = this.ligaservice.promedioTraer()
    console.log("este es ngOnInit chart "+this.calificaciones)
    this.radarChartData = {
      labels: ['jum', 'te', '3', '4'],
      datasets: [
        { data: this.calificaciones, label: 'Promedio' },
        { data: [4.9, 4.6, 4.1, 4.2], label: 'Nivel Apropiación' }
      ]
    };
  }

  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  public radarChartType: ChartType = 'radar';


}
