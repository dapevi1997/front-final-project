import { Component, OnInit, ViewChild } from '@angular/core';
import { Aprendiz, LigaI } from 'src/app/interfaces/liga.interface';
import { RadarI } from 'src/app/interfaces/radar.interface';
import { LigaService } from 'src/app/services/liga.service';
import { RadarService } from 'src/app/services/radares.service';
import { ChartRadarComponent } from '../../chart/chart-radar/chart-radar.component';

@Component({
  selector: 'app-grafica-operations',
  templateUrl: './grafica-operations.component.html',
  styleUrls: ['./grafica-operations.component.css']
})
export class GraficaOperationsComponent implements OnInit{
  aprendices: Aprendiz[] | any;
  posicion:any[] = [];
  id!:string;
  liga!: LigaI;
  name!: string;
  radarItems!:RadarI
  total!: number[];
  miAprendiz!: Aprendiz;
  @ViewChild(ChartRadarComponent) chartRadarComponent!: ChartRadarComponent;

  constructor(

    private ligaSvr : LigaService,


    ){}

  ngOnInit(): void {
    this.traerLiga();


  }
  enviarNota(calif: number[],nombre:string):void {
    this.ligaSvr.notaEnviar(calif);
    this.ligaSvr.estudianteNombreEnviar(nombre);
    this.chartRadarComponent.ngOnChanges();
  }


  traerAprendices(): void {
    this?.ligaSvr?.traerAprendices()?.subscribe({
      next:data=>{
        this.aprendices = data;
        this.miAprendiz = this?.aprendices?.find((apren: any)=> apren.nombre=='julian')
       // console.log("mi aprendiz: " + this.miAprendiz.calificaciones);
      },
      error: error => console.log(error)

    });

  }

  agregarAprendiz(): void {
    this.ligaSvr.añadirAprendiz(this.liga.nombre, this.aprendices[parseInt(this.posicion[0])]).subscribe((data) => {
      this.liga = data;
      setTimeout(() => {
        window.location.reload();
      });
    });
  }

  traerLiga(): void {
      this.id = this.ligaSvr.recibirLiga();
      this?.ligaSvr?.traerLiga(this.id)?.subscribe((data) => {
        this.liga= data;
        this.radarItems = data.radar;
        this.traerAprendices();
        this.promedioLiga();
        this.labelsRadar();
        this.NivelApropiacionRadar();
        this.chartRadarComponent.ngOnInit()
      })
  }

  promedioLiga(): void{
    let sumaAprendices = this.liga?.aprendices?.length || 0;
    let posiciones = this?.liga?.aprendices[0].calificaciones.length;
    let totalNota: number[] = new Array(posiciones).fill(0);
    this?.liga?.aprendices.forEach(aprendiz => {
    aprendiz?.calificaciones?.forEach((nota, index) => {
      totalNota[index] += nota;
    });
    });
    totalNota.forEach((total, index) => {
      totalNota[index] = total/sumaAprendices;
    })
    this.total = totalNota;

    this.ligaSvr.promedioenviar( this.total);
    };

    labelsRadar(): void {

      let longitud = this.radarItems.areas.length
      let labels: string[] = new Array(longitud).fill("");
      this?.radarItems?.areas.forEach((nombre,index) =>{
        labels[index]=nombre.descriptor
      })
      this.ligaSvr.labelsRadarEnviar(labels);
    }

    NivelApropiacionRadar(): void {

      let longitud = this.radarItems.areas.length
      let nivelApropiacion: number[] = new Array(longitud).fill(0);
      this?.radarItems?.areas.forEach((nota,index) =>{
        nivelApropiacion[index]=nota.nivel

      })
      this.ligaSvr.nivelApropiacionEnviar(nivelApropiacion);
    }

    severidadNota = (nota:number):string =>{
      let color='#93C47D';
      if(nota<=2.5){
        return color = '#F6C499'
      }
      if(nota>2.5 && nota<=3){
        return color = '#FCDA99'
      }
      if(nota>3.1 && nota<=3.5){
        return color = '#FCDA99'
      }
      if(nota>3.6 && nota<=4.2){
        return color='#FCDA99'
      }
      return color;
    }

  }


