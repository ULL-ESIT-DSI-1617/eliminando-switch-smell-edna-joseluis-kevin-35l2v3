"use strict";

(function(exports) {
	"use strict";
	function main() {
		var valor = document.getElementById('original').value;
		converted.innerHTML = Medida.convertir(valor);
		return false;
	}
	exports.main = main;
})(this);
