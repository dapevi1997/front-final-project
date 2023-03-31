import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RadarService } from 'src/app/services/radares.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {
  @Input() nombre : string = '';
  @Input() index : number = 0; 
  ngOnInit(): void {
    
  }
 constructor(
  private radarServide : RadarService,
  private toastr: ToastrService
 ){}
  eliminar = () => {
    this.radarServide.eliminarArea(this.nombre, this.index).subscribe({
      next: data=>{
        this.toastr.success('Area eliminada exitosamente!','Success');
        setTimeout(() => {
        window.location.reload();
      }, 1000); 
      }
    })
  }
}
