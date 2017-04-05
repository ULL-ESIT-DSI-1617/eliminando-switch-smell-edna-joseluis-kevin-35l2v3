"use strict";

// class Medida {
// 	constructor(valor, medida) {
// 		this.valor_ = valor;  //Valor numerico que introducimos
// 		this.medida_ = medida;  //Tipo de medida (Temperatura, Longitud, etc)
// 	}
// }

// class Temperatura extends Medida {
//     constructor(valor, tipo) {
//         super(valor, "Temperatura");
//         this.tipo_ = tipo;  //Tipo de temperatura (Celsius, Fahrenheit, Kelvin, etc)
//     }
// }

// class Longitud extends Medida {
//     constructor(valor, tipo) {
//         super(valor, "Longitud");
//         this.tipo_ = tipo;  //Tipo de longitud (Metros, Pulgadas, etc)
//     }
// }

// class Celsius extends Temperatura {
//     constructor(valor, tipo) {
//         super(valor, tipo);
//     }
//
// 	toCelsius() {
// 		return this;
// 	}
//
//     toFahrenheit() {
//         let resultado = (this.valor_ * 1.8) + 32;
//         return new Fahrenheit(resultado, 'f');
//     }
//
//     toKelvin() {
//         let resultado = this.valor_ + 273;
//         return new Kelvin(resultado, 'k');
//     }
//
// 	toString() {
// 		let string = this.valor_.toFixed(1) + " Celsius";
// 		return string;
// 	}
// }
//
// class Fahrenheit extends Temperatura {
//     constructor(valor, tipo) {
//         super(valor, tipo);
//     }
//
//     toCelsius() {
//         let resultado = (this.valor_ - 32) / 1.8;
//         return new Celsius(resultado, 'c');
//     }
//
// 	toFahrenheit() {
// 		return this;
// 	}
//
//     toKelvin() {
//         let resultado = ((this.valor_ - 32) / 1.8) + 273;
//         return new Kelvin(resultado, 'k');
//     }
//
// 	toString() {
// 		let string = this.valor_.toFixed(1) + " Fahrenheit";
// 		return string;
// 	}
// }
//
// class Kelvin extends Temperatura {
// 	constructor(valor, tipo) {
// 		super(valor, tipo);
// 	}
//
// 	toCelsius() {
// 		let resultado = this.valor_ - 273;
// 		return new Celsius(resultado, 'c');
// 	}
//
// 	toFahrenheit() {
// 		let resultado = ((this.valor_ - 273) * 1.8) + 32;
// 		return new Fahrenheit(resultado, 'f');
// 	}
//
// 	toKelvin() {
// 		return this;
// 	}
//
// 	toString() {
// 		let string = this.valor_.toFixed(1) + " Kelvin";
// 		return string;
// 	}
// }

// class Metros extends Longitud {
// 	constructor(valor, tipo) {
// 		super(valor, tipo);
// 	}
//
// 	toMetros() {
// 		return this;
// 	}
//
// 	toPulgadas() {
// 		let resultado = this.valor_ * 39.37;
// 		return new Pulgadas(resultado, 'i');
// 	}
//
// 	toString() {
// 		let string = this.valor_.toFixed(1) + " Meters";
// 		return string;
// 	}
// }
//
// class Pulgadas extends Longitud {
//     constructor(valor, tipo) {
//         super(valor, tipo);
//     }
//
//     toMetros() {
//         let resultado = this.valor_ / 39.37;
//         return new Metros(resultado, 'm');
//     }
//
// 	toPulgadas() {
// 		return this;
// 	}
//
// 	toString() {
// 		let string = this.valor_.toFixed(1) + " Inches";
// 		return string;
// 	}
// }

const regexp = /^\s*([-+]?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*([fFcCkKmMiI])\s+(?:to\s+)?([fFcCkKmMiI])\s*$/;

function calculate() {
    let result;
    let aux;
    let error = "ERROR! Try something like '-4.2C to K' instead";
    let valor = original.value;
    // let regexp = /^\s*([-+]?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*([fFcCkKmMiI])\s+(?:to\s+)?([fFcCkKmMiI])\s*$/;

    let m = valor.match(regexp);

    if (m) {
        let num = parseFloat(m[1]);
        let type1 = m[2];
        let type2 = m[3];

        switch (type1) {
            case 'f':
            case 'F':
                aux = new Fahrenheit(num, type1);
                switch (type2) {
                    case 'c':
				    case 'C':
                        result = aux.toCelsius();
                        result = result.toString();
                        break;
				    case 'k':
				    case 'K':
                        result = aux.toKelvin();
                        result = result.toString();
                        break;
				    case 'f':
				    case 'F':
                        result = aux.toString();
                        break
				    default:
                        result = error;
                }
                break;
            case 'c':
            case 'C':
                aux = new Celsius(num, type1);
                switch (type2) {
                    case 'f':
				    case 'F':
                        result = aux.toFahrenheit();
                        result = result.toString();
                        break;
				    case 'k':
				    case 'K':
                        result = aux.toKelvin();
                        result = result.toString();
                        break;
				    case 'c':
				    case 'C':
                        result = aux.toString();
                        break;
				    default:
                        result = error;
                }
                break;
            case 'k':
            case 'K':
                aux = new Kelvin(num, type1);
                switch (type2) {
                    case 'c':
				    case 'C':
                        result = aux.toCelsius();
                        result = result.toString();
                        break;
				    case 'f':
				    case 'F':
                        result = aux.toFahrenheit();
                        result = result.toString();
                        break;
				    case 'k':
				    case 'K':
                        result = aux.toString();
                        break;
				    default:
                        result = error;
                }
                break;
            case 'm':
            case 'M':
                aux = new Metros(num, type1);
                switch (type2) {
                    case 'i':
                    case 'I':
                        result = aux.toPulgadas();
                        result = result.toString();
                        break;
				    case 'm':
				    case 'M':
                        result = aux.toString();
                        break;
				    default:
                        result = error;
                }
                break;
            case 'i':
            case 'I':
                aux = new Pulgadas(num, type1);
                switch (type2) {
                    case 'm':
				    case 'M':
                        result = aux.toMetros();
                        result = result.toString();
                        break;
				    case 'i':
				    case 'I':
                        result = aux.toString();
                        break;
				    default:
                        result = error;
                }
                break;
            default:
        }
        converted.innerHTML = result;
    }
    else {
        converted.innerHTML = error;
    }
}
