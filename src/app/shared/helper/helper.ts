
export function getTodayDayOfWeekName() : string{
var days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
var d = new Date();
var dayName = days[d.getDay()];
return dayName;
}


export function getMonthName() : string{
    var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var m =  new Date();
    var monthName = months[m.getMonth()];
    return monthName;
    }

export function getTodayDayOfWeekLeter() : string{
    var days = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];
    var d = new Date();
    var dayName = days[d.getDay()];
    return dayName;
    }



export function getTodayDayOfMonth() : number{
    var d = new Date();
    return d.getDate();
}
