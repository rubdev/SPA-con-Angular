import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private activatedRoute: ActivatedRoute, private _heroesService: HeroesService ) { 

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {
      this.heroes = this._heroesService.buscarHeroes( params['busqueda'] );
      console.log(this.heroes);
    });

  }

}
