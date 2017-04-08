"use strict";


class Temperatura extends Medida {
    constructor(valor, tipo) {
        super(valor, "Temperatura");
        this.tipo_ = tipo;  //Tipo de temperatura (Celsius, Fahrenheit, Kelvin, etc)
    }
}


// Celsius
class Celsius extends Temperatura {
    constructor(valor, tipo) {
        super(valor, tipo);
    }

	toCelsius() {
		return this;
	}

    toFahrenheit() {
        let resultado = (this.valor_ * 1.8) + 32;
        return new Fahrenheit(resultado, 'f');
    }

    toKelvin() {
        let resultado = this.valor_ + 273;
        return new Kelvin(resultado, 'k');
    }

	toString() {
		let string = this.valor_.toFixed(1) + " Celsius";
		return string;
	}
}


// Fahrenheit
class Fahrenheit extends Temperatura {
    constructor(valor, tipo) {
        super(valor, tipo);
    }

    toCelsius() {
        let resultado = (this.valor_ - 32) / 1.8;
        return new Celsius(resultado, 'c');
    }

	toFahrenheit() {
		return this;
	}

    toKelvin() {
        let resultado = ((this.valor_ - 32) / 1.8) + 273;
        return new Kelvin(resultado, 'k');
    }

	toString() {
		let string = this.valor_.toFixed(1) + " Fahrenheit";
		return string;
	}
}

// Kelvin
class Kelvin extends Temperatura {
	constructor(valor, tipo) {
		super(valor, tipo);
	}

	toCelsius() {
		let resultado = this.valor_ - 273;
		return new Celsius(resultado, 'c');
	}

	toFahrenheit() {
		let resultado = ((this.valor_ - 273) * 1.8) + 32;
		return new Fahrenheit(resultado, 'f');
	}

	toKelvin() {
		return this;
	}

	toString() {
		let string = this.valor_.toFixed(1) + " Kelvin";
		return string;
	}
}
