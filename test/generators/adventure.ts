

import * as adventuresTest from '../../src/generators/adventures';

['adventure'].forEach(adv => {
    console.log(adv, adventuresTest[adv]());
});