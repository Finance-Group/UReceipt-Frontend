export interface Recibo {
  id: number
  fechaEmision: Date
  fechaPago: Date
  monto: number
  retencion:number
  dias: number
  tasaE: number
  tasaDescuento: number
  montoDescuento: number
  neto: number
  recibido: number
  entregado: number
  tcea: number
  carteraId: number
}
