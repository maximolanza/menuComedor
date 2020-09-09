import { Component, OnInit } from '@angular/core';
import { getMonthName, getTodayDayOfWeekName } from 'src/app/shared/helper/helper';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {
  restOfDayText : string = "";
  today : string = '';
  constructor() { }

  ngOnInit(): void {
    this.today = getTodayDayOfWeekName();
    this.restOfDayText = `${new Date().getDate().toString()} de  ${getMonthName()} del ${new Date().getFullYear().toString()}` 
  }

}
