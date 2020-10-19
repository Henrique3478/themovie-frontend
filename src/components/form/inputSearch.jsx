import React from 'react';

function InputSearch(props){

    const {touched ,error} = props.meta

    return(
        <div className="input-group input-group-sm">
            <input type={`search`} {...props.input} {...props} className={`form-control ${touched && error && "is-invalid"}`} />
            <div className="input-group-append">
                <button className="btn btn-navbar bg-light" type="submit">
                <i className="fas fa-search"></i>
                </button>
            </div>
        </div>
    )
}

export default InputSearch;