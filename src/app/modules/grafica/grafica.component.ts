import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';
import {RolesService} from 'src/app/services/roles.service';
import { Aprendiz, LigaI } from 'src/app/interfaces/liga.interface';
import { LigaService } from 'src/app/services/liga.service';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css'],
  providers:[MessageService]
})
export class GraficaComponent implements OnInit{

  aprendices: Aprendiz[] | any;
  posicion:any[] = [];
  id!:string;
  liga!: LigaI;

  constructor(
    private modalService: NgbModal,
    private messageService: MessageService,
    private ligaSvr : LigaService
    ){}
  ngOnInit(): void {
    this.traerAprendices();
    this.traerLiga();
  }

  traerAprendices(): void {
    this.ligaSvr.traerAprendices().subscribe((data) => {
      this.aprendices = data;
      console.log(this.aprendices);
    });
  }

  agregarAprendiz(): void {
    this.ligaSvr.añadirAprendiz(this.liga.nombre, this.aprendices[parseInt(this.posicion[0])]).subscribe((data) => {
      this.liga = data;
      console.log(this.liga);
    });
  }

  traerLiga(): void {
      this.id = this.ligaSvr.recibirLiga();
      this.ligaSvr.traerLiga(this.id).subscribe((data) => {
        this.liga= data;
        console.log(this.liga);
      })
      localStorage.removeItem('ligaid');
  }

}
