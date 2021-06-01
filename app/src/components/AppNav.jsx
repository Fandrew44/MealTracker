import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/AppNav.css';

//NOTE: Parent components are affected by CSS styles applied to CHILD Components

//NOTE: ALWAYS aim to MODULARIZE components so that they can be easily re-used & re-applied for different situations
// - e.g. turn navName into a PROP rather than hard-coding its value here

function AppNav({ navName }) {
    const history = useHistory();

    function returnToMenu() {
        history.push('/');
    }

    return(
        <div className="navbar">
            <h2 id="navName" className="nav-element">{navName}</h2>
            <h2 className="nav-element menu-button" onClick={() => returnToMenu()}>Menu</h2>
        </div>
    );
}

export default AppNav;