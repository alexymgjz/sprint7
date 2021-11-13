import {Component, OnInit} from '@angular/core';

import {CalculosService} from "../calculos.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';


@Component({
  selector: 'app-hombre',
  templateUrl: './hombre.component.html',
  styleUrls: ['./hombre.component.css']
})
export class HombreComponent implements OnInit {
  pageCantidadValor:number=1;
  pageIdiomaCantidad:number=1;
  // @ts-ignore
 public form: FormGroup;

  constructor(
    public service:CalculosService,
    private formBuilder:FormBuilder,
    private location: Location,
    private activatedRoute: ActivatedRoute) {
  }

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

    this.form = this.formBuilder.group({
        presupuestoName : [''] ,
        cliente : [''],
        webPage : [''],
        pageCantidad : ['1'],
        idiomaCantidad : ['1'],
        seoActive : [''],
        adsActive : [''],
        totalPrecios : ['']
      })

    this.updateAllData()

  }

  updateAllData(){
    this.service.updateAllValue(this.form);
  }


  add(valor:number){
   if (valor===1){
     if (this.pageCantidadValor >= 1){
       this.pageCantidadValor++
       this.form.patchValue({ pageCantidad:this.pageCantidadValor })
     }
   }
   if (valor===2){
     if (this.pageIdiomaCantidad >= 1){
       this.pageIdiomaCantidad++
       this.form.patchValue({ idiomaCantidad:this.pageIdiomaCantidad })
     }
   }

     this.updateAllData();
/*    const valActual = this.form.value.pageCantidad;
    const newValue = Number(this.form.value.pageCantidad) + 1;

    this.form.patchValue({
      pageCantidad: newValue,
    });
    let cururl = this.location.path().replace('pageCantidad=' + valActual, 'pageCantidad=' + newValue);

    this.location.go(cururl);*/
}



  rest(valor:number){
    if (valor===1){
      if (this.pageCantidadValor > 1){
        this.pageCantidadValor--
        this.form.patchValue({ pageCantidad:this.pageCantidadValor })
      }
    }
    if (valor===2){
      if (this.pageIdiomaCantidad >1){
        this.pageIdiomaCantidad--
        this.form.patchValue({ idiomaCantidad:this.pageIdiomaCantidad })
      }
    }
    this.updateAllData();
  }



send(){
 this.service.guardarPresupuestos?.push(this.form.value);


  this.form.reset()
  this.service.price=0;
  this.service.extras=0;

   console.log(this.service.guardarPresupuestos)
}

}

