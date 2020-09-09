import { Component, OnInit } from '@angular/core';
import { NbCardComponent, NbCardHeaderComponent } from '@nebular/theme';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

}
