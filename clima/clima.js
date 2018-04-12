const axios = require('axios');

const getClima = async(lat, lng) => {

    let apiKey = '7402eee6453fbd07a013615bffbff75b';
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`);



    return resp.data.main.temp;
}

module.exports = { getClima }