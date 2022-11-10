import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";


const Nav = ({ playlistStatus , setPlaylistStatus}) => {
    
    return(
        <>
        <div className="container">
            <h1 playlistStatus={playlistStatus}>SoundLapse</h1>
            <button onClick={() => setPlaylistStatus(!playlistStatus) }>Playlists
            <FontAwesomeIcon icon={faMusic} />
            </button>

        </div>
        </>
    )
};

export default Nav;