import { Component } from '@angular/core';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'menuComedor';
}
