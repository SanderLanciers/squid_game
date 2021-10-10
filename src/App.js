import 'normalize.css';
import './App.css';
import {PLAYER_DATA} from "./data/data";
import {GAME_DATA} from "./data/data";
import {WORKER_DATA} from "./data/data";
import {VIPS} from "./data/data";
import {PlayersAndPricepool} from "./components/Contestants";
import {SelectGameplan} from "./components/Game";
import {VIPAttending} from "./components/VIPList";

function App() {
  return (
      <div>
        <PlayersAndPricepool players={PLAYER_DATA}></PlayersAndPricepool>
        <SelectGameplan games={GAME_DATA}></SelectGameplan>
      <VIPAttending vips={VIPS}></VIPAttending>
      </div>
  );

}

export default App;
