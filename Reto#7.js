const almacen = {
	estanteria1: {
		cajon1: {
			producto1: 'coca-cola',
			producto2: 'fanta',
			producto3: 'sprite',
		},
	},
	estanteria2: {
		cajon1: 'vacio',
		cajon2: {
			producto1: 'pantalones',
			producto2: 'camiseta', // <- ¡Está aquí!
		},
	},
};

let a = contains(almacen, 'camiseta');
a;

function contains(store, product) {
	let existe = false;
	let test = [];
	for (const key in store) {
		if (Object.hasOwnProperty.call(store, key)) {
			const element = store[key];
			if (typeof element == 'object') {
				existe = existe | contains(element, product);
			} else {
				existe = element == product ? true : existe;
			}
		}
	}
	return !!existe;
}
