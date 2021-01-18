import React, { useState, useEffect } from 'react';
import configData from "./../../configs/config.json";
import Filter from './Filter/Filter.js';


const Filters = (props) => {
    const {updateFilters } = props;
    const [searchFilters, setFilters] = useState({
        'mealType': '',
        'dishType': '',
        'cuisineType': '',
        'health': '',
        'diet': '',
        'calories': '',
        'time': ''
    });

    const filtersObj = configData.filterMapper;

    const changeHandler = (key, value) => {
        setFilters({
            ...searchFilters, 
            [key]: value
        });
    }

    useEffect(() => {
        updateFilters(searchFilters);
    }, [searchFilters, updateFilters]);

    return (
            <React.Fragment>
            {
            filtersObj.map((filter, index) =>  {
            return <section key={index}><Filter  filter={filter} selectedValue={changeHandler} /></section> })}
           </React.Fragment>
    )
}

export default Filters;