import React from 'react';

function Movie(props) {

    const {Poster,Title, Type, Year} = props
    const filmLink = 'https://www.imdb.com/title/' + props.imdbID
    return <div className="row">
        <div className="col s12 m7">
            <div className="card">
                <div className="card-image">
                    <a href={filmLink} target='_blank'>
                        {Poster !== 'N/A' ?
                            <img src={props.Poster}/>
                            :
                            <img src={`https://via.placeholder.com/900x600?text=${Title}`}/>
                        }
                    </a>
                </div>
                <div className="card-content">
                    {props.Title}
                </div>
                <div className="card-action">
                    <div>{props.Type}</div>
                    <div>{props.Year}</div>
                </div>
            </div>
        </div>
    </div>
}

export { Movie };