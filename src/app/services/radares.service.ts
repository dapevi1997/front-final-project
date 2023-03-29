import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AreaI, RadarI } from '../interfaces/radar.interface';


@Injectable({
  providedIn: 'root'
})
export class RadarService {


  private url: string = 'http://localhost:8080/api/';


  constructor(private http: HttpClient) {}
  getRadares() : Observable<RadarI[]> {
    let direction = this.url + 'listarRadares';
    return this.http.get<RadarI[]>(direction);
  }
  getRadarEspecifico(name:string) : Observable<RadarI> {
    let direction = this.url + 'listarRadar/' + name;
    return this.http.get<RadarI>(direction);
  }

  crearRadar(radar:  RadarI) : Observable<RadarI>{   
    let direction = this.url+'CrearRadar';
    return this.http.post<any>(direction, radar,{
      responseType: 'text' as 'json'
    })       
  }

  agregarArea(area:  AreaI) : Observable<AreaI>{   
    let direction = this.url+'AgregarArea';
    return this.http.post<any>(direction, area,{
      responseType: 'text' as 'json'
    })       
  }

}
