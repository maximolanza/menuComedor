import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Opcion } from '../models/opcion.interface';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuPrincipal: Opcion[];
  menuEnsalada: Opcion[];
  menuLight: Opcion[];
  postreComun: Opcion[];
  postreLight: Opcion[];

  constructor() {   }

  ngOnInit(): void {

  }

}
