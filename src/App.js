import { useState } from "react";
//Import styles
import "./styles/app.scss";
//Adding components
import Player from "./components/Player";
import Song from "./components/Song";
//import data
import data from "./util"

function App() {
  //state
  const [songs, setSongs] = useState (data());
  const [currentSong, setCurrentSong] = useState (songs[0]);
  const [isPlaying, setIsPlaying] = useState (false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player setIsPlaying={setIsPlaying} isPlaying={isPlaying} currentSong={currentSong} />
    </div>
  );
}

export default App;
