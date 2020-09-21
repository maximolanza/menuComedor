import { MainOption } from './../models/mainOption.interface';
import { Injectable } from '@angular/core';
import { Opcion } from '../models/opcion.interface';
import { OpcionSemana } from '../models/opcionSemana.interface';
import './../helper/helper';
import { getTodayDayOfMonth, getTodayDayOfWeekLeter } from './../helper/helper';
import { NbChatMessageFileIconPreview } from '@nebular/theme';

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





  constructor() { }


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
      { dia: 1, descripcion: 'Tarta de jamón, puerros y tomates'},
    { dia: 2, descripcion: 'Carré de cerdo relleno salado con puré de papas'},
    { dia: 3, descripcion: 'Ravioles de muzarella, lomito y parmesano con salsa capresse'},
    { dia: 4, descripcion: 'Milanesa de pollo con puré de papas y perejil'},
    { dia: 5, descripcion: 'Pescado al horno con papas noisette'},
    { dia: 6, descripcion: 'Lasagna mixta de carne, jamón y muzarella'},
    { dia: 7, descripcion: 'Muslo de pollo al horno con ensalada rusa'},
    { dia: 8, descripcion: 'Tarta de la huerta de estación: zuchinis, queso parmesano, cebolla de verdeo, puerros, zanahorias y calabaza'},
    { dia: 9, descripcion: 'Pastel de carne y papa sobre masa de hojaldre'},
    { dia: 10, descripcion: 'Ravioles de pollo con salsa de puerros'},
    { dia: 11, descripcion: 'Suprema de pollo rellena de jamón y queso acompañada de salsa de hongos y ensalada alemana de papas'},
    { dia: 12, descripcion: 'Croquetas de arroz acompañadas de ensalada de lechugas y tomates'},
    { dia: 13, descripcion: 'Capeletis con salsa carusso'},
    { dia: 14, descripcion: 'Estofado de pollo acompañado de arroz'},
    { dia: 15, descripcion: 'Torta capresse con ensalada de zanahorias ralladas'},
    { dia: 16, descripcion: 'Bifes a la portuguesa con papas'},
    { dia: 17, descripcion: 'Ñoquis con tuco clásico'},
    { dia: 18, descripcion: 'Milanesa de carne acompañada de arroz pilaf'},
    { dia: 19, descripcion: 'Torta de pollo acompañada de tomates y cebolla colorada'},
    { dia: 20, descripcion: 'Spaguettis con tuco de pollo'},
    { dia: 21, descripcion: 'Cazuela de lentejas'},
    { dia: 22, descripcion: 'Tarta de puerros, cebolla, panceta y queso'},
    { dia: 23, descripcion: 'Bifes de bondiola en salsa barbacoa con puré de papas'},
    { dia: 24, descripcion: 'Ravioles de jamón con salsa bolognesa'},
    { dia: 25, descripcion: 'Brochete de pollo con ensalada de arroz primavera'},
    { dia: 26, descripcion: 'Milanesa de pescado con ensalada mixta'},
    { dia: 27, descripcion: 'Tarta de jamón y choclo'},
    { dia: 28, descripcion: 'Suprema de pollo, acompañada de salsa de puerros y arroz con azafrán'},
    { dia: 29, descripcion: 'Tarta de jamón, puerros y tomates'},
    { dia: 30, descripcion: 'Carré de cerdo relleno salado con puré de papas'}
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
      { dia: 'S', descripcion: 'Ensalada de papines, huevo duro, zanahorias, choclo, cherrys y pepinos' },
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
      { dia: 'S', descripcion: 'Souffle de calabaza, zanahoria y brocolli' },
      { dia: 'D', descripcion: 'Milanesas de calabaza y berenjen al horno acompañada de arroz integral' },
    ];
    return opciones;
  }


  getPostrePrincipal(){

    return [
      { dia: 'L', descripcion: 'Fruta de estación'},
      { dia: 'M', descripcion : 'Crema de caramelo'},
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
}
