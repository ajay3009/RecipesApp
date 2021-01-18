import React, { useState, useCallback } from 'react';
import RecipesList from './RecipesList/RecipesList';
import SearchBox from '../SearchBox/SearchBox';
import './Recipes.css';
import loading from './../../assets/images/loading.gif';

const Recipes = (props) => {
    const [recipes, setRecipes] = useState({});
    const [error, setError] = useState('');
    const [initialState, setInitialState] = useState(false);

    const filteredRecipesHandler = useCallback((filteredRecipes) => {
        setRecipes(filteredRecipes);
        setError(null);
    },[]);

    const recipesErrorHandler = useCallback(error => {
        setRecipes(null);
        setError(error);
    }, []);

    const loadHandler = status => {
        setInitialState(status);
    }

    let searchtxt = initialState && (recipes && recipes.hits && recipes.hits.length === 0) ? <h2>No matching results found. Try Searching Again</h2> : <h2>Type in to search</h2>;
    let dataLoaded = !initialState ? <img src={loading} alt="Loading"/> :  <RecipesList recipes={recipes}/>;

    return (
        <React.Fragment>
            <h1 className="title">Recipes</h1>
            <SearchBox onLoadRecipes={filteredRecipesHandler} onError={recipesErrorHandler} onLoad={loadHandler}/>            
            {error ? <h2>{error}</h2> : 
            <React.Fragment>
                { (recipes && recipes.hits && recipes.hits.length) ? 
                    <React.Fragment>{dataLoaded}</React.Fragment> : 
                    <React.Fragment>{ searchtxt } </React.Fragment>
                } 
            </React.Fragment> 
            }
        </React.Fragment>
    )
}

export default Recipes;