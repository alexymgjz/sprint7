import { Component, OnInit } from '@angular/core';
import {CalculosService} from "../calculos.service";

@Component({
  selector: 'app-pressupost-list',
  templateUrl: './pressupost-list.component.html',
  styleUrls: ['./pressupost-list.component.css']
})
export class PressupostListComponent implements OnInit {
  searchText: string='';


  constructor(public service:CalculosService) { }

  ngOnInit(): void {
  }



}
