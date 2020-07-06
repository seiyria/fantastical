

import * as placesTest from '../../src/generators/places';

['tavern'].forEach(place => {
    console.log(place, placesTest[place]());
});