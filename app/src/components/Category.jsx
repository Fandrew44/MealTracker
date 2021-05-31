import React, { useState, useEffect } from 'react';
import AppNav from './AppNav';

function Category() {
    //STATES
    const [isLoading, setIsLoading] = useState(true);
    const [categories, setCategories] = useState([]);

    async function loadCategories() {
        const response = await fetch('/api/categories');
        const body = await response.json();
        setCategories(body);  
        setIsLoading(false);  
    }

    //useEffect is a React Hook to be used for side-effects executed in the Render LIFECYCLE
    // - An alternative to "componentDidMount()" for Functional Components
    // - By adding no State argument, the body will be executed upon rendering the Component
    // useEffect(() => {
    //     loadCategories();
    // })

    // if (isLoading) {
    //     return(
    //         <div>
    //             <h1 class="loading">Loading...</h1>
    //         </div>
    //     );
    // }

    return (
        <div>
            <AppNav navName="Categories"/>
        </div>
    );
}

export default Category;