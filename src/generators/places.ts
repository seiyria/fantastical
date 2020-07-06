
import * as capitalize from 'lodash.capitalize';
import * as sample from 'lodash.sample';

const _tavern = {
    patterns: [
        '<adjective> <noun>',
        '<adjective> <noun> <title>',
        'The <adjective> <noun>',
        'The <adjective> <noun> <title>',
        '<noun> & <noun>',
        '<noun> & <noun> <title>',
        '<adjective> <title>',
        'The <adjective> <title>'
    ],
    noun: ['dog', 'wolf', 'fox', 'cat', 'lion', 'tiger', 'kitten', 'ox', 'cow', 'sow', 'bull', 'calf', 'horse', 'stallion', 'mare', 'foal', 'owl', 'eagle', 'falcon', 'hawk', 'raven', 'crow', 'gull', 'fish', 'whale', 'shark', 'octopus', 'squid', 'goat', 'sheep', 'ewe', 'fly', 'butterfly', 'dragonfly', 'beetle', 'ant', 'wasp', 'termite', 'louse', 'worm', 'lizard', 'frog', 'toad', 'snake', 'chameleon', 'unicorn', 'gryphon', 'dragon', 'wyvern', 'roc', 'clam', 'oyster', 'starfish', 'slug', 'snail', 'mouse', 'rat', 'beaver', 'marten', 'mink', 'otter', 'seal', 'manatee', 'chipmunk', 'squirrel', 'gopher', 'tower', 'castle', 'dagger', 'sword', 'bow', 'arrow', 'hat', 'boot', 'trophy', 'goose', 'duck', 'boat', 'ship', 'river', 'falls', 'forest', 'mountain', 'vampire', 'skeleton', 'witch', 'wench', 'lady', 'lord', 'knight', 'drunk', 'shield', 'wand', 'helm', 'flask', 'flagon', 'pint', 'shot', 'flower'],
    adjective: ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'sanguine', 'sepia', 'ochre', 'puce', 'navy', 'maroon', 'pink', 'peach', 'cyan', 'violet', 'brown', 'black', 'gray', 'white', 'silver', 'gold', 'jumping', 'sleeping', 'running', 'rolling', 'laughing', 'singing', 'flying', 'burning', 'swimming', 'crying', 'roaring', 'screaming', 'silent', 'petrified', 'hiding', 'hidden', 'lost', 'forgotten', 'shiny', 'drowning', 'giant', 'tiny', 'fat', 'skinny', 'humorous', 'lonely', 'drunken', 'slimy', 'undead', 'dark', 'bright', 'magical', 'enchanted', 'poor', 'wealthy', 'lucky', 'unfortunate', 'angry', 'happy', 'sad', 'thieving', 'desperate', 'divine', 'arcane', 'profane', 'discreet', 'buried', 'false', 'foolish', 'flatulent', 'hypnotic', 'haunted', 'special', 'fun', 'drab', 'daring', 'stubborn', 'sober', 'talking', 'naked', 'suffering', 'cheap', 'smelly', 'easy', 'heroic', 'hovering', 'married', 'pious', 'pompous', 'illegal', 'sacred', 'defiled', 'spoilt', 'wooden', 'bloody', 'yawning', 'sleepy', 'hungry', 'steel'],
    title: ['bar', 'brewhouse', 'beerhouse', 'mead house', 'alehouse', 'speakeasy', 'pub', 'lounge', 'brewery', 'loft', 'clubhouse', 'inn', 'tavern', 'den', 'lodge']
};

export const tavern = () => {
    const pattern = sample(_tavern.patterns);

    return pattern.replace(/<([\w\W]*?)>/g, (match) => {

        match = match.replace(/<|>/g, '');
        const item = sample(_tavern[match]);
        return capitalize(item);
    });
};