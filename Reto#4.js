let height = 20;
let arbol = '';

let maxLength=height-2
let tronco = ''

for (let i = 0; i < height; i++) {
	const element = height;
    let fila = '*'
    for (let j = 1; j <= i*2; j++) {
        fila += '*'
    }
    let relleno = '';
    for (let k = 0; k <= maxLength-i; k++) {
        relleno += '_'
    }
    if(i == 0) {
        tronco += relleno+"#"+relleno;
    }
	arbol+=relleno+fila+relleno+'\n';
}
arbol+=tronco+'\n'+tronco
arbol;