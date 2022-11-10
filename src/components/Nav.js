import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
//import "./Nav.css";
import styled from "styled-components";


const Nav = ({ playlistStatus , setPlaylistStatus}) => {
    
    return(
        
        <Container className="container">
            <H1 playlistStatus={playlistStatus}>SoundLapse</H1>
            <Button onClick={() => setPlaylistStatus(!playlistStatus) }>Playlists
                <FontAwesomeIcon icon={faMusic} />
            </Button>

        </Container>
        
    )
};


const Container = styled.div`
	min-height: 10vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
	@media screen and (max-width: 768px) {
		position: fixed;
		z-index: 10;
		top: 0;
		left: 0;
		width: 100%;
	}
`;

const H1 = styled.h1`
	transition: all 0.5s ease;

	@media screen and (max-width: 768px) {
		visibility: ${(p) => (p.libraryStatus ? "hidden" : "visible")};
		opacity: ${(p) => (p.libraryStatus ? "0" : "100")};
		transition: all 0.5s ease;
	}
`;

const Button = styled.button`
	background: transparent;	
	border: none;
	cursor: pointer;
	border: 2px solid rgb(65, 65, 65);
	padding: 0.5rem;
	transition: all 0.3s ease;
	&:hover {
		background: rgb(65, 65, 65);
		color: white;
	}
`;



export default Nav;
