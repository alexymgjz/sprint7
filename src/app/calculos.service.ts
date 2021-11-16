import { Injectable } from '@angular/core';
import { FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class CalculosService {
  guardarPresupuestosBackup: any[]=[];

  guardarPresupuestos:  any[] = this.guardarPresupuestosBackup ;

  original :any[] =[  ];

  price: number = 0;
  extras: number = 0;
  constructor() { };


  send(form: FormGroup){
    form.patchValue({
      fecha :  new Date()
    });
    this.guardarPresupuestosBackup.push(form.value);
    this.original.push(form.value);

    this.updateAllValue(form);

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
    this.guardarPresupuestos = this.guardarPresupuestosBackup;
    this.guardarPresupuestos.reverse();

  }

  restaurarOriginal(){
     this.guardarPresupuestos = this.original;

  }

  ordenNombre() {
    this.guardarPresupuestos = this.guardarPresupuestosBackup;
    // @ts-ignore
    this.guardarPresupuestos = this.guardarPresupuestos.map(this.guardarPresupuestos.sort((a,b) =>{
       if (a.presupuestoName.toLowerCase() - b.presupuestoName.toLowerCase()){
         return -1;
       }
       if (a.presupuestoName.toLowerCase() > b.presupuestoName.toLowerCase()){
         return 1;
       }
       if (a.presupuestoName.toLowerCase() == b.presupuestoName.toLowerCase()){
         return 0;
       }
    }));



  }
}
