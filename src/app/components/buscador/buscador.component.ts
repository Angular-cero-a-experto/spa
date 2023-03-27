import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HeroesService, Heroe } from '../../servicios/heroes.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes:Heroe[] = [];
  termino: string = '' ;

  constructor(  private activateRouter: ActivatedRoute,
                private _heroeService: HeroesService,
                private _router:Router,
              ) {

  }
              
  ngOnInit(): void {
    this.activateRouter.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this._heroeService.buscarHeroe(params['termino']);
      console.log(this.heroes);
    });
  }

  verHeroe(idx:number) {

    this._router.navigate( ['/heroe', idx] );

  }

}
