import React from 'react';
import '../styles/Menu.css';
import { useHistory } from 'react-router-dom';

//button animations inspired by https://codepen.io/ahart814/pen/yLNMZGa

//NOTE: Seems like CSS styles persist to child components unless overwritten
// e.g. food gif background 

//PROBLEM: But when they're overwritten in the Child components, they're ALSO overwritten in the Parent components...

function Menu() {

    const history = useHistory();

    return(
        <div className="outermost-container">
            <div>
                <h2 className="title-div">
                    <span className="meal">Meal</span><span className="tracker">Tracker</span>
                </h2>
            </div>
                <div className="button-container" id="categories" onClick={() => history.push('/categories')}>
                    <button className="start-button">
                        Categories
                    </button>
                </div>
                <div className="button-container" id="meals" onClick={() => history.push('/meals')}>
                    <button className="start-button">
                        Meals
                    </button>
                </div>
        </div>
    );
} 

export default Menu;