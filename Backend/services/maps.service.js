const axios = require('axios');
const key = process.env.GOOGLE_MAPS_API;


module.exports.getAddressCoordinates = async (address) => {

    // const key = process.env.GOOGLE_MAPS_API;

    try {
        const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
            address: address,
            key: key
        }
        });
    
        if (response.data.status === 'OK') {
        const location = response.data.results[0].geometry.location;
        return {
            lat: location.lat,
            lng: location.lng
        };
        } else {
        throw new Error(`Geocoding error: ${response.data.status}`);
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error);
        throw error;
    }
}



module.exports.getDistanceTime = async (origins, destinations) => {
    if(!origins || !destinations) {
        throw new Error('Origins and destinations are required');
    }

    // const key = process.env.GOOGLE_MAPS_API;

    try {
        const response = await axios.get('https://maps.googleapis.com/maps/api/distancematrix/json', {
            params: {
                origins: origins,
                destinations: destinations,
                key: key
            }
        });

        if (response.data.status === 'OK') {
            return response.data.rows.map(row => ({
                elements: row.elements.map(element => ({
                    distance: element.distance,
                    duration: element.duration
                }))
            }));
        } else {
            throw new Error(`Distance Matrix error: ${response.data.status}`);
        }
    } catch (error) {
        console.error('Error fetching distance and time:', error);
        throw error;
    }

}



module.exports.getSuggestions = async (input) => {
    if (!input) {
        throw new Error('Input is required');
    }

    try {
        const response = await axios.get('https://maps.googleapis.com/maps/api/place/autocomplete/json', {
            params: {
                input: input,
                key: key
            }
        });

        if (response.data.status === 'OK') {
            return response.data.predictions.map(prediction => ({
                description: prediction.description,
                place_id: prediction.place_id
            }));
        } else {
            throw new Error(`Autocomplete error: ${response.data.status}`);
        }
    } catch (error) {
        console.error('Error fetching suggestions:', error);
        throw error;
    }
}
