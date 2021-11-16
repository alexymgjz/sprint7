import {Component, OnInit} from '@angular/core';
import {CalculosService} from "../calculos.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-hombre',
  templateUrl: './hombre.component.html',
  styleUrls: ['./hombre.component.css']
})
export class HombreComponent implements OnInit {
  // @ts-ignore
  public form: FormGroup;
  constructor(
    public service:CalculosService,
    private formBuilder:FormBuilder,
    private location: Location,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  async ngOnInit() {
    this.form = this.formBuilder.group({
        presupuestoName : [''],
        cliente : [''],
        webPage : [''],
        pageCantidad : ['1'],
        idiomaCantidad : ['1'],
        seoActive : [''],
        adsActive : [''],
        totalPrecios : [''],
        fecha: new Date()
      })


    this.activatedRoute.queryParamMap.subscribe(values => {
        this.form.patchValue({
          presupuestoName : values.get('presupuestoName') || '',
          cliente :  values.get('cliente') || '',
          webPage :  values.get('webPage') || '',
          pageCantidad :  values.get('pageCantidad') || '1',
          idiomaCantidad : values.get('idiomaCantidad') || '1',
          seoActive :  values.get('seoActive') || '',
          adsActive :  values.get('adsActive') || '',
          totalPrecios :  values.get('totalPrecios') || '0'
        });
    });
    this.form.valueChanges.subscribe(values =>{
      this.router.navigate(['hombre'],{queryParams: values})
    });
  }

  updateAllData(){
    this.service.updateAllValue(this.form);
  }

  add(valor:number){
    if (valor===1){
     if (this.form.value.pageCantidad >= 1){
       this.form.patchValue({ pageCantidad: Number(this.form.value.pageCantidad)+1 });
     }
   }
   if (valor===2){
     if (this.form.value.idiomaCantidad >= 1){
       this.form.patchValue({ idiomaCantidad: Number(this.form.value.idiomaCantidad)+1 });
     }
   }
    this.updateAllData();
}

  rest(valor:number){
    if (valor===1){
      if (this.form.value.pageCantidad > 1){
        this.form.patchValue({ pageCantidad: Number(this.form.value.pageCantidad)-1 });
      }
    }
    if (valor===2){
      if (this.form.value.idiomaCantidad > 1){
        this.form.patchValue({ idiomaCantidad: Number(this.form.value.idiomaCantidad)-1 });
      }
    }
    this.updateAllData();
  }

  send(){
    this.service.send(this.form);
    this.form.reset()
    this.service.price=0;
    this.service.extras=0;
    this.form.patchValue({ idiomaCantidad: 1 });
    this.form.patchValue({ pageCantidad: 1 });

  }

  }

