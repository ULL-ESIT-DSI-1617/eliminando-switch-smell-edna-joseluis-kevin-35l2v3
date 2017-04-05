"use strict";


class Medida {
	constructor(valor) {
		this.valor_ = valor;  //Valor numerico que introducimos
		// this.medida_ = medida;  //type1 de medida (Temperatura, Longitud, etc)

    this.measures = { F: 'Fahrenheit',
                      f: 'Fahrenheit',
                      C: 'Celsius',
                      c: 'Celsius',
                      K: 'Kelvin',
                      k: 'Kelvin',
                      M: 'Metros',
                      m: 'Metros',
                      I: 'Pulgadas',
                      i: 'Pulgadas'};
	}

  // convertir (valor) {
  //   let measures = this.measures;//Hash de type1
  //
  //   let m = valor.match(regexp);
  //
  //   if (m) {
  //       let num = parseFloat(m[1]),//Numero
  //           type1 = m[2],//Origen
  //           type2 = m[3];//Destino
  //
  //     try {
  //       let source = new measures[type1](num);  // new Fahrenheit(32)
  //       let target = "to"+measures[type2].name; // Guarda string "toCelsius"
  //
  //       // return source[target]().toFixed(2) + " "+target; // "0 Celsius"
  //       let aux = source[target](); // Objeto Celsius(En este caso en concreto)
  //       console.log(aux.toString());
  //       return aux.toString();
  //     }
  //     catch(err) {
  //       return 'Desconozco como convertir desde "'+type1+'" hasta "'+type2+'"';
  //     }
  //   }
  //   else
  //     return "Introduzca una temperatura valida: 330e-1 F to C";
  // };


}


Medida.convertir = function (valor) {
  let measures = this.measures;//Hash de type1

  let m = valor.match(regexp);

  if (m) {
      let num = parseFloat(m[1]),//Numero
          type1 = m[2],//Origen
          type2 = m[3];//Destino

    try {
      console.log("Chivato 1");
      var source = new measures[type1](num);  // new Fahrenheit(32)
      console.log("Chivato 2");
      let target = "to"+measures[type2].name; // Guarda string "toCelsius"
      console.log("Chivato 3");
      // return source[target]().toFixed(2) + " "+target; // "0 Celsius"
      let aux = source[target](); // Objeto Celsius(En este caso en concreto)
      console.log(aux.toString());
      return aux.toString();
    }
    catch(err) {
      return 'Desconozco como convertir desde "'+type1+'" hasta "'+type2+'"';
    }
  }
  else
    return "Introduzca una temperatura valida: 330e-1 F to C";
};
