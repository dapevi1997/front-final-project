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
  selector: 'app-promedios',
  templateUrl: './promedios.component.html',
  styleUrls: ['./promedios.component.css'],
  providers:[MessageService]
})
export class PromediosComponent implements OnInit {

  ligas: LigaI[] | any;
  ligas2: LigaI[] | any;
  id!:string;

  constructor(
    private modalService: NgbModal,
    private messageService: MessageService,
    private ligaSvr : LigaService
    //  private toastr: ToastrService,
  ){}
  ngOnInit(): void {
    this.traerLigas();
  }

  traerLigas(): void {
    this.ligaSvr.traerTodo().subscribe((data) => {
      this.ligas = data;
      this.ligas2=data?.aprendices?.find(nombre => console.log(nombre)
      )
    });
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

  enviarLiga(id: string): void{
    this.ligaSvr.enviarLiga(id)
  }
}
