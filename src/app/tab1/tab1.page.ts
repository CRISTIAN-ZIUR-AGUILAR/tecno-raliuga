import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  nombre= "Cristian"
  carrera="INGENIERIA INFORMATICA"
  constructor() {}
  cambiarNombre(){
    this.nombre = "Ruiz"
  }
  cambiarContenido(){
    this.carrera = "#SomosInfoTics"
  }

}
