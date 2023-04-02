import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aprendiz, LigaI } from '../interfaces/liga.interface';
import { Observable } from 'rxjs';
import { RadarI } from '../interfaces/radar.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LigaService {

  api = environment.apiRadarUrl;

  id!:string;
  radarNombre!:string;
  estudiante!:string;
  calificaciones!:number[];
  notasAprendiz!:number[];
  labelsRadar!:string[];
  nivelApropiacion!:number[];

  constructor(private http: HttpClient) { }

  traerTodo():Observable <LigaI> {
    let direccion= this.api + 'ligas';
    return this.http.get<LigaI>(direccion);
  }

  traerLiga(id: string):Observable <LigaI> {
    let direccion= this.api + 'liga/' + id;
    return this.http.get<LigaI>(direccion);
  }

  crearLiga(liga: LigaI):Observable<any> {
    let direccion= this.api + 'liga';
    return this.http.post<any>(direccion, liga);
  }

  editarLiga(liga: LigaI):Observable<any> {
    this.id = this.recibirLiga();
    let direccion= this.api + 'liga/' + this.id;
    return this.http.put<any>(direccion, liga);
  }

  eliminarLiga(id:  string) : Observable<RadarI>{
    let direction = this.api + 'liga/' + id;
    return this.http.delete<any>(direction);
  }

  traerAprendices():Observable <Aprendiz> {
    let direccion= this.api + 'aprendices';
    return this.http.get<Aprendiz>(direccion);
  }

  añadirAprendiz(nombre: string, aprendiz: Aprendiz):Observable <any> {
    let direccion= this.api + 'liga/aprendiz/' + nombre;
    return this.http.post<any>(direccion, aprendiz);
  }

  añadirRadar(nombre: string, radar: RadarI):Observable <any> {
    let direccion= this.api + 'liga/radar/' + nombre;
    return this.http.post<any>(direccion, radar);
  }

  enviarLiga(id: string){
    this.id = id;
    localStorage.setItem('ligaid', JSON.stringify(this.id));
  }

  enviarRadar(radarNombre: string){
    this.radarNombre = radarNombre;
    localStorage.setItem('radarNombre', JSON.stringify(this.radarNombre));
  }

  recibirLiga(){
    this.id = JSON.parse(localStorage.getItem('ligaid') ||'')
    return this.id;
  }

  recibirRadar(){
    this.radarNombre = JSON.parse(localStorage.getItem('radarNombre') || '');
    return this.radarNombre;
  }

  promedioenviar(promedio: number[]){
    this.calificaciones = promedio;
  }

  promedioTraer(){
    return this.calificaciones;
  }

  notaEnviar(notas: number[]){
    this.notasAprendiz = notas;
  }

  notasTraer(){
    return this.notasAprendiz;
  }

  labelsRadarEnviar(labelRadar: string[]){
    this.labelsRadar = labelRadar;

  }

  labelsRadarTraer(){

    return this.labelsRadar;
  }
  nivelApropiacionEnviar(nivelApropiacion: number[]){
    this.nivelApropiacion = nivelApropiacion;

  }

  nivelApropiacionTraer(){

    return this.nivelApropiacion;
  }

  estudianteNombreEnviar(estudiante: string){
    this.estudiante = estudiante;
  }

  estudianteNombreTraer(){
    return this.estudiante;
  }



}
