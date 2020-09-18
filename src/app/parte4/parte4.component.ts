import { Component } from '@angular/core';

@Component({
  selector: 'parte4',
  templateUrl: './parte4.component.html',
  styleUrls: ['./parte4.component.css']
})
export class Parte4Component {

  constructor() { }

  disabled:boolean = false;

  titulo:string = "asd";

  log(){
    console.log(this.titulo);
  }
}