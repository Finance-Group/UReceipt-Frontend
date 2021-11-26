import { Component, OnInit } from '@angular/core';

interface Info {
  id: number
  title: string
  description: string
}

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  infoData: Info = {} as Info;
  listInfo: Array<Info> = [
    { id: 0, title: 'Días por año a usar (DA)', description: 'Aquí deberá ser muy cauteloso y elegir el número de días con los que la Legislación del Estado donde se descuento el instrumento, idealiza al año, pudiendo ser un año de 360 o de 365 días. En algunos estados esta característica se deja al acuerdo de las partes y se debe especificar en el contrato.'},
    { id: 1, title: 'Plazo de tasa efectiva (P)', description: 'El plazo o periodo de la tasa efectiva representa al tiempo en el que se expresa el plazo de la tasa de interés dada como dato ANUAL.\n' + '\n' + 'Por el contrario, si le informan que se utilizará en su contrato una Tasa Efectiva a 75 días, se tratará de un plazo especial, entonces deberá seleccionar la opción ESPECIAL.\n'},
    { id: 2, title: 'Taza efectiva (TE)', description: 'Es la tasa de interés efectiva con la que se compensará al acreedor. Será un número mayor a CERO (0) expresado necesariamente como valor porcentual, y que permite el uso de decimales.\n' + '\n' + 'Por ejemplo, si le informan que se utilizará en su contrato una Tasa Efectiva Anual (T.E.A.) de 10.25%'},
    { id: 3, title: 'Fecha de Descuento (FD)', description: 'Fecha de Descuento es aquella fecha en la que se descontará el instrumento financiero. En ese momento el acreedor calculará los intereses que se producirán en el tiempo comprendido entre la fecha de descuento y la fecha de vencimiento y procederá a cobrar por adelantado dichos intereses'},
    { id: 4, title: 'Tasa Nominal (TN)', description: 'Es aquella que se calcula con base en un periodo de tiempo determinado teniendo en cuenta solo el capital invertido\n' + '\n' + 'Es un tipo de capitalización simple (el capital no sufre variación)\n' + '\n' + 'Los Intereses se calcula siempre en base al capital invertido'},
    { id: 5, title: 'Motivos', description: 'Estos corresponden a los costes o cartera-gasto-inicial que deben pagarse al acreedor para realizar la operación, y que se descontarán del Valor Neto (diferencia entre el Valor Nominal y Descuento); estos montos afectarán al cálculo de la Tasa de Coste Efectivo Anual (T.C.E.A.).\n' + 'De acuerdo a las normas legales, será obligatorio ingresar los costes o cartera-gasto-inicial que pasan por la pasarela de pago del Banco (acreedor); sin embargo, sugerimos ingresar todos los cartera-gasto-inicial que usted realizará como consecuencia del descuento, de este modo la T.C.E.A. que resulte de dicho cálculo, será la vista desde su punto de vista y no la del acreedor.'},
    { id: 6, title: 'Valor Expresado PORCENTAJE', description: 'Esta información constituye un complemento del campo Motivo, y corresponde a la forma de enfrentar el pago de los costes o cartera-gasto-inicial que se producen para realizar la operación, que se encuentran en función del Valor Nominal y afectan al Valor Neto.\n' + '\n' + 'Si como condición del descuento debe pagar un Seguro equivalente al 0.05% del Valor Nominal, entonces deberá seleccionar la opción PORCENTAJE\n' + '\n' + 'Y digitar en el campo que se encuentra a su derecha:\n' + '\n' + '0.05'},
    { id: 7, title: 'Total a Recibir (TR)', description: 'Estos corresponden a los costes o cartera-gasto-inicial que deben pagarse al acreedor al finalizar la operación, y que se agregarán al Valor Nominal. Estos montos afectarán al cálculo de la Tasa de Coste Efectivo Anual (T.C.E.A.).\n' + 'De acuerdo a las normas legales, será obligatorio ingresar los costes o cartera-gasto-inicial que pasan por la pasarela de pago del Banco (acreedor); sin embargo, sugerimos ingresar todos los cartera-gasto-inicial que usted realizará como consecuencia del descuento, de este modo la T.C.E.A. que resulte de dicho cálculo, será la vista desde su punto de vista y no la del acreedor.\n' + '\n' + 'Por ejemplo, si debe pagar US$ 5.00 por Gastos de Administración a la finalización de la operación, entonces deberá seleccionar la opción de ADMINISTRACIÓN Si el coste o gasto no está en la relación, seleccione la opción Otros.'},
    { id: 8, title: 'Valor Expresado EFECTIVO', description: 'Esta información constituye un complemento del campo Motivo, y corresponde a la forma de enfrentar el pago de los costes o cartera-gasto-inicial que se producen para realizar la operación, que se encuentran en función del Valor Nominal y afectan al Valor Neto. \n' + '\n' + 'Si debe pagar US$ 5.00 por Gastos de Administración a la finalización de la operación, entonces deberá seleccionar la opción EFECTIVO y digitar en el campo que se encuentra a su derecha'},
    { id: 9, title: 'Fecha de Emisión', description: 'Fecha de Recibo es aquella fecha, en la que se origina el Recibo por Honorarios Profesionales, y que para efectos del cálculo sólo tiene carácter histórico, pues no afecta al resultado de la operación.'},
    { id: 10, title: 'Fecha de Pago', description: ' Es aquella fecha en la que vencerá el compromiso originado por el Recibo y el cliente procederá a su cancelación.'},
    { id: 11, title: 'Total a Recibir (TR)', description: ' Es aquella fecha en la que vencerá el compromiso originado por el Recibo y el cliente procederá a su cancelación.'},
    { id: 12, title: 'Total a Recibir (TR)', description: 'Es el valor por el cual se ha girado el Recibo por Honorarios y cuyo compromiso vence en la fecha de pago, y que usualmente debe imprimirse/escribirse sobre el mismo. Este deberá estar expresado en unidades monetarias (u.m.)'}
  ]

  constructor() { }

  ngOnInit(): void {
  }
  getInfoById(id:number): void {
    this.infoData= this.listInfo[id];
  }
}
