import { Component } from '@angular/core';
import { Router } from '@angular/router';


import { HeroesService, Heroe } from '../../../servicios/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  constructor(  private _router: Router ){

  }

  buscarHeroe( termino: string ){
    this._router.navigate(['buscador', termino])
  }
}
