import React from 'react';
import '../styles/Menu.css';
import { useHistory } from 'react-router-dom';

//button animations inspired by https://codepen.io/ahart814/pen/yLNMZGa

function Menu() {

    const history = useHistory();

    return(
        <div class="outermost-container">
            <div>
                <h2 class="title-div">
                    <span class="meal">Meal</span><span class="tracker">Tracker</span>
                </h2>
            </div>
                <div class="button-container" id="categories" onClick={() => history.push('/categories')}>
                    <button class = "start-button">
                        Categories
                    </button>
                </div>
                <div class="button-container" id="meals" onClick={() => history.push('/meals')}>
                    <button class = "start-button">
                        Meals
                    </button>
                </div>
        </div>
    );
} 

export default Menu;