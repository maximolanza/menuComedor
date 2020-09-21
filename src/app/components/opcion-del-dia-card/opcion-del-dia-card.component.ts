import { Component, Input, OnInit } from '@angular/core';
import { NbCardComponent, NbCardHeaderComponent } from '@nebular/theme';

@Component({
  selector: 'app-opcion-del-dia-card',
  templateUrl: './opcion-del-dia-card.component.html',
  styleUrls: ['./opcion-del-dia-card.component.scss']
})
export class OpcionDelDiaCardComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input() tipo: string;
  // tslint:disable-next-line: no-input-rename
  @Input() descripcion: string;
  constructor() { }

  ngOnInit(): void {


  }

}
