import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service'


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  heroe:any={};

  constructor(private activatedRoute: ActivatedRoute, private servicioHeroes: HeroesService) 
  {
    this.activatedRoute.params.subscribe( params => {
      this.heroe= this.servicioHeroes.getHeroe(params['id']);
      console.log(this.heroe);

    })
   }


}
