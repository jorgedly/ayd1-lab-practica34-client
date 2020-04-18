import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from 'src/app/services/autentificacion.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  nombres_registro: string = '';
  apellidos_registro: string = '';
  dpi_registro: string = '';
  no_cuenta_registro: string = '';
  email_registro: string = '';
  password_registro: string = '';

  constructor(public autentificacionService: AutentificacionService,
              public router: Router) { }

  ngOnInit(): void {
  }

  //------------------------------------------------OBTENER DATOS------------------------------------------------//
  onKeyPassLogin(event){
    this.password = event.target.value;
  }

  onKeyEmailLogin(event){
    this.email = event.target.value;
  }

  onKeyNombresRegister(event){
    this.nombres_registro = event.target.value;
  }

  onKeyApellidosRegister(event){
    this.apellidos_registro = event.target.value;
  }

  onKeyDPIRegister(event){
    this.dpi_registro = event.target.value;
  }

  onKeyNoCuentaRegister(event){
    this.no_cuenta_registro = event.target.value;
  }

  onKeyEmailRegister(event){
    this.email_registro = event.target.value;
  }

  onKeyPasswordRegister(event){
    this.password_registro = event.target.value;
  }

  //---------------------------------------------------METODOS---------------------------------------------------//
  async login(){
    const resp = await this.autentificacionService.login(this.email,this.password);
    console.log(resp);

    if(resp)
      this.router.navigate(['/','home']);  
    else
      Swal.fire({
        icon: 'error',
        title: 'Datos incorrectos.',
        text: 'Intente nuevamente'
      })
  }

}
