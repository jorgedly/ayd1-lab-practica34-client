import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../../services/reportes.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {

  general: any = [];
  miReporte: any = [];
  pdf: boolean = false;
  fgeneral: boolean = false;
  cta: any;
  encabezado = ['No', 'Cuenta_Origen', 'Cuenta Destino', 'No._Transaccion', 'Monto'];
  row = [];
  tableBody = [];
  constructor(public reporteService: ReportesService) { }

  ngOnInit(): void {
    this.cta = localStorage.getItem('no_cuenta');
    this.obtenerGeneral();
    this.obtenerMis(this.cta);
  }

  obtenerGeneral() {
    this.reporteService.TranferenciaGeneral().subscribe(
      res => {
        this.general = res;
        this.fgeneral = true;
      },
      err => this.fgeneral = false
    )
  }

  obtenerMis(id) {
    this.reporteService.misTransferencias(id).subscribe(
      res => {
        this.miReporte = res;
      },
      err => console.log(err)
    )
  }

  generatePdf() {
    for (var i = 0; i < this.encabezado.length; i++) {
      for (var j = 0; j < this.general.length; j++) {
        if (i === 0) {
          this.row[j] = j + 1;
        }
        if (i === 1) {
          this.row[j] = this.general[j].cuenta_origen;
        }
        if (i === 2) {
          this.row[j] = this.general[j].cuenta_destino;
        }
        if (i === 3) {
          this.row[j] = this.general[j].id_transaccion;
        }
        if (i === 4) {
          this.row[j] = this.general[j].monto;
        }
      }
      this.tableBody.push(this.row);
      this.row = [];
    }

    const documentDefinition = {
      content: [
        {
          text: 'Transferencias Generales',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        {
          table: {
            headerRows: 1,
            widths: ['*', '*', '*', '*', '*'],
            body: [
              ['No', 'Cuenta_Origen', 'Cuenta Destino', 'No._Transaccion', 'Monto'],
              this.tableBody
            ]
          }
        }
      ], info: {
        title: 'Analisis y Diseño 1',
        author: 'Grupo No. 5',
        subject: 'RESUME',
        keywords: 'Transferencias Generales',
      },
    };
    pdfMake.createPdf(documentDefinition).open();
    this.tableBody = [];
  }

  generateMiPdf() {
    for (var i = 0; i < this.encabezado.length; i++) {
      for (var j = 0; j < this.miReporte.length; j++) {
        if (i === 0) {
          this.row[j] = j + 1;
        }
        if (i === 1) {
          this.row[j] = this.miReporte[j].cuenta_origen;
        }
        if (i === 2) {
          this.row[j] = this.miReporte[j].cuenta_destino;
        }
        if (i === 3) {
          this.row[j] = this.miReporte[j].id_transaccion;
        }
        if (i === 4) {
          this.row[j] = this.miReporte[j].monto;
        }
      }
      this.tableBody.push(this.row);
      this.row = [];
    }

    const documentDefinition = {
      content: [
        {
          text: 'Mis Transferencias',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        {
          columns: [
            [{
              text: localStorage.getItem('nombres'),
              style: 'name'
            },
            {
              text: localStorage.getItem('apellidos'),
              style: 'name'
            },
            {
              text: 'Cuenta No.: ' + localStorage.getItem('no_cuenta'),
            },
            ]
          ]
        },

        {
          table: {
            headerRows: 1,
            widths: ['*', '*', '*', '*', '*'],
            body: [
              ['No', 'Cuenta_Origen', 'Cuenta Destino', 'No._Transaccion', 'Monto'],
              this.tableBody
            ]
          }
        }
      ], info: {
        title: 'Analisis y Diseño 1',
        author: 'Grupo No. 5',
        subject: 'RESUME',
        keywords: 'Transferencias Generales',
      },
    };
    pdfMake.createPdf(documentDefinition).open();
    this.tableBody = [];
  }
}
