import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent {

  constructor(    private modalService: NgbModal,
    ){}

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

}
