const axios = require('axios');

const getLugarLatLng = async (dir) => {
    const encodedUrl = encodeURI(dir);
    // console.log(encodedUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {'x-rapidapi-key': '3c185e4a0amsh691f511f4fec2b4p17c086jsn8c6f3379aad6'}
        });

    const resp = await instance.get();

    if(resp.data.Results.length === 0){
        throw Error(`No hay resultados para ${dir}`)
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}