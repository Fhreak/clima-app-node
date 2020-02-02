const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs')
    .options({
        direccion:{
            alias: 'd',
            desc: 'Dirección de la cuidad para obtener el clima',
        }
    }).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp)
//     });

// clima.getClima(40.750000, -74.000000)
//     .then(resp => {
//         console.log(resp)
//     })
//     .catch(err => {
//         console.log(err)
//     })



const getInfo = async (direccion) => {

    try{
        const coords = await lugar.getLugarLatLng(direccion);

        const temperatura = await clima.getClima(coords.lat, coords.lng);
        console.log(`El clima de ${direccion} es de ${temperatura}`);
    }catch(e){
        return `No se pudo determinar el clima de ${direccion}`
    }

}

console.log(getInfo(argv.direccion));