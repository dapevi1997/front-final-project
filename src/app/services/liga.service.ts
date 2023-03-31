import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aprendiz, LigaI } from '../interfaces/liga.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LigaService {

  api = 'http://localhost:8080/api';

  id!:string;

  constructor(private http: HttpClient) { }

  traerTodo():Observable <LigaI> {
    let direccion= this.api + '/ligas';
    return this.http.get<LigaI>(direccion);
  }

  traerLiga(id: string):Observable <LigaI> {
    let direccion= this.api + '/liga/' + id;
    return this.http.get<LigaI>(direccion);
  }

  crearLiga(liga: LigaI):Observable<any> {
    let direccion= this.api + '/liga';
    return this.http.post<any>(direccion, liga);
  }

  traerAprendices():Observable <Aprendiz> {
    let direccion= this.api + '/aprendices';
    return this.http.get<Aprendiz>(direccion);
  }

  añadirAprendiz(nombre: string, aprendiz: Aprendiz):Observable <any> {
    let direccion= this.api + '/liga/aprendiz/' + nombre;
    return this.http.post<any>(direccion, aprendiz);
  }

  enviarLiga(id: string){
    this.id = id;
    localStorage.setItem('ligaid', JSON.stringify(this.id));
    console.log(this.id);
  }

  recibirLiga(){
    this.id = JSON.parse(localStorage.getItem('ligaid') || '');
    return this.id;
  }
}
