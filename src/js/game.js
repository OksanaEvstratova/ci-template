import defaultCharacterClass from './domain.js';


class Game {
    start() {
      console.log('game started');
    }
  }
  
  class GameSavingData {
  }
  
  function readGameSaving() {
  }
  
  function writeGameSaving() {
  }


const Game = new Game();
export default Game;

GameSavingData = Game().GameSavingData;
readGameSaving = Game().readGameSaving();
writeGameSaving = Game().writeGameSaving();
export {
    GameSavingData,
    readGameSaving,
    writeGameSaving
};



