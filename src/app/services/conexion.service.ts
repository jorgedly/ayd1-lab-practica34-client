import { Injectable } from '@angular/core';
import { ConsumoService } from './consumo.service';
import { Cambio } from '../components/tipocambio/tipocambio.component';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  constructor(private consumo: ConsumoService) { }

  async obtenerCambioSimple(): Promise<number> {
    return await this.consumo.obtenerTipoCambioSimple() as number;
  }

  async obtenerTipoCambioFechaInicio(fecha: string): Promise<Cambio[]> {
    return await this.consumo.obtenerTipoCambioFechaInicio(fecha) as Cambio[];
  }

}
