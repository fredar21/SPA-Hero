import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private servicio:HeroesService) { }

  ngOnInit() {
  }

  buscarHeroe(termino){
    let rr = this.servicio.buscarHeroe(termino);
    console.log(rr);
  }


}
