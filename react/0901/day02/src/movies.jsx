import React from "react";
import prototype from 'prop-types';
// import './movies.css';

function Movies({id, year, title, poster, summary}) {
    return(
        <div style={{float:'left', margin:'20px',width:'200px'}}>
            <h5><img src={poster} alt={title} /></h5>
            <h5>{title}</h5>
            <h5>{year}</h5>
            <h5>{summary}</h5>
        </div>
    )
}

Movies.prototype = {
    id: prototype.number.isRequired,
    year: prototype.number.isRequired,
    title: prototype.string.isRequired,
    poster: prototype.string.isRequired,
    summary: prototype.string.isRequired
}

export default Movies;