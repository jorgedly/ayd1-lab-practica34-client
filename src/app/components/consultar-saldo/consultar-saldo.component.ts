import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../../services/consulta.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AutentificacionService } from 'src/app/services/autentificacion.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-consultar-saldo',
  templateUrl: './consultar-saldo.component.html',
  styleUrls: ['./consultar-saldo.component.scss']
})

export class ConsultarSaldoComponent implements OnInit {

  consulta: Consultita;
  noCuenta: number = 0;
  saldo: number = 0;
  cuenta : any;
  saldoDeb: any;
  saldoCre: any;

  constructor(public consultaService: ConsultaService,
              public router: Router) { 
                this.getConsult();
                this.getSaldoDeb();
                this.getSaldoCre();
              }

  ngOnInit(): void {
  }

  async getConsult(){
    const resp = await this.consultaService.getConsulta(this.noCuenta);
    this.cuenta = JSON.stringify(resp);
    console.log(this.cuenta);
    this.saldo = this.cuenta[0];
    var val = this.cuenta;
    val = val.replace("[","")
    val = val.replace("]","")
    const obj = JSON.parse(val);
    this.noCuenta = obj.no_cuenta;
    this.saldo = obj.saldo;
  }

  async getSaldoDeb(){
    const resp = await this.consultaService.getSaldoDeb(this.noCuenta);
    this.saldoDeb = resp;
    console.log("debito"+resp);
  }

  async getSaldoCre(){
    const resp = await this.consultaService.getSaldoCre(this.noCuenta);
    this.saldoCre = resp;
    console.log("credito"+resp);
  }

  /*
  public workStatuses = [
    { id: 0, description: 'No_de_Operacion' },
    { id: 1, description: 'Fecha' },
    { id: 2, description: 'Descripción' },
    { id: 3, description: 'cargos' },
    { id: 4, description: 'abonos' },
    { id: 5, description: 'saldo' }
  ];*/

  public contact = { name: '', isVIP: false, gender: '', workStatus: 0 };

}

export interface Consultita {
  no_de_operacion: number;
  fecha: string;
  descripcion: string;
  cargos: string;
  abonos: string;
  saldo: string;
}

