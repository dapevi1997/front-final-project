import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';
import { RolesService } from 'src/app/services/roles.service';
import { LigaI } from 'src/app/interfaces/liga.interface';
import { LigaService } from 'src/app/services/liga.service';
import { RadarI } from 'src/app/interfaces/radar.interface';
import { RadarService } from 'src/app/services/radares.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-liga',
  templateUrl: './liga.component.html',
  styleUrls: ['./liga.component.css'],
  providers: [MessageService],
})
export class LigaComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    private messageService: MessageService,
    private toastr: ToastrService,
    private ligaSvr: LigaService,
    private radarSvr: RadarService
  ) { }
  ngOnInit(): void {
    this.traerRadares();
  }
  nombre!: string;
  radarCopiado: RadarI = {
    nombre: '',
    areas: [{
      area: "",
      radarNombre: '',
      descriptor: "",
      factual: 0,
      conceptual: 0,
      procedimental: 0,
      metacognitivo: 0,
      nivel: 0
    }]
  }

  ligaI: LigaI = {
    nombre: '',
    periodo: '',
    aprendices: [],
    coach: '',
    anio: '',
    radar: {
      nombre: '',
      areas: []
    }
  };
  radares!: RadarI[];

  radarNombre!: string;

  crearLiga = () => {
    this.ligaSvr.crearLiga(this.ligaI).subscribe({
      next: (v) => {

        if (v) {
          this.modalService.dismissAll();
          this.toastr.success('Liga Creada');
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      },
      error: (e) => {
        console.log(this.ligaI);
      },
    });
    this.agregarRadar();
  };

  enviarRadarNombre(): void {
    this.ligaSvr.enviarRadar(this.radarNombre);
  }

  traerRadares = () => {
    this.radarSvr.getRadares().subscribe(radares => {
      this.radares = radares;
    })
  }

  agregarRadar(): void {
    this.enviarRadarNombre();
    this.radarNombre = this.ligaSvr.recibirRadar();
    localStorage.removeItem('radarNombre');
    if (!this.radarNombre) {
      console.error('Radar name not set');
      return;
    }

    this.radarSvr.getRadarEspecifico(this.radarNombre).pipe(
      switchMap(data => {
        this.radarCopiado = data;
        this.nombre = this.ligaI.nombre;
        return this.ligaSvr.añadirRadar(this.nombre, this.radarCopiado);
      })
    ).subscribe(
      {
        next: data =>{
          this.toastr.success("Se agregó radar")
        },
        error: err =>{
          this.toastr.error("Ha ocurrido un error")
        }
      }
    );
  }
}
