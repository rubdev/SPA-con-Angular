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
    console.log(busqueda);
    if (busqueda.length > 0) {
      this.router.navigate(['/buscar', busqueda]);
    }
  }

}
