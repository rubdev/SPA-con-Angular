import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  buscarHeroe( busqueda: string ) {
    console.log('Desde NAV: ' + busqueda);
    this.router.navigate(['/buscar', busqueda]);
  }

}
