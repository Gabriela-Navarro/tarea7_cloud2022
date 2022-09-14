import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opcion1',
  templateUrl: './opcion1.component.html',
  styleUrls: ['./opcion1.component.scss']
})
export class Opcion1Component implements OnInit {

  n1:number = 0;
  n2:number = 0;
  respuesta: number= 0;
  mostrarRespuesta : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  suma(){

    this.mostrarRespuesta=true;
    this.respuesta = this.n1 + this.n2;
  }
  resta(){

    this.mostrarRespuesta=true;
    this.respuesta = this.n1 - this.n2;
  }
  multiplicacion(){

    this.mostrarRespuesta=true;
    this.respuesta = this.n1 * this.n2;
  }
  division(){

    this.mostrarRespuesta=true;
    this.respuesta = this.n1 / this.n2;
  }

}
