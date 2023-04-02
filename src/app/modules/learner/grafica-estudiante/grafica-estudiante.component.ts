import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'primeng/api';
import { LigaService } from 'src/app/services/liga.service';
import { RadarService } from 'src/app/services/radares.service';
import { ChartRadarComponent } from '../../chart/chart-radar/chart-radar.component';
import { Aprendiz, LigaI } from 'src/app/interfaces/liga.interface';
import { RadarI } from 'src/app/interfaces/radar.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-grafica-estudiante',
  templateUrl: './grafica-estudiante.component.html',
  styleUrls: ['./grafica-estudiante.component.css'],
  providers:[MessageService]
})
export class GraficaEstudianteComponent implements OnInit{


  aprendices: Aprendiz[] | any;
  posicion:any[] = [];
  id!:string;
  liga!: LigaI;
  liga2!: Aprendiz[];
  name!: string;
  radarItems!:RadarI
  total!: number[];
  miAprendiz!: Aprendiz;
 correo!:string

  @ViewChild(ChartRadarComponent) chartRadarComponent!: ChartRadarComponent;

  constructor(
    private modalService: NgbModal,
    private messageService: MessageService,
    private ligaSvr : LigaService,
    private radarSvr : RadarService,
    private auth : AuthService
    ){}

  ngOnInit(): void {
    this.traerLiga();
    const token =this.auth.DecodeToken(localStorage.getItem('token')||'')
    this.correo= token.firebase.identities.email[0]
    
  }
  enviarNota(calif: number[],nombre:string):void {
    this.ligaSvr.notaEnviar(calif);
    this.ligaSvr.estudianteNombreEnviar(nombre);
    this.chartRadarComponent.ngOnChanges();
  }


  traerAprendices(): void {
    this?.ligaSvr?.traerAprendices()?.subscribe({
      next:data=>{
        // this.aprendices = data;
        if(data.nombre == 'valentina'){
          this.aprendices=data;
        }
     
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
        this.liga2= data?.aprendices?.filter(estudiante => estudiante.correo== this.correo);
        
        this.radarItems = data.radar;
        this.traerAprendices();
        this.promedioLiga();
        this.labelsRadar();
        this.NivelApropiacionRadar();
        this.chartRadarComponent.ngOnInit()
      })
  }

  promedioLiga(): void{

    this.liga2.forEach(element => {
      this.total = element.calificaciones
    });

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

