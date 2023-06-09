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
  labelRadar!: string[];
  nivelApropiacion!:number[];
  nombreEstudiante!:string;

  radarChartData!: ChartData<'radar'>;

  constructor(
    private ligaservice:LigaService,
  )
  {}
  ngOnChanges(): void {
    this.calificaciones = this.ligaservice.notasTraer();
    //this.labelRadar = this.ligaservice.labelsRadarTraer();
    this.nombreEstudiante=this.ligaservice.estudianteNombreTraer();
    this.radarChartData = {
      labels: this.labelRadar,
      datasets: [
        { data: this.calificaciones, label:  this.nombreEstudiante },
        { data: [4.5, 4, 4.5, 3.5,4, 4.25, 4.25, 4.25, 4.75, 4], label: 'Nivel Apropiación' }
      ]
    };
  }

  ngOnInit(): void {
    this.calificaciones = this.ligaservice.promedioTraer()
    this.labelRadar = this.ligaservice.labelsRadarTraer();
    this.nivelApropiacion = this.ligaservice.nivelApropiacionTraer();
    this.radarChartData = {
      labels: this.labelRadar,
      datasets: [
        { data: this.calificaciones, label: 'Promedio liga' },
        { data: this.nivelApropiacion, label: 'Nivel Apropiación' }
      ]
    };
  }

  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  public radarChartType: ChartType = 'radar';


}
