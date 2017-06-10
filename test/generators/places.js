

const placesTest = require('../../src/generators/places');

['tavern'].forEach(place => {
    console.log(place, placesTest[place]());
});