import React, { useState, useRef } from "react";
import styled from "styled-components";
import "./App.css";


import Player from "./components/Player";
import Song from "./components/Song";
import Playlist from "./components/Playlist";
import Nav from "./components/Nav";





function App() {

  
  return (
    <>
			<Nav />
      <div>Hello World</div>
			<Song />
			<Player />
			<Playlist/>
			<audio/>
    </>
  );
}

export default App;
