import { Ball } from 'models/ball.model';
import { BallType } from 'types/ball.types';

export const getBall = (id:BallType):Ball|null =>
  ballList.find(ball => ball.id === id) || null

export const ballList:Ball[] = [
  new Ball({id: 'beast',         name: 'Beast Ball' }),
  new Ball({id: 'cherish',       name: 'Cherish Ball' }),
  new Ball({id: 'dive',          name: 'Dive Ball' }),
  new Ball({id: 'dream',         name: 'Dream Ball' }),
  new Ball({id: 'dusk',          name: 'Dusk Ball' }),
  new Ball({id: 'fast',          name: 'Fast Ball' }),
  new Ball({id: 'feather',       name: 'Feather Ball' }),
  new Ball({id: 'friend',        name: 'Friend Ball' }),
  new Ball({id: 'gigaton',       name: 'Gigaton Ball' }),
  new Ball({id: 'great',         name: 'Great Ball' }),
  new Ball({id: 'greatHisui',    name: 'Great Ball (Hisuian)' }),
  new Ball({id: 'heal',          name: 'Heal Ball' }),
  new Ball({id: 'heavy',         name: 'Heavy Ball' }),
  new Ball({id: 'heavyHisui',    name: 'Heavy Ball (Hisuian)' }),
  new Ball({id: 'jet',           name: 'Jet Ball' }),
  new Ball({id: 'leaden',        name: 'Leaden Ball' }),
  new Ball({id: 'level',         name: 'Level Ball' }),
  new Ball({id: 'love',          name: 'Love Ball' }),
  new Ball({id: 'lure',          name: 'Lure Ball' }),
  new Ball({id: 'luxury',        name: 'Luxury Ball' }),
  new Ball({id: 'master',        name: 'Master Ball' }),
  new Ball({id: 'moon',          name: 'Moon Ball' }),
  new Ball({id: 'nest',          name: 'Nest Ball' }),
  new Ball({id: 'net',           name: 'Net Ball' }),
  new Ball({id: 'origin',        name: 'Origin Ball' }),
  new Ball({id: 'park',          name: 'Park Ball' }),
  new Ball({id: 'pokeball',      name: 'Pokéball' }),
  new Ball({id: 'pokeballHisui', name: 'Pokéball (Hisuian)' }),
  new Ball({id: 'premier',       name: 'Premier Ball' }),
  new Ball({id: 'quick',         name: 'Quick Ball' }),
  new Ball({id: 'repeat',        name: 'Repeat Ball' }),
  new Ball({id: 'safari',        name: 'Safari Ball' }),
  new Ball({id: 'sport',         name: 'Sport Ball' }),
  new Ball({id: 'strange',       name: 'Strange Ball' }),
  new Ball({id: 'timer',         name: 'Timer Ball' }),
  new Ball({id: 'ultra',         name: 'Ultra Ball' }),
  new Ball({id: 'ultraHisui',    name: 'Ultra Ball (Hisuian)' }),
  new Ball({id: 'wing',          name: 'Wing Ball' })
]
