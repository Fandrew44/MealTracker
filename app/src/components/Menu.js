import React from 'react';
import '../styles/Menu.css';
import { motion } from "framer-motion";

//button animations inspired by https://codepen.io/ahart814/pen/yLNMZGa

function Menu() {
    return(
        <div class="outermost-container">
            <div>
                <h2 class="title-div">
                    <span class="meal">Meal</span><span class="tracker">Tracker</span>
                </h2>
            </div>
            <div class="button-container">
                <button class = "start-button">
                    Enter
                </button>
            </div>
        </div>
    );
} 

export default Menu;