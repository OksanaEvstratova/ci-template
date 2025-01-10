import defaultCharacterClass from './domain.js';


export default class Game {
  start() {
    console.log('game started');
  }
}

export class GameSavingData {
}

export function readGameSaving() {
}

export function writeGameSaving() {
}

 
// const Game = new Game();
// export default Game;

// GameSavingData = Game().GameSavingData;
// readGameSaving = Game().readGameSaving();
// writeGameSaving = Game().writeGameSaving();

//  export {
//       GameSavingData,
//       readGameSaving,
//       writeGameSaving
//   };


