import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        search: '',
        type: 'all'
    }

    handleChange = (event) => {
            this.setState(() => ({[event.target.name]: event.target.value}), () => {
                this.props.searchFunc(this.state.search?this.state.search.trimEnd():'transformers', this.state.type)
            })
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            if (this.state.search)
                this.props.searchFunc(this.state.search.trimEnd(), this.state.type)
        }
    }

    render() {
        return (
            <div className="row">
                <div className="input-field col s12">
                    <input
                        name='search'
                        placeholder='search'
                        type="search"
                        className="validate"
                        value={this.state.search}
                        onChange={this.handleChange}
                        onKeyDown={this.handleKey}
                    />
                    <div className="searchArea">
                            <span>
                            <label>
                                <input name="type" type="radio" value='all' checked={this.state.type === 'all'}
                                       onChange={this.handleChange}/>
                                <span>All</span>
                            </label>
                        </span>
                        <span>
                            <label>
                                <input name="type" type="radio" value='movie' checked={this.state.type === 'movie'}
                                       onChange={this.handleChange}/>
                                <span>Movie only</span>
                            </label>
                        </span>
                        <span>
                            <label>
                                <input name="type" type="radio" value='series' checked={this.state.type === 'series'}
                                       onChange={this.handleChange}/>
                                <span>Series only</span>
                            </label>
                        </span>
                    </div>
                </div>
            </div>
        )
    }

}

export default Search
