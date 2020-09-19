import { Component, Input, Output, EventEmitter, Host } from '@angular/core';
import { AppComponent } from '../app/app.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent{

  @Input('data') user: any

  // @Output() borrar = new EventEmitter<number>()

  constructor(
    @Host() private _app: AppComponent
  ) {
    console.log(this._app)
  }

  //Forma de borrar usuarios de la lista sin el uso de @Host, usando @Output.
  // BorrarUsuario(id: number){
  //   this.borrar.emit(id)
  // }

   BorrarUsuario(id: number){
    this._app.usuarios = this._app.usuarios.filter(usuario => usuario.id != id)
  }
}
