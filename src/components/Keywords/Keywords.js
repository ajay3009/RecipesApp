import React from 'react';
import './Keywords.css';

const SearchKeywords = (props) => {
    return (
        <section>
        { props.keywords && props.keywords.length ? 
            <div className="keyword-section">
                <h3>Last {props.keywords.length < 5 ? props.keywords.length: 5} search term(s):</h3>
                <ul>
                {props.keywords.map((keyword,index) => (
                    <li key={index}>
                        <span>{keyword}</span>
                    </li>
                ))}
                </ul>
            </div> : null }
        </section>
    )
};

export default SearchKeywords;