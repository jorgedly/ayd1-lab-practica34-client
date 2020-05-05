import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../../services/reportes.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {

  general: any = [];
  miReporte: any = [];
  private cta: any;
  constructor(private reporteService: ReportesService) { }

  ngOnInit(): void {
    this.cta = localStorage.getItem('no_cuenta');
    console.log(this.cta);
    this.obtenerGeneral();
    this.obtenerMis(this.cta);
  }

  obtenerGeneral(){
    this.reporteService.TranferenciaGeneral().subscribe(
      res=> {
        console.log(res);
        this.general = res;
        console.log(this.general)
      },
      err => console.log(err)
    )
  }

  obtenerMis(id){
    this.reporteService.misTransferencias(id).subscribe(
      res => {
        console.log(res);
        this.miReporte = res;
      },
      err => console.log(err)
    )
  }



}
