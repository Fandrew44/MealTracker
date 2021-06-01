import React from 'react';
import Menu from './Menu';
import Meals from './Meals';
import Categories from './Categories';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//NOTE: The "render" attribute for the Route element is useful for adding inline rendering
// - Allows us to pass in props during routing
// - Unlike the "component" attribute, it DOES not create a NEW component upon each render
// - i.e. Does not unmount & re-mount every render

function App() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Menu}></Route>
                <Route exact path="/categories" component={Categories}></Route>
                <Route exact path="/meals" component={Meals}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;