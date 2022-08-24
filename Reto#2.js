const letter = 'bici coche   balón  _playstation bici coche peluche';

let regalos = {};

let listaRegalos = letter.split(" ")

listaRegalos.map(regalo=>{
    regalo = regalo.trim()
    if(regalo[0] != '_' && regalo != '') {
        regalos[regalo] = (regalos[regalo] == undefined)?1:++regalos[regalo]
    }
})

regalos;
