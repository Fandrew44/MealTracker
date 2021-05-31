import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/AppNav.css';

//NOTE: Parent components are affected by CSS styles applied to CHILD Components

function AppNav({ navName }) {
    return(
        <div class="navbar">
            <h2 id="navName" class="nav-element">{navName}</h2>
            <h2 class="nav-element">Menu</h2>
        </div>
    );
}

export default AppNav;