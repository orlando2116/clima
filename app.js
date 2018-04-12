const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion ciudad para obtener clima',
        demand: true
    }
}).argv;

let direccion = encodeURI(argv.direccion);


let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugar(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng)

        return `El clima en ${coors.direccion} es de ${temp}ºC`
    } catch (e) {
        return `no se pudo predeterminar clima en ${direccion}`;
    }

}

getInfo(direccion)
    .then(res => {
        console.log(res);
    }, err => {

    })