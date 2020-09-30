import { MainOption } from './../models/mainOption.interface';
import { Injectable } from '@angular/core';
import { Opcion } from '../models/opcion.interface';
import { OpcionSemana } from '../models/opcionSemana.interface';
import './../helper/helper';
import { getTodayDayOfMonth, getTodayDayOfWeekLeter } from './../helper/helper';
import { NbChatMessageFileIconPreview } from '@nebular/theme';




//import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {HttpClientModule} from '@angular/common/http'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';
//import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
//import 'rxjs/Rx';
import { map, filter, switchMap, catchError } from 'rxjs/operators';.
import 'rxjs/add/operator/catch';
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  restOfDayText = '';
  today = '';

  opciones: MainOption[] = [];
   mainPrincipal: MainOption = { tipo: '', descripcion: ''};
   mainEnsalada: MainOption = { tipo: '', descripcion: ''};
   mainLight: MainOption = { tipo: '', descripcion: ''};

   opcionesSweet: MainOption[] = [];
   mainSweetPrincipal = { tipo: '', descripcion: ''};
   mainSweetLight = { tipo: '', descripcion: ''};


   private _jsonURL = 'assets/fakeBackEnd/';



  constructor(private http: HttpClient) {
    var object;
    this.getJSON().subscribe(data => object=data, error => console.log(error)); }


  getMes(): number {
    const mes = new Date().getMonth();
    return mes;
  }


getTodayPrincipalOption(): Opcion{
  let opciones: Opcion[];
  opciones = this.getMenuPrincipal();

  console.log(getTodayDayOfMonth());
  return opciones.filter(opcion  => opcion.dia === getTodayDayOfMonth())[0];
}

getTodayEnsaladaOption(): OpcionSemana{
  let opciones: OpcionSemana[];
  opciones = this.getMenuEnsalada();
  return opciones.filter(opcion  => opcion.dia ===  getTodayDayOfWeekLeter())[0];
}

getTodayLightOption(): OpcionSemana{
  let opciones: OpcionSemana[];
  opciones = this.getMenuLight();
  return opciones.filter(opcion  => opcion.dia === getTodayDayOfWeekLeter())[0];
}


getTodayLightSweetOption(): OpcionSemana{
  let opciones: OpcionSemana[];
  opciones = this.getPostreLight();
  return opciones.filter(opcion  => opcion.dia === getTodayDayOfWeekLeter())[0];
}

getTodayPrincipalSweetOption(): OpcionSemana{
  let opciones: OpcionSemana[];
  opciones = this.getPostrePrincipal();
  return opciones.filter(opcion  => opcion.dia === getTodayDayOfWeekLeter())[0];
}

  getMenuPrincipal(): Opcion[] {

    return [
      { dia: 1, descripcion: 'Ravioles de muzarella, lomito y parmesano con salsa de tomates y albahaca'},
    { dia: 2, descripcion: 'Milanesa de pollo con puré de papas y perejil'},
    { dia: 3, descripcion: 'Pescado al horno con papas noisette'},
    { dia: 4, descripcion: 'Lasagna mixta de carne, jamón y muzarella'},
    { dia: 5, descripcion: 'Muslo de pollo al horno con ensalada rusa'},
    { dia: 6, descripcion: 'Tarta de la huerta de estación: zuchinis, queso parmesano, cebolla de verdeo, puerros, zanahorias y calabaza'},
    { dia: 7, descripcion: 'Pastel de carne y papa sobre masa de hojaldre'},
    { dia: 8, descripcion: 'Ravioles de pollo con salsa de puerros'},
    { dia: 9, descripcion: 'Suprema de pollo rellena de jamón y queso acompañada de salsa de hongos y ensalada de papas y perejil'},
    { dia: 10, descripcion: 'Pan de carne'},
    { dia: 11, descripcion: 'Capeletis con salsa carusso'},
    { dia: 12, descripcion: 'Estofado de pollo acompañado de arroz'},
    { dia: 13, descripcion: 'Torta capresse con ensalada de zanahorias ralladas'},
    { dia: 14, descripcion: 'Polenta rellena de jamón y muzarella con topping bolognesa'},
    { dia: 15, descripcion: 'Ravioles de muzarella, lomito y parmesano con salsa de tomates y albahaca '},
    { dia: 16, descripcion: 'Milanesa de carne acompañada de puré'},
    { dia: 17, descripcion: 'Croquetas de arroz acompañadas de ensalada de lechugas y tomates'},
    { dia: 18, descripcion: 'Spaguettis con tuco de pollo'},
    { dia: 19, descripcion: 'Cazuela de lentejas'},
    { dia: 20, descripcion: 'Tarta de puerros, cebolla, panceta y queso'},
    { dia: 21, descripcion: 'Bifes de bondiola en salsa barbacoa con puré de papas'},
    { dia: 22, descripcion: 'Ravioles de verduras con salsa bolognesa'},
    { dia: 23, descripcion: 'Brochete de pollo con ensalada de arroz primavera'},
    { dia: 24, descripcion: 'Milanesa de pescado con ensalada mixta'},
    { dia: 25, descripcion: 'Tarta de jamón y choclo'},
    { dia: 26, descripcion: 'Muslo de pollo, acompañada de salsa de teriyaki y papas al vapor'},
    { dia: 27, descripcion: 'Tarta florentina'},
    { dia: 28, descripcion: 'Carré de cerdo relleno salado con puré de papas'},
    { dia: 29, descripcion: 'Ñoquis con tuco clásico'},
    { dia: 30, descripcion: 'Milanesa de pollo con puré de papas y perejil'},
    { dia: 31, descripcion: 'Pescado al horno con papas noisette'}
  ];
  }


  getMenuEnsalada(){
    let opciones: OpcionSemana[];
    opciones = [
      { dia: 'L', descripcion: 'Atún español, arroz, huevo duro, tomates, zanahorias y lechuga' },
      { dia: 'M', descripcion: 'Ensalada de hojas verdes, lascas de parmesano, suprema de pollo grille y zuchini. Aderezo de aceite, vinagre de manzana, sal y pimienta' },
      { dia: 'X', descripcion: 'Tortilla de papas clásica con ensalada de tomates y cebolla' },
      { dia: 'J', descripcion: 'Ensalada de roast beef, mix de hojas verdes, papines y huevo' },
      { dia: 'V', descripcion: 'Spaguettis caprese' },
      { dia: 'S', descripcion: 'Ensalada 100% vegetariana: hojas de lechuga crespa y mora, cous cous,pasas de arándanos rojos, maní tostado, rúcula, queso parmesano, vinagreta de rúcula, zanahoria y pepinos' },
      { dia: 'D', descripcion: 'Ensalada de lomito, choclo, lechuga, zanahorias y tomate. Aderezo salsa golf' },
    ];
    return opciones;
  }


  getMenuLight(){

    let opciones: OpcionSemana[];
    opciones = [
      { dia: 'L', descripcion: 'Pescado al horno con puré de zanahoria y calabacín' },
      { dia: 'M', descripcion: 'Spaguettis integrales con vegetales al wok' },
      { dia: 'X', descripcion: 'Pechuga de pollo deshuesado sin piel con puré de zapallo' },
      { dia: 'J', descripcion: 'Pastel de zapallitos y carne, con graten de salsa blanca y queso magre sin sal' },
      { dia: 'V', descripcion: 'Churrasco desgrasado con ensalada de lechuga, tomate y zanahoria rallada' },
      { dia: 'S', descripcion: 'Milhojas de verduras' },
      { dia: 'D', descripcion: 'Milanesas de calabaza y berenjen al horno acompañada de arroz integral' },
    ];
    return opciones;
  }


  getPostrePrincipal(){

    return [
      { dia: 'L', descripcion: 'Bizcochuelo de chocolate'},
      { dia: 'M', descripcion : 'Crema de dulce de leche'},
      { dia: 'X', descripcion : 'Fruta de estación'},
      { dia: 'J', descripcion : 'Flan caramel'},
      { dia: 'V', descripcion : 'Fruta de estación'},
      { dia: 'S', descripcion : 'Crema de chocolate'},
      { dia: 'D', descripcion : 'Helado mixto de frutilla y chocolate'},
    ];
  }

  getPostreLight(){

    return [
      { dia: 'L', descripcion: 'Fruta de estación'},
      { dia: 'M', descripcion : 'Crema sin azucar'},
      { dia: 'X', descripcion : 'Fruta de estación'},
      { dia: 'J', descripcion : 'Fruta de estación'},
      { dia: 'V', descripcion : 'Fruta de estación'},
      { dia: 'S', descripcion : 'Crema de chocolate sin azúcar'},
      { dia: 'D', descripcion : 'Fruta de estación'},
    ];
  }


  getTreeOptions(): MainOption[]{

    const principal = this.getTodayPrincipalOption().descripcion;
    const ensalada = this.getTodayEnsaladaOption().descripcion;
    const light = this.getTodayLightOption().descripcion;



    this.mainEnsalada.descripcion = ensalada;
    this.mainEnsalada.tipo = 'Ensalada';
    this.mainPrincipal.descripcion = principal;
    this.mainPrincipal.tipo = 'Principal';
    this.mainLight.descripcion = light;
    this.mainLight.tipo = 'Light';

    this.opciones.push( this.mainEnsalada );
    this.opciones.push( this.mainPrincipal );
    this.opciones.push( this.mainLight );


    return this.opciones;
}




getSweetOptions(): MainOption[]{

  const postrePrincipal = this.getTodayPrincipalSweetOption().descripcion;
  const postreLight = this.getTodayLightSweetOption().descripcion;


  this.mainSweetPrincipal.descripcion = postrePrincipal;
  this.mainSweetPrincipal.tipo = 'Principal';
  this.mainSweetLight.descripcion = postreLight;
  this.mainSweetLight.tipo = 'Light';


  this.opcionesSweet.push( this.mainSweetPrincipal );
  this.opcionesSweet.push (this.mainSweetLight );


  return this.opcionesSweet;
}








public getJSON(): Observable<any> {
  let mes = this.getMes();

  return this.http.get(this._jsonURL+mes.toString()+'.json').pipe(map((response:any) => response.json()).pipe(
   catchError(error => console.log(error); return error));

}
}
