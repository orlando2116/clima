const axios = require('axios');

const getLugar = async(direccion) => {

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${direccion}&key=AIzaSyAoHMuBSTLzsVFodo8EdF4PLPygoNxQ1cQ`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error('no hay resultados para ciudad ', direccion);
    }

    let obj = resp.data.results[0];

    return {
        direccion: obj.formatted_address,
        lat: obj.geometry.location.lat,
        lng: obj.geometry.location.lng
    }

}

module.exports = {
    getLugar
}