import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent {

  @Input()  heroe: any = {};
  @Input()  index: any = 0;

  @Output() heroeSeleccionando: EventEmitter<number>;

  constructor( private _router: Router ){
    this.heroeSeleccionando = new EventEmitter();
  }

  verHeroe() {
    // console.log(this.index);
    this._router.navigate(['/heroe', this.index ]);
    // this.heroeSeleccionando.emit( this.index );
  }

}
