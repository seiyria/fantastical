
import * as partiesTest from '../../src/generators/parties';

['mysticOrder', 'militaryUnit', 'guild'].forEach(type => {
    console.log(type, partiesTest[type]());
});