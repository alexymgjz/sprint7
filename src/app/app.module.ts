import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HombreComponent } from './hombre/hombre.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { HomeComponent } from './home/home.component';
import {MatIconModule} from "@angular/material/icon";
import {CalculosService} from "./calculos.service";
import { PressupostListComponent } from './pressupost-list/pressupost-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HombreComponent,
    HomeComponent,
    PressupostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonToggleModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [CalculosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
