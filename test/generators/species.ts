
import * as speciesTest from '../../src/generators/species';

['cavePerson', 'dwarf', 'halfling',
 'gnome', 'elf', 'highelf', 'fairy',
 'highfairy', 'darkelf', 'drow',
 'halfdemon', 'demon', 'dragon', 'angel'].forEach(type => {

    ['male', 'female', 'none'].forEach(gender => {
        console.log(type, gender, speciesTest[type](gender));
    });

});

['goblin', 'orc', 'ogre', 'demon', 'human'].forEach(type => {
    console.log(type, speciesTest[type]());
});