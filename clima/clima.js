const axios = require('axios');



const getClima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=825d37cb61f554ef66545a5a8c8f3634&units=metric`);

    return resp.data.main.temp;
}

module.exports= {
    getClima
}