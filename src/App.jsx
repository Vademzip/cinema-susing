import React, {useState} from 'react'
import './App.css'
import Header from "./layout/Header.jsx";
import Footer from "./layout/Footer.jsx";
import Main from "./layout/Main.jsx";
const API_KEY = import.meta.env.VITE_API_KEY

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            moviesList: [],
            pageCount: 1,
            currentPage : 1,
            loading : true
        }
        // this.searchFunc = this.searchFunc.bind(this)

    }

    async componentDidMount() {
        let response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=transformers`)
        if (response.ok) {
            let moviesList = await response.json()
            this.setState({
                moviesList: moviesList.Search,
                pageCount: moviesList.totalResults,
                loading : false
            })
        }
    }

    searchFunc = (str, type) => {
        this.setState({loading : true})
        if (type === 'all') {
            fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}`)
                .then(response => response.json())
                .then(data => this.setState({moviesList: data.Search, pageCount:data.totalResults, loading:false}))
        } else {
            fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}&type=${type}`)
                .then(response => response.json())
                .then(data => this.setState({moviesList: data.Search, pageCount:data.totalResults, loading:false  }))
        }
        // .then((data)=>{this.setState({moviesList : data.Search})})
    }


    render() {
        return <>
            <Header/>
            <Main {...this.state} searchFunc={this.searchFunc}/>
            <Footer/>
        </>;
    }
}


