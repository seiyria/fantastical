
import * as capitalize from 'lodash.capitalize';
import * as sample from 'lodash.sample';

const _adventures = {
  role: ['arrangers', 'bestowers', 'disbursers', 'disposers', 'harmonisers', 'reconcilers', 'regulators', 'reinstaters', 'restorers'],
  goal: ['balance', 'congruity', 'correlation', 'correspondence', 'equilibrium', 'equipoise', 'equity', 'equivalence', 'parity', 'symmetry'],
  adjective: ['risky', 'wild', 'hazardous', 'speculative', 'rough', 'easy', 'boring', 'simple', 'violent', 'idle', 'fantastic', 'raging', 'difficult', 'ridiculous', 'tame', 'meek', 'quiet', 'docile', 'domestic', 'gentle', 'subdued', 'unexciting'],
  location: ['plains', 'swamp', 'cave', 'castle', 'fortress', 'park', 'tavern', 'graveyard', 'necropolis', 'crypt', 'barrow', 'lair', 'encampment', 'mine', 'mountain pass', 'sewers', 'woods', 'shrine', 'tomb', 'armory', 'ritual chamber', 'summit', 'cistern', 'nest', 'ruins', 'temple', 'mystic plane', 'slave pens', 'deepsea trench', 'peak', 'weald', 'void', 'grove', 'thicket', 'cellar', 'palace', 'keep', 'ridge', 'vault', 'ship', 'pit', 'lab', 'lighthouse', 'lagoon', 'cove', 'library', 'moor', 'isle', 'island', 'archipelago', 'highlands', 'village', 'hideout', 'vessel'],
  noun: ['adventure', 'escapade', 'venture', 'undertaking', 'gamble', 'fight', 'trip', 'walk', 'quest', 'pursuit'],
  patterns: [
      '<adjective> <noun>',
      '<adjective> <noun> for <goal>',
      '<noun> for <goal>',
      '<adjective> <adjective> <noun>',
      '<adjective> <noun> to the <location>',
      '<noun> to the <location>',
      '<role> <adjective> <noun>',
      '<role> <noun>',
      '<role> <noun> to the <location>',
      '<role> <noun> for <goal>'
  ],
};

export const adventure = () => {
  const pattern = sample(_adventures.patterns);

  return pattern.replace(/<([\w\W]*?)>/g, (match) => {

      match = match.replace(/<|>/g, '');
      const item = sample(_adventures[match]);
      return capitalize(item);
  });
};