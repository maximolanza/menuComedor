import { MainOption } from './../models/mainOption.interface';
import { Injectable } from '@angular/core';
import { Opcion } from '../models/opcion.interface';
import { OpcionSemana } from '../models/opcionSemana.interface';
import './../helper/helper';
import { getTodayDayOfMonth, getTodayDayOfWeekLeter } from './../helper/helper';
import { NbChatMessageFileIconPreview } from '@nebular/theme';

import { default as setiembre } from './../../../assets/fakeBackEnd/09.json';
import { default as octubre } from './../../../assets/fakeBackEnd/10.json';


import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map, filter, switchMap, catchError } from 'rxjs/operators';
import { stringify } from 'querystring';
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  restOfDayText = '';
  today = '';
  opciones: MainOption[] = [];
  mainPrincipal: MainOption = { tipo: '', descripcion: '' };
  mainEnsalada: MainOption = { tipo: '', descripcion: '' };
  mainLight: MainOption = { tipo: '', descripcion: '' };
  opcionesSweet: MainOption[] = [];
  mainSweetPrincipal = { tipo: '', descripcion: '' };
  mainSweetLight = { tipo: '', descripcion: '' };
  menu: any;



  constructor(private http: HttpClient) {
    this.menu = this.getJSON();
  }


  getMes(): number {
    const mes = new Date().getMonth() + 1;
    return mes;
  }


  getTodayPrincipalOption(): Opcion {
    let opciones: Opcion[];
    opciones = this.getMenuPrincipal();
    return opciones.filter(opcion => opcion.dia === getTodayDayOfMonth())[0];
  }

  getTodayEnsaladaOption(): OpcionSemana {
    let opciones: OpcionSemana[];
    opciones = this.getMenuEnsalada();
    return opciones.filter(opcion => opcion.dia === getTodayDayOfWeekLeter())[0];
  }

  getTodayLightOption(): OpcionSemana {
    let opciones: OpcionSemana[];
    opciones = this.getMenuLight();
    return opciones.filter(opcion => opcion.dia === getTodayDayOfWeekLeter())[0];
  }


  getTodayLightSweetOption(): OpcionSemana {
    let opciones: OpcionSemana[];
    opciones = this.getPostreLight();
    return opciones.filter(opcion => opcion.dia === getTodayDayOfWeekLeter())[0];
  }

  getTodayPrincipalSweetOption(): OpcionSemana {
    let opciones: OpcionSemana[];
    opciones = this.getPostrePrincipal();
    return opciones.filter(opcion => opcion.dia === getTodayDayOfWeekLeter())[0];
  }


  /* Getting the set of menu options */

  getMenuPrincipal(): Opcion[] {
    return this.getJSON().menu.menuPrincipal;
  }


  getMenuEnsalada() {
    let opciones: OpcionSemana[];
    opciones = this.getJSON().menu.menuEnsalada;
    return opciones;
  }


  getMenuLight() {
    let opciones: OpcionSemana[];
    opciones = this.getJSON().menu.menuLight;
    return opciones;
  }


  getPostrePrincipal() {
    return this.getJSON().menu.postrePrincipal;
  }

  getPostreLight() {
    return this.getJSON().menu.postreLight;
  }


  getThreeOptions(): MainOption[] {

    const principal = this.getTodayPrincipalOption().descripcion;
    const ensalada = this.getTodayEnsaladaOption().descripcion;
    const light = this.getTodayLightOption().descripcion;

    this.mainEnsalada.descripcion = ensalada;
    this.mainEnsalada.tipo = 'Ensalada';
    this.mainPrincipal.descripcion = principal;
    this.mainPrincipal.tipo = 'Principal';
    this.mainLight.descripcion = light;
    this.mainLight.tipo = 'Light';

    this.opciones.push(this.mainEnsalada);
    this.opciones.push(this.mainPrincipal);
    this.opciones.push(this.mainLight);


    return this.opciones;
  }




  getSweetOptions(): MainOption[] {

    const postrePrincipal = this.getTodayPrincipalSweetOption().descripcion;
    const postreLight = this.getTodayLightSweetOption().descripcion;

    this.mainSweetPrincipal.descripcion = postrePrincipal;
    this.mainSweetPrincipal.tipo = 'Principal';
    this.mainSweetLight.descripcion = postreLight;
    this.mainSweetLight.tipo = 'Light';

    this.opcionesSweet.push(this.mainSweetPrincipal);
    this.opcionesSweet.push(this.mainSweetLight);


    return this.opcionesSweet;
  }




  public getJSON(): any {
    const mes = this.getMes();
    return (mes === 9 ? setiembre : octubre);
  }
}
