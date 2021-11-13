import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class CalculosService {
  guardarPresupuestos:  any[] = []
  // @ts-ignore

  price: number = 0;
  extras: number = 0;
  constructor(private formBuilder:FormBuilder,) { };

  ngOnInit(): void {


      /*

          this.activatedRoute.params.subscribe(params => {
            const pageCantidad = params['c'];
            console.log("sdasdsada sdsa ", this.activatedRoute.snapshot.queryParamMap.get('pageCantidad'))
            this.form.patchValue({
              pageCantidad: this.activatedRoute.snapshot.queryParamMap.get('pageCantidad'),
            });
          });
      */





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

}
