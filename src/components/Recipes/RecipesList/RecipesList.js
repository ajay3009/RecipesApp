import React from 'react';
import './RecipesList.css'

const RecipesList = props => {
    return (
        <section className="recipes-list">
            <h2>Search Keyword: {props.recipes.q}</h2>
            <ul>
                {props.recipes && props.recipes.hits && props.recipes.hits.map((recipe, index) => (
                    <li key={index}>
                <img src={recipe.recipe.image} alt={recipe.recipe.label} /><span>{recipe.recipe.label}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
};

export default RecipesList;