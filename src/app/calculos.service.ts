import { Injectable } from '@angular/core';
import { FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class CalculosService {
  guardarPresupuestosBackup: any[]=[];

  guardarPresupuestos:  any[]=[] ;

  mostrar: boolean = false;

  price: number = 0;
  extras: number = 0;
  constructor() { };


  send(form: FormGroup){
    form.patchValue({
      fecha :  new Date()
    });
    this.guardarPresupuestos.push(form.value);
    this.guardarPresupuestosBackup.push(form.value);
    this.updateAllValue(form);
    this.mostrar = true;
  }


  updateAllValue(form: FormGroup){
    this.price = 0;
    this.extras = 0;

    if (form.value.webPage){
      this.price += 500;
    }
    if(form.value.pageCantidad !=1 || form.value.idiomaCantidad !=1){
      this.extras = form.value.pageCantidad * form.value.idiomaCantidad * 30;
      this.price += this.extras
    }
    if (form.value.seoActive){
      this.price += 300;
    }
    if (form.value.adsActive){
      this.price += 200;
     }
    form.value.totalPrecios =this.price;
  }



  invertirOrden(){
    this.guardarPresupuestos.reverse();
  }


  ordenNombre() {
    // @ts-ignore
    this.guardarPresupuestos.sort(function (a, b) {
      return a.presupuestoName.toLowerCase() > b.presupuestoName.toLowerCase();
    });
  }
  ordenFecha() {
    // @ts-ignore
    this.guardarPresupuestos.sort(function (a, b) {
      return a.fecha < b.fecha;
    });
  }

  pich(searchText: string) {
     this.guardarPresupuestos = this.guardarPresupuestosBackup.filter(o => o.presupuestoName.includes(searchText));
   }
}
