import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-saldo',
  templateUrl: './consultar-saldo.component.html',
  styleUrls: ['./consultar-saldo.component.scss']
})
export class ConsultarSaldoComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

  public workStatuses = [
    { id: 0, description: 'No_de_Operacion' },
    { id: 1, description: 'Fecha' },
    { id: 2, description: 'Descripción' },
    { id: 3, description: 'cargos' },
    { id: 4, description: 'abonos' },
    { id: 5, description: 'saldo' }
  ];
  
  public contact = { name: '', isVIP: false, gender: '', workStatus: 0 };

}
