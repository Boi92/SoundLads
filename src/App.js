import React, { useState, useRef } from "react";
import styled from "styled-components";
import "./App.css";


import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";





function App() {

  
  return (
    <App>
			<Nav />
			<Song />
			<Player />
			<Library/>
			<audio/>
		</App>
  );
}

export default App;
