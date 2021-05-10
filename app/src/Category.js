import React, { useState } from 'react';

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

    loadCategories();

    if (isLoading) {
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <div>
            <h1>
                Categories:
                {
                    categories.map(category => {
                        return(<div>
                            <p>{ category.id }</p>
                            <p>{ category.name }</p>
                        </div>
                    )})
                }
            </h1>
        </div>
    );
}

export default Category;