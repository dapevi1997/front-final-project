import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';
import { LigaI } from 'src/app/interfaces/liga.interface';
import { LigaService } from 'src/app/services/liga.service';

@Component({
  selector: 'app-editar-liga',
  templateUrl: './editar-liga.component.html',
  styleUrls: ['./editar-liga.component.css']
})
export class EditarLigaComponent {
  form: FormGroup;
  constructor(
    private modalService: NgbModal,
    private messageService: MessageService,
    private ligaSvr : LigaService,
    private toastr: ToastrService,
  ){
    this.form = new FormGroup({
      coach: new FormControl(null, [Validators.required, Validators.pattern(/^([a-zA-Z ]){2,254}$/)]),
      anio: new FormControl(null, [Validators.required])
    });
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

  editarLiga(): void {
    this.ligaSvr.editarLiga(this.ligaI).subscribe({
      next: (v) => {
        if (v) {
          this.modalService.dismissAll();
          this.toastr.success('Liga Editada');
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      },
      error: (e) => {
        console.log(this.ligaI);
      },
    });
  }

  cerrarModal = () => {
    this.modalService.dismissAll();
  }
}
