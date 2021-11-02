import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-hombre',
  templateUrl: './hombre.component.html',
  styleUrls: ['./hombre.component.css']
})
export class HombreComponent implements OnInit {
  page: number = 500;
  pageCantidad: number = 1;
  idiomaCantidad: number = 1;
  SEO: number = 300;
  Ads: number = 200;
  price: number = 0;
  active: boolean = false;
  extras:number=0;


  constructor() {
  }

  ngOnInit(): void {
  }

  onCheckboxChange(e: any) {
    if (e.target.checked) {
      this.active = true;
      this.price += Number(e.target.defaultValue)
    } else {
      this.price -= Number(e.target.defaultValue)

    }
  }

  onTypeTextChange(e: any) {
    if (e.target.value!= 1)
      this.extras = Number(this.pageCantidad) * Number(this.idiomaCantidad) * 30
      this.price += this.extras
  }

}
