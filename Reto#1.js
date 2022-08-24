let ovejas = [
	{name: 'Noa', color: 'azul'},
	{name: 'Euge', color: 'rojo'},
	{name: 'Navidad', color: 'rojo'},
	{name: 'Ki Na Ma', color: 'rojo'},
	{name: 'AAAAAaaaaa', color: 'rojo'},
	{name: 'Nnnnnnnn', color: 'rojo'},
];

ovejas = ovejas.filter(oveja=>{
    if(
        oveja.color == 'rojo' &&
        oveja.name.toLowerCase().includes('n') &&
        oveja.name.toLowerCase().includes('a')
    ) return oveja
})

ovejas;