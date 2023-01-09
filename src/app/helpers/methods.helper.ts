import { Method } from 'models/method.model';
import { MethodType } from 'types/method.types';

export const getMethod = (id:MethodType):Method|null =>
  methodList.find(method => method.id === id) || null

export const methodList:Method[] = [
  new Method({id: 'breed', name: 'Breeding'}),
  new Method({id: 'breedMasuda', name: 'Masuda Breeding'}),
  new Method({id: 'chain', name: 'Chaining'}),
  new Method({id: 'chainFish', name: 'Chain Fishing'}),
  new Method({id: 'dynamaxAdventure', name: 'Dynamax Adventure'}),
  new Method({id: 'friendSafari', name: 'Friend Safari'}),
  new Method({id: 'horde', name: 'Horde Encounter'}),
  new Method({id: 'oddEgg', name: 'Odd Egg'}),
  new Method({id: 'outbreakLegendsArceus', name: 'Outbreak (Legends Arceus)'}),
  new Method({id: 'outbreakSV', name: 'Outbreak (SV)'}),
  new Method({id: 'pogoEgg', name: 'PoGo Egg'}),
  new Method({id: 'pogoEvent', name: 'PoGo Event'}),
  new Method({id: 'pogoRaid', name: 'PoGo Raid'}),
  new Method({id: 'pogoRandom', name: 'PoGo Random Encounter'}),
  new Method({id: 'pogoResearch', name: 'PoGo Research'}),
  new Method({id: 'radarDPPt', name: 'Radar (DPPt)'}),
  new Method({id: 'radarXY', name: 'Radar (X/Y)'}),
  new Method({id: 'random', name: 'Random Encounter'}),
  new Method({id: 'runaway', name: 'Runaway'}),
  new Method({id: 'reset', name: 'Reset'}),
  new Method({id: 'raid', name: 'Raid Encounter'}),
  new Method({id: 'sandwich', name: 'Sandwich Encounter'}),
  new Method({id: 'sos', name: 'SOS'}),
]
