import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent{

  @Input('data') user: any

  @Output() borrar = new EventEmitter<number>()

  constructor() { }

  BorrarUsuario(id: number){
    this.borrar.emit(id)
  }
}
