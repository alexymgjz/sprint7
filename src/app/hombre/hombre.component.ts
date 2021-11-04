import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {viewport} from "@popperjs/core";
import {createViewChild} from "@angular/compiler/src/core";
@Component({
  selector: 'app-hombre',
  templateUrl: './hombre.component.html',
  styleUrls: ['./hombre.component.css']
})
export class HombreComponent implements OnInit {
  pageActive: boolean = false;
  seoActive: boolean = false;
  adsActive: boolean = false;

  pageCantidad: number = 1;
  idiomaCantidad: number = 1;

  price: number = 0;
  extras: number = 0;

  @ViewChild('numeroPaginas') numeroPaginasElem: ElementRef | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.updateAllValue();
  }

  recet(){
    this.idiomaCantidad=1;
    this.pageCantidad=1;
    this.extras=0;
  }

  onCheckboxChange(e: any) {
      console.log(e);
    if (e.target.checked && e.target.defaultValue == 500  ) {
      this.recet()
      this.pageActive = true;
      this.onTypeTextChange(e)
      this.price = Number(e.target.defaultValue) + this.extras ;
      }
    else if(e.target.checked && e.target.defaultValue == 300  ){
      this.price += Number(e.target.defaultValue);
      this.pageActive = false;
    }
    else if(e.target.checked && e.target.defaultValue == 200  ){
      this.price += Number(e.target.defaultValue);
      this.pageActive = false;
    }

     else if(e.target.defaultValue == 500 && !e.target.checked){
      this.price -= Number(e.target.defaultValue)}
     else if(e.target.defaultValue == 300 && !e.target.checked){
      this.price -= Number(e.target.defaultValue) }
     else if(e.target.defaultValue == 200 && !e.target.checked){
      this.price -= Number(e.target.defaultValue) }

  };

  onTypeTextChange(e: any) {
    this.price -= Number(e.target.defaultValue) + this.extras
    this.extras=0;
    if ((this.pageCantidad !=1 || this.idiomaCantidad !=1))
      this.extras = Number(this.pageCantidad) * Number(this.idiomaCantidad) * 30
      this.price += this.extras
  };

  updateAllValue(){

    this.price = 0;
    this.extras = 0;

    if (this.pageActive){
      this.price += 500;
    }
    if(this.pageCantidad !=1 || this.idiomaCantidad !=1){
      this.extras = this.pageCantidad * this.idiomaCantidad * 30;
    }
    if (this.seoActive){
      this.price += 300;
    }
    if (this.adsActive){
      this.price += 200;
    }

  }


/*  agregar(valor: number){
      if (valor >=1){
        this.pageCantidad =  Number(this.numeroPaginasElem?.nativeElement.value) +1;

      }
    }


  disminuir(elem:number) {
    if (elem === 1) {
      if (this.pageCantidad >= 1) {
        this.pageCantidad--;
      }
    } else {
      if (this.idiomaCantidad >= 1) {
        this.idiomaCantidad--;
      }
    }
  }*/
}
