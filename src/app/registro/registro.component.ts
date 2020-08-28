import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
registro=[];
trabajador:any;
Nombre:string;
Apellido:string;
SueldoBase:number;
contador:number;


  constructor() { }

  ngOnInit(): void {
    this.SueldoBase=0;
    this.contador=0;
    this.Nombre='';
    this.Apellido='';
  }

   Formulario(){
     this.trabajador={"Nombre":this.Nombre,"Apellido":this.Apellido,"SueldoBase":this.SueldoBase,};
     this.registro.push(this.trabajador);
     this.contador++;
   }
}
