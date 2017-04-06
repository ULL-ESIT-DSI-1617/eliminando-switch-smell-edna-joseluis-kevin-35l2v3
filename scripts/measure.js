"use strict";


class Medida {
	constructor(valor, medida) {
		this.valor_ = valor;  //Valor numerico que introducimos
		this.medida_ = medida;  //type1 de medida (Temperatura, Longitud, etc)
	}
}

Medida.measures = {F: 'Fahrenheit',
			f: 'Fahrenheit',
			C: 'Celsius',
			c: 'Celsius',
			K: 'Kelvin',
			k: 'Kelvin',
			M: 'Metros',
			m: 'Metros',
			I: 'Pulgadas',
			i: 'Pulgadas'};

const regexp = /^\s*([-+]?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*([fFcCkKmMiI])\s+(?:to\s+)?([fFcCkKmMiI])\s*$/;

Medida.convertir = function (valor) {
	let measures = this.measures;//Hash de type1

	let m = valor.match(regexp);

	if (m) {
		let num = parseFloat(m[1]),//Numero
			type1 = m[2],//Origen
			type2 = m[3];//Destino

		try {
			var clase = eval(measures[type1]);
			var source = new clase(num, type1);  // new Fahrenheit(32)
			let target = "to"+measures[type2]; // Guarda string "toCelsius"
			let aux = source[target](); // Objeto Celsius(En este caso en concreto)
			return aux.toString();
		}
		catch(err) {
			return 'Desconozco como convertir desde "'+type1+'" hasta "'+type2+'"';
		}
	}
	else{
		return "Introduzca una temperatura valida: 330e-1 F to C";
	}
};
