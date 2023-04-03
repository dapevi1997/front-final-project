import { RadarI } from "./radar.interface"

export interface LigaI {
    id?: string,
    nombre: string,
    periodo: string,
    aprendices: Aprendiz[],
    coach: string,
    anio: string,
    radar: RadarI
}

export interface Aprendiz{
    nombre: string,
    correo:string,
    calificaciones: number[]
}
