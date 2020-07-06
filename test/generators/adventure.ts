

import * as adventuresTest from '../../src/generators/adventure';

['adventure'].forEach(adv => {
    console.log(adv, adventuresTest[adv]());
});