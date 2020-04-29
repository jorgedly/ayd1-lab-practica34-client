import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.scss']
})
export class BarraComponent implements OnInit {

  nombres: string;
  apellidos: string;
  no_cuenta: string;

  paneles: Panel[] = [
    {
      descripcion: 'Ir al perfil',
      ruta: '/home',
      icono: 'person'
    },
    {
      descripcion: 'Ir a tipo cambio',
      ruta: '/tipocambio',
      icono: 'attach_money'
    }
  ];

  constructor() {
    this.nombres = localStorage.getItem('nombres') ? localStorage.getItem('nombres') : 'Nombre';
    this.apellidos = localStorage.getItem('apellidos') ? localStorage.getItem('apellidos') : 'Apellido';
    this.no_cuenta = localStorage.getItem('no_cuenta') ? localStorage.getItem('no_cuenta') : '123';
  }

  ngOnInit(): void {
  }

}

interface Panel {
  descripcion: string;
  ruta: string;
  icono: string;
}