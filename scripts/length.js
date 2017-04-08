"use strict";


class Longitud extends Medida {
    constructor(valor, tipo) {
        super(valor, "Longitud");
        this.tipo_ = tipo;  //Tipo de longitud (Metros, Pulgadas, etc)
    }
}

class Metros extends Longitud {
	constructor(valor, tipo) {
		super(valor, tipo);
	}

	toMetros() {
		return this;
	}

	toPulgadas() {
		let resultado = this.valor_ * 39.37;
		return new Pulgadas(resultado, 'i');
	}

	toString() {
		let string = this.valor_.toFixed(1) + " Meters";
		return string;
	}
}

class Pulgadas extends Longitud {
    constructor(valor, tipo) {
        super(valor, tipo);
    }

    toMetros() {
        let resultado = this.valor_ / 39.37;
        return new Metros(resultado, 'm');
    }

	toPulgadas() {
		return this;
	}

	toString() {
		let string = this.valor_.toFixed(1) + " Inches";
		return string;
	}
}
