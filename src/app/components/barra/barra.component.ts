import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.scss']
})
export class BarraComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}

interface Panel {
  descripcion: string;
  ruta: string;
  icono: string;
}