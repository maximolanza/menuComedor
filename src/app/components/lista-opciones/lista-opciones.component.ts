import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/shared/services/menu.service';
import { Opcion } from '../../shared/models/opcion.interface';
@Component({
  selector: 'app-lista-opciones',
  templateUrl: './lista-opciones.component.html',
  styleUrls: ['./lista-opciones.component.scss']
})
export class ListaOpcionesComponent implements OnInit {

  menuPrincipal : Opcion[];
  constructor( private menuService : MenuService) {
      this.menuPrincipal = menuService.getMenuPrincipal();

   }



  ngOnInit(): void {
  }

}
