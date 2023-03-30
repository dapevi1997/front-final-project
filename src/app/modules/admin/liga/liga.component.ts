import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';
import { RolesService } from 'src/app/services/roles.service';
import { LigaI } from 'src/app/interfaces/liga.interface';
import { LigaService } from 'src/app/services/liga.service';

@Component({
  selector: 'app-liga',
  templateUrl: './liga.component.html',
  styleUrls: ['./liga.component.css'],
  providers: [MessageService],
})
export class LigaComponent {
  constructor(
    private modalService: NgbModal,
    private messageService: MessageService,
    private toastr: ToastrService,
    private ligaSvr: LigaService
  ) {}
  ligaI: LigaI = {
    id: '',
    nombre: '',
    periodo: '',
    aprendices: [],
    coach: '',
    anio: '',
    radar: {
      nombre: '',
      areas: [],
    },
  };

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
  };
}
