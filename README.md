# fantastical
A fantasy name generator based on [fantasygen](https://github.com/alxgiraud/fantasygen). You can see examples of the output below [here](http://fantasygen.herokuapp.com/).

## Install
`npm i fantastical`

## Usage
`const { species, parties, places } = require('fantastical')`

## API

### `species`

Some species support options, and those will be listed. If a species allows for a gender, you can use `'male'`, `'female'`, or any other string (including null) to ignore gender usage.

Function      | Options
--------      | -------
`goblin`      | none
`orc`         | none
`ogre`        | none
`cavePerson`  | `gender`
`dwarf`       | `gender`
`halfling`    | `gender`
`gnome`       | `gender`
`elf`         | `gender`
`highelf`     | `gender`
`fairy`       | `gender`
`highfairy`   | `gender`
`darkelf`     | `gender`
`drow`        | `gender`
`halfdemon`   | `gender`
`demon`       | none
`dragon`      | `gender`
`angel`       | `gender`
`human`       | `{ allowMultipleNames: boolean }`

### `parties`

No party supports options at this time.

Function      | Options
--------      | -------
`mysticOrder` | none
`militaryUnit`| none
`guild`       | none

### `places`

No place function supports options at this time.

Function      | Options
--------      | -------
`tavern`      | none

### `adventures`

No adventure function supports options at this time.

Function      | Options
--------      | -------
`adventure`   | none
