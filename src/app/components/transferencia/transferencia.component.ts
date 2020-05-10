import { Component, OnInit } from '@angular/core';
import { TransferenceService } from 'src/app/services/transference.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.scss']
})
export class TransferenciaComponent implements OnInit {

  miCuenta: number = 0;
  cuenta2: number = 0;
  monto: number = 0.00;
  error: boolean = false;

  constructor(public transferService: TransferenceService, public router: Router) { }

  ngOnInit(): void {

  }

  onKeyMiCuenta(event){
    this.miCuenta = event.target.value;
  }

  onKeyCuenta2(event){
    this.cuenta2 = event.target.value;
  }

  onKeyMonto(event){
    this.monto = event.target.value;
  }

  passMoney(){  
    //TODO verificar si tiene suficiente saldo
    this.transferService.transferMoney(this.miCuenta,this.cuenta2,this.monto)
    .subscribe(
      res => {
        this.showMessage(res);
        //error
      }
    );
  }

  showMessage(flag){
    if(flag){
      this.error = false;
      Swal.fire({
        icon: 'success',
        title: 'Hecho',
        text: 'Transaccion realizada con exito'
      }) 
      this.router.navigate(['/','home']);   
    }else{
      this.error = true;
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error ejecutando la transaccion'
      })
    }
  }

}
