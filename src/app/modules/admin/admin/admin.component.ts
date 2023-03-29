import { Component } from '@angular/core';
// import { ToastrModule, ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers:[MessageService]
})
export class AdminComponent {
  constructor(
    private modalService: NgbModal,
    private messageService: MessageService,
    // private toastr: ToastrService
  ){

  }
  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

}
