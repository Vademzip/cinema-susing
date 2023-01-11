import React from 'react';
import {Movie} from "./Movie";


function Movies(props) {
    const pagesCount = Math.ceil(props.pageCount / 10)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <>
        <div className="movies">
            {props.movieList.map(item =>
                <Movie key={item.imdbID}
                       {...item}
                />)}
        </div>
        <div className='pages'>
            {pages.map(pageNumber => <span key={pageNumber} onClick={() => {}} className='pageBtn'>{pageNumber}</span>)}
        </div>
    </>
}

export {Movies};

