import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AreaI, RadarI } from '../interfaces/radar.interface';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RadarService {


  //private url: string = 'http://localhost:8080/api/';


  constructor(private http: HttpClient) {}
  getRadares() : Observable<RadarI[]> {
    let direction = environment.apiRadarUrl + 'listarRadares';
    return this.http.get<RadarI[]>(direction);
  }
  getRadarEspecifico(name:string) : Observable<RadarI> {
    let direction = environment.apiRadarUrl + 'listarRadar/' + name;
    return this.http.get<RadarI>(direction);
  }

  crearRadar(radar:  RadarI) : Observable<RadarI>{   
    let direction = environment.apiRadarUrl+'CrearRadar';
    return this.http.post<any>(direction, radar,{
      responseType: 'text' as 'json'
    })       
  }

  agregarArea(area:  AreaI) : Observable<AreaI>{   
    let direction = environment.apiRadarUrl+'AgregarArea';
    return this.http.post<any>(direction, area,{
      responseType: 'text' as 'json'
    })           
  }
  actualizarArea(area:  AreaI, index:number) : Observable<AreaI>{   
    let direction = environment.apiRadarUrl+ 'ActualizarArear/' + index;
    return this.http.post<any>(direction, area,{
      responseType: 'text' as 'json'
    })           
  }
  eliminarArea(nombre:  string, index:number) : Observable<AreaI>{   
    let direction = environment.apiRadarUrl+ 'EliminarArea/' + nombre + '/' + index;
    return this.http.delete<any>(direction);           
  }

}
