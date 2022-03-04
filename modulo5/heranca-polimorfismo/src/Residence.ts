import { Place } from "./Place"

export class Residence extends Place {
    constructor(
      private residentsQuantity: number,
  
      cep: string
    ) {
      super(cep);
    }
    
    public getDwellersQuantity(): number {
      return this.residentsQuantity
    }
  }