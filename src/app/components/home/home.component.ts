import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from 'src/app/services/autentificacion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nombre: string = "prueba";
  apellido: string;
  dpi: number;
  no_cuenta: number;
  saldo: number;
  email: string;
  password: string;

  constructor(public authService: AutentificacionService) {
  }

  ngOnInit(): void {
    this.getDatos();
  }

  async getDatos(){
    this.no_cuenta = <number>(<any>localStorage.getItem('no_cuenta'));
    const data = await this.authService.obtenerDatos(this.no_cuenta);

    this.nombre = data[0].nombres;
    this.apellido = data[0].apellidos;
    this.dpi = data[0].DPI;
    this.saldo = data[0].saldo;
    this.email = data[0].email;
    this.password = data[0].password;

    console.log(data[0]);
  }
  
  onKeyEmail(event) {
    this.email = event.target.value;
  }

  onKeyPassword(event) {
    this.password = event.target.value;
  }

  async modificar(){

    const b_correcto = await this.authService.verificarPerfil(this.no_cuenta,this.email,this.password);

    if(b_correcto){
      const resp = await this.authService.modificarPerfil(this.no_cuenta, this.email, this.password);

      if(resp["success"])
        alert('Datos modificados correctamente');
      else
        alert('Los datos no han podido ser modificados');
    }
    else
      alert('Datos ingresados incorrectos');

  }

}
