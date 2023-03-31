export interface RadarI {
    nombre:string,
    areas:AreaI[]
}
export interface AreaI{
    area:string,
    radarNombre:string,
    descriptor:string,
    factual: number,
    conceptual: number,
    procedimental: number,
    metacognitivo: number;
    nivel: number;
}
