import React, {useState} from "react";

const Search = (props) => {
    const {searchFunc = Function.prototype} = props //На всякий случай
    const [search, setSearch] = useState('')
    const [type, setType] = useState('all')


    const handleFilter = (event) => {
        setType(event.target.value)
        searchFunc(search ? search.trimEnd() : 'transformers', event.target.value)
    }

    const handleChange = (event) => {
        setSearch(event.target.value)
        searchFunc(event.target.value ? event.target.value.trimEnd() : 'transformers', type)
    }

    const handleKey = (event) => {
        if (event.key === 'Enter') {
            if (search)
                searchFunc(search.trimEnd(), type)
        }
    }

    return (
        <div className="row">
            <div className="input-field col s12">
                <input
                    name='search'
                    placeholder='Поиск'
                    type="search"
                    className="validate"
                    value={search}
                    onChange={handleChange}
                    onKeyDown={handleKey}
                />
                <div className="searchArea">
                            <span>
                            <label>
                                <input name="type" type="radio" value='all' checked={type === 'all'}
                                       onChange={handleFilter}/>
                                <span>All</span>
                            </label>
                        </span>
                    <span>
                            <label>
                                <input name="type" type="radio" value='movie' checked={type === 'movie'}
                                       onChange={handleFilter}/>
                                <span>Movie only</span>
                            </label>
                        </span>
                    <span>
                            <label>
                                <input name="type" type="radio" value='series' checked={type === 'series'}
                                       onChange={handleFilter}/>
                                <span>Series only</span>
                            </label>
                        </span>
                </div>
            </div>
        </div>
    )

}

export default Search
