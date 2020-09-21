import { MainOption } from './../../shared/models/mainOption.interface';
import { MenuService } from 'src/app/shared/services/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opciones-del-dia',
  templateUrl: './opciones-del-dia.component.html',
  styleUrls: ['./opciones-del-dia.component.scss']
})
export class OpcionesDelDiaComponent implements OnInit {
  mainOptions: MainOption[];
  mainSweetOptions: MainOption[];

  constructor( menuService: MenuService) {
    this.mainOptions = menuService.getTreeOptions();
    this.mainSweetOptions = menuService.getSweetOptions();

  }

  ngOnInit(): void {

  }

}
