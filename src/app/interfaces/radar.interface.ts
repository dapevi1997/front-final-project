export interface RadarI {
    nombre:string,
    areas:Area[]
}
export interface Area{
    area:string,
    radarNombre:string,
    descriptor:string,
    factual: number,
    conceptual: number,
    procedimental: number,
    metacognitivo: number;
    nivel: number;
}