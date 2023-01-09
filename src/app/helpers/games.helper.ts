import { Game } from 'models/game.model';
import { GameType } from 'types/game.types';

export const getGame = (id:GameType):Game|null =>
  gameList.find(game => game.id === id) || null

export const gameList:Game[] = [
  new Game({id: 'red', name: 'Red'}),
  new Game({id: 'blue', name: 'Blue'}),
  new Game({id: 'green', name: 'Green'}),
  new Game({id: 'yellow', name: 'Yellow'}),
  new Game({id: 'gold', name: 'Gold'}),
  new Game({id: 'silver', name: 'Silver'}),
  new Game({id: 'crystal', name: 'Crystal'}),
  new Game({id: 'ruby', name: 'Ruby'}),
  new Game({id: 'sapphire', name: 'Sapphire'}),
  new Game({id: 'emerald', name: 'Emerald'}),
  new Game({id: 'fireRed', name: 'Fire Red'}),
  new Game({id: 'leafGreen', name: 'Leaf Green'}),
  new Game({id: 'diamond', name: 'Diamond'}),
  new Game({id: 'pearl', name: 'Pearl'}),
  new Game({id: 'platinum', name: 'Platinum'}),
  new Game({id: 'heartGold', name: 'Heart Gold'}),
  new Game({id: 'soulSilver', name: 'Soul Silver'}),
  new Game({id: 'black', name: 'Black'}),
  new Game({id: 'white', name: 'White'}),
  new Game({id: 'black2', name: 'Black 2'}),
  new Game({id: 'white2', name: 'White 2'}),
  new Game({id: 'x', name: 'X'}),
  new Game({id: 'y', name: 'Y'}),
  new Game({id: 'omegaRuby', name: 'Omega Ruby'}),
  new Game({id: 'alphaSapphire', name: 'Alpha Sapphire'}),
  new Game({id: 'sun', name: 'Sun'}),
  new Game({id: 'moon', name: 'Moon'}),
  new Game({id: 'ultraSun', name: 'Ultra Sun'}),
  new Game({id: 'ultraMoon', name: 'Ultra Moon'}),
  new Game({id: 'letsGoPikachu', name: 'Let\'s Go, Pikachu!'}),
  new Game({id: 'letsGoEevee', name: 'Let\'s Go, Eevee!'}),
  new Game({id: 'sword', name: 'Sword'}),
  new Game({id: 'shield', name: 'Shield'}),
  new Game({id: 'brilliantDiamond', name: 'Brilliant Diamond'}),
  new Game({id: 'shiningPearl', name: 'Shining Pearl'}),
  new Game({id: 'legendsArceus', name: 'Legends: Arceus'}),
  new Game({id: 'scarlet', name: 'Scarlet'}),
  new Game({id: 'violet', name: 'Violet'}),
  new Game({id: 'colosseum', name: 'Colosseum'}),
  new Game({id: 'xd', name: 'XD: Gale of Darkness'}),
  new Game({id: 'pogo', name: 'Pokémon GO'})
]
