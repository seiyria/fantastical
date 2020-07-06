
import * as capitalize from 'lodash.capitalize';
import * as sample from 'lodash.sample';

import { dieRoll } from '../helpers';
import { human } from './species';

const _mysticOrder = {
        patterns: [
            '<group> of the <entity>',
            '<group> of the <description> <entity>',
            '<description> <group> of the <description> <entity>',
            '<description> <group>'
        ],
        group: {
            cliques: ['alliance', 'association', 'band', 'brotherhood', 'cabal', 'circle', 'conclave', 'confraternity', 'convocation', 'coterie', 'fellowship', 'fraternity', 'guild', 'league', 'order', 'siblingship', 'sisterhood', 'society', 'sorority'],
            people: ['adepts', 'apostles', 'aspirants', 'brothers', 'children', 'colleagues', 'devotees', 'disciples', 'fellows', 'followers', 'gentlemen', 'illuminants', 'initiates', 'keepers', 'ladies', 'masters', 'probers', 'revealers', 'seekers', 'servants', 'siblings', 'sisters', 'votaries']
        },
        description: {
            quality: ['ancient', 'arcane', 'astral', 'blinding', 'bright', 'brilliant', 'burning', 'bygone', 'cardinal', 'celestial', 'cloudy', 'concealed', 'cosmic', 'dark', 'deep', 'dexter', 'difficult', 'dusky', 'effulgent', 'elder', 'elemental', 'esoteric', 'eternal', 'ethereal', 'existential', 'forgotten', 'gloomy', 'glorious', 'glowing', 'gnostic', 'hidden', 'ineffable', 'inner', 'lost', 'luminous', 'lunar', 'magical', 'maieutical', 'mysterious', 'mystic', 'occult', 'penumbral', 'profound', 'pure', 'quintessential', 'radiant', 'recondite', 'resplendent', 'revealed', 'sacred', 'secret', 'shadowed', 'shining', 'sidereal', 'singing', 'sinister', 'solemn', 'spiral', 'spiritual', 'starry', 'solar', 'sublime', 'supernal', 'timeless', 'transcendent', 'true', 'veiled', 'zetetic'],
            colour: ['amber', 'amethyst', 'aquamarine', 'azure', 'beryl', 'black', 'blue', 'brazen', 'bronze', 'brown', 'carmine', 'cerulean', 'copper', 'crimson', 'crystal', 'ebony', 'emerald', 'golden', 'green', 'grey', 'incarnadine', 'indigo', 'ivory', 'jade', 'jet', 'malachite', 'orange', 'pearly', 'purple', 'rainbow', 'red', 'rosy', 'ruby', 'russet', 'sable', 'sapphire', 'scarlet', 'silver', 'topaz', 'turquoise', 'umber', 'vermilion', 'violaceous', 'violet', 'viridian', 'white', 'yellow']
        },
        entities: ['arcana', 'beyond', 'chalice', 'chamber', 'cloud', 'cowl', 'crown', 'crystal', 'darkness', 'dawn', 'day', 'doctrine', 'dominion', 'energy', 'enlightenment', 'eye', 'faith', 'fane', 'fire', 'flame', 'fountain', 'gate', 'glyph', 'grail', 'hand', 'harmony', 'heart', 'helix', 'influence', 'insight', 'key', 'knowledge', 'learning', 'light', 'lore', 'mantle', 'mastery', 'mind', 'moon', 'mystery', 'night', 'orb', 'path', 'pentacle', 'pillar', 'pool', 'portal', 'power', 'pyramid', 'question', 'radiance', 'rainbow', 'revelation', 'robe', 'rod', 'sapience', 'sceptre', 'scroll', 'secret', 'shadow', 'shrine', 'sigil', 'sign', 'sky', 'space', 'sphere', 'spring', 'staff', 'star', 'stone', 'sun', 'symbol', 'teaching', 'temple', 'throne', 'time', 'truth', 'twilight', 'veil', 'verity', 'void', 'wand', 'way', 'wisdom', 'word', 'world']
};

const _militaryUnit = {
        patterns: [
            '<commander>\'s <group>',
            '<colour> <group>',
            '<other> <group>',
            '<colour> <other> <group>',
            '<other> <colour> <group>',
            '<group> of the <place>'
        ],
        groups: [
            //team
            ['armada', 'army', 'battalion', 'brigade', 'cohort', 'commandos', 'company', 'contingent', 'division', 'fleet', 'force', 'garrison', 'guard', 'legion', 'militia', 'patrol', 'phalanx', 'platoon', 'regiment', 'section', 'sentinel', 'sentry', 'squad', 'squadron', 'troop', 'vanguard'],
            //soldiers
            ['avengers', 'champions', 'elite', 'fighters', 'janissaries', 'marines', 'paladins', 'riders', 'skirmishers', 'soldiers', 'troopers', 'veterans', 'victors', 'warriors'],
            //warders
            ['crusaders', 'defenders', 'guardians', 'guards', 'keepers', 'knights', 'lords', 'preservers', 'protectors', 'rangers', 'sentinels', 'sentries', 'wardens', 'warders', 'watchers'],
            //mercenaries
            ['bandits', 'destroyers', 'devourers', 'marauders', 'pirates', 'raptors', 'reavers'],
            //gear
            ['arrows', 'axes', 'blades', 'bows', 'bucklers', 'claws', 'daggers', 'darts', 'fangs', 'fists', 'flails', 'gauntlets', 'halberds', 'hammers', 'helms', 'knives', 'lances', 'maces', 'pikes', 'scythes', 'shields', 'spears', 'swords', 'talons', 'teeth'],
            //creatures
            ['angels', 'basilisks', 'cobras', 'demons', 'devils', 'eagles', 'falcons', 'griffins', 'hawks', 'hounds', 'jaguars', 'lions', 'panthers', 'rats', 'scorpions', 'sharks', 'tigers', 'vipers', 'wolves']
        ],
        description: {
            colour: ['black', 'white', 'red', 'gold', 'silver', 'iron', 'blue', 'green', 'grey'],
            other: ['battle', 'blood', 'bolt', 'bone', 'chaos', 'dark', 'death', 'dire', 'doom', 'fire', 'flame', 'free', 'high', 'law', 'light', 'lightning', 'moon', 'night', 'rune', 'sea', 'skull', 'star', 'storm', 'sun', 'thunder', 'thunderbolt', 'torch', 'war', 'wave', 'wind', 'wing', 'wrath']
        },
        places: {
            seas: ['billow', 'breaker', 'brine', 'deep', 'foam', 'main', 'ocean', 'sea', 'surf', 'swell', 'water', 'wave'],
            lands: ['cave', 'cavern', 'city', 'crag', 'dell', 'desert', 'earth', 'forest', 'grove', 'hall', 'hill', 'hinterland', 'isle', 'lake', 'land', 'march', 'marsh', 'path', 'plain', 'province', 'range', 'river', 'rock', 'sand', 'shore', 'stone', 'stream', 'tower', 'trail', 'valley', 'water', 'way', 'wood']
        }
};

const _guilds = {
        roles: ['arrangers', 'bestowers', 'disbursers', 'disposers', 'harmonisers', 'reconcilers', 'regulators', 'reinstaters', 'restorers'],
        goals: ['balance', 'congruity', 'correlation', 'correspondence', 'equilibrium', 'equipoise', 'equity', 'equivalence', 'parity', 'symmetry'],
        adjectives: ['acute', 'apposite', 'apt', 'decisive', 'dependable', 'extreme', 'faithful', 'final', 'fitting', 'impartial', 'reliable', 'supreme', 'ultimate', 'utmost'],
        actions: ['action', 'justice', 'reckoning', 'recompense', 'redress', 'reparation', 'reprisal', 'requital', 'retribution', 'satisfaction', 'vindication'],
        titles: ['alliance', 'association', 'company', 'corporation', 'organisation', 'society', 'syndicate'],
        descriptions: ['black', 'cloud', 'dark', 'dim', 'dusk', 'fog', 'gloom', 'grey', 'night', 'shade', 'shadow', 'smoke', 'quiet', 'subtle', 'whispering', 'bloody', 'hidden', 'red', 'ready', 'sharp', 'sudden'],
        groups: [
            //weapon
            ['blade', 'bolt', 'claw', 'dagger', 'dirk', 'fang', 'hand', 'knife'],
            //item
            ['balance', 'hourglass', 'scales', 'cloak', 'cowl', 'hand', 'hood', 'mantle', 'mask'],
            //creature
            ['snake', 'scorpion', 'spider', 'bat', 'cat', 'daw', 'dog', 'owl', 'pye', 'rat', 'weasel'],
            //action
            ['bring', 'find', 'hunt', 'kill', 'search', 'seek', 'shadow', 'slay', 'stalk']
        ]
};

export const mysticOrder = () => {
    const config = {
        group: _mysticOrder.group[dieRoll(10) > 5 ? 'cliques' : 'people'],
        entity: _mysticOrder.entities,
        description: _mysticOrder.description.quality.concat(_mysticOrder.description.colour)
    };

    let name = sample(_mysticOrder.patterns);

    return name.replace(/<([\w\W]*?)>/g, (match) => {
        match = match.replace(/<|>/g, '');
        return capitalize(sample(config[match]));
    });
};

export const militaryUnit = () => {
    const config = {
        commander: [human()],
        group: sample(_militaryUnit.groups),
        colour: _militaryUnit.description.colour,
        other: _militaryUnit.description.other,
        place: _militaryUnit.places.seas.concat(_militaryUnit.places.lands)
    };

    let name = sample(_militaryUnit.patterns);

    return name.replace(/<([\w\W]*?)>/g, (match) => {

        match = match.replace(/<|>/g, '');
        const item = sample(config[match]);
        return capitalize(item);
    });
};

export const guild = () => {
    const roll = dieRoll(10);

    if(roll < 3) return `${capitalize(sample(_guilds.roles))} of ${capitalize(sample(_guilds.goals))}`;
    if(roll < 6) return `${capitalize(sample(_guilds.adjectives))} ${capitalize(sample(_guilds.actions))} ${capitalize(sample(_guilds.titles))}`;

    return `${capitalize(sample(_guilds.descriptions))} ${capitalize(sample(sample(_guilds.groups)))}`;
};