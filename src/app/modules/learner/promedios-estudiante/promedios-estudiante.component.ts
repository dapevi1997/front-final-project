import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'primeng/api';
import { LigaI } from 'src/app/interfaces/liga.interface';
import { AuthService } from 'src/app/services/auth.service';
import { LigaService } from 'src/app/services/liga.service';

@Component({
  selector: 'app-promedios-estudiante',
  templateUrl: './promedios-estudiante.component.html',
  styleUrls: ['./promedios-estudiante.component.css'],
  providers:[MessageService]
})
export class PromediosEstudianteComponent implements OnInit {

  ligas: LigaI[] | any;
  ligas2: LigaI[] | any;
  id!:string;
  correo!:string
  constructor(
    private modalService: NgbModal,
    private messageService: MessageService,
    private ligaSvr : LigaService,
    private auth : AuthService
  ){}
  ngOnInit(): void {
    
    const token =this.auth.DecodeToken(localStorage.getItem('token')||'')
    this.correo= token.firebase.identities.email[0]
    console.log(this.correo);
    this.traerLigas();
    
  }

  traerLigas(): void {
    this.ligaSvr.traerLigaEstudiante(this.correo).subscribe({
      next: data =>{
        this.ligas = data;
        console.log("data: " +  data);
      },
      error: error => console.log(error)
      
      
    });
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

  enviarLiga(id: string): void{
    this.ligaSvr.enviarLiga(id)
  }
}
