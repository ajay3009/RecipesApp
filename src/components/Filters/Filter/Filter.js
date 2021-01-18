import React, { useRef } from 'react';

const Filter = (props) => {

    const elementRef = useRef();

    const onChangeHandler = (name, event) => {
        props.selectedValue(name, event.target.value);
    }

    return (  
            <div className="search-filter">
                <label htmlFor={props.filter.forLabel}>{props.filter.title}</label>
                { props.filter.type === 'select' ?
                    <select name={props.filter.forLabel} id={props.filter.forLabel} ref={elementRef} onChange={(e) => onChangeHandler(props.filter.forLabel, e)}>
                        <option value="">--Select {props.filter.title}--</option>
                        {props.filter.values.map(diet => {
                            return (<option key={diet} value={diet}>{diet}</option>)
                        })}
                    </select> : 
                    <input aria-label={'Enter ' + props.filter.title} placeholder={'Enter ' + props.filter.title} id={props.forLabel} type="number"  ref={elementRef} onChange={(e) => onChangeHandler(props.filter.forLabel, e)} /> }
            </div> 
        )
}

export default Filter;