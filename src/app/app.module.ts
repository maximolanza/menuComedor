import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbCardComponent, NbLayoutComponent, NbIconModule, NbSidebarModule, NbButtonModule, NbMenuModule, NbChatModule, NbActionsModule, NbInputModule, NbUserModule, NbStepperModule, NbDialogModule, NbTooltipModule, NbListModule, NbToastrModule, NbSpinnerModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { ItemComponent } from './components/item/item.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { OpcionesDelDiaComponent } from './components/opciones-del-dia/opciones-del-dia.component';
import { ListaOpcionesComponent } from './components/lista-opciones/lista-opciones.component';
import { OpcionesComponent } from './components/opciones/opciones.component';
import { TodayComponent } from './components/today/today.component';
import { MenuService } from './shared/services/menu.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    CardComponent,
    NavbarComponent,
    OpcionesDelDiaComponent,
    ListaOpcionesComponent,
    OpcionesComponent,
    TodayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    NbSidebarModule.forRoot(), // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbMenuModule.forRoot(),
    NbChatModule,
    NbActionsModule,
    NbInputModule,
    NbUserModule,
    NbStepperModule,
    NbDialogModule,
    NbCardModule,
    NbTooltipModule,
    FormsModule,
    NbListModule,
    NbToastrModule.forRoot(),
    NbUserModule,
    NbSpinnerModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
