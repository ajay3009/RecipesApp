import React, { useState, useEffect, useRef, useCallback } from 'react';
import SearchKeywords from '../Keywords/Keywords';
import Filters from './../Filters/Filters';

import './SearchBox.css';

const SearchBox = React.memo(props => {
    const [searchTxt, setSearchTxt] = useState('');
    const [keywords, setKeywords] = useState([]);
    const [filters, setFilters] = useState('');
    const { onLoadRecipes, onError, onLoad } = props;
    const inputRef = useRef();

    const updateKeyWords = useCallback((txt) => {
        setKeywords([txt, ...keywords].splice(0,5));
    }, [keywords]);

    const filterHandlers = (filters) => {
        let filter = '';
        for(let key in filters) {
            if (filters[key] !== '') {
                filter += '&' + key + "=" + filters[key];
            }
        }
        setFilters(filter);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchTxt.length && searchTxt === inputRef.current.value) {
                onError(null);
                onLoad(true);
                fetch(`https://api.edamam.com/search?q=${searchTxt}${filters}&app_id=${process.env.REACT_APP_CLIENT_ID}&app_key=${process.env.REACT_APP_KEY}&from=0&to=10`).then(response => {
                    return response.json();
                }).then(responseData => {
                    onLoadRecipes(responseData);
                    updateKeyWords(searchTxt);
                }).catch(error => {
                    onError('Something went wrong!');
                });
            }
        }, 500);
        return () => {
            clearTimeout(timer);
        }
    }, [searchTxt, onLoadRecipes, inputRef, onError, filters]);


    return (
        <section className="search">
            <div className="search-input">
                <label htmlFor="search">Search</label>
                <input aria-label="Enter text to search" placeholder="Enter text to search" data-testid="search" id="search" ref={inputRef} type="text" value={searchTxt} onChange={(e) => setSearchTxt(e.target.value)}  />
            </div>
            <div className="search-filters">
                <Filters updateFilters={filterHandlers}/>
            </div>
            <SearchKeywords keywords={keywords} />
        </section>
    )
});

export default SearchBox;