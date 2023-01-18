import React, {useEffect, useState} from 'react'
import './App.css'
import Header from "./layout/Header.jsx";
import Footer from "./layout/Footer.jsx";
import Main from "./layout/Main.jsx";

const API_KEY = import.meta.env.VITE_API_KEY

export default function App() {


    const [moviesList, setMovieList] = useState([{}])
    const [pageCount, setPageCount] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [currentSearch, setCurrentSearch] = useState('')
    const [type, setType] = useState('all')
    const setNewPage = (page) => {
        setLoading(true)
        if (type === 'all') {
            fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${currentSearch||'transformers'}&page=${page}`)
                .then(response => response.json())
                .then(data => {
                    setMovieList(data.Search)
                    setPageCount(data.totalResults)
                    setLoading(false)
                    setCurrentPage(page)
                })
                .catch(err => {
                    console.error(err)
                    setLoading(false)
                })
        } else {
            fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${currentSearch}&type=${type}&page=${page}`)
                .then(response => response.json())
                .then(data => {
                    setMovieList(data.Search)
                    setPageCount(data.totalResults)
                    setLoading(false)
                    setCurrentPage(page)
                })
                .catch(err => {
                    console.error(err)
                    setLoading(false)
                })
        }
    }


    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=transformers`)
            .then(response => response.json())
            .then(data => {
                setMovieList(data.Search)
                setPageCount(data.totalResults)
                setLoading(false)
            })
            .catch(
                setLoading(false)
            )
    }, [])


    const searchFunc = (str, type) => {
        setLoading(true)
        if (type === 'all') {
            fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}`)
                .then(response => response.json())
                .then(data => {
                    setMovieList(data.Search)
                    setPageCount(data.totalResults)
                    setLoading(false)
                    setCurrentSearch(str)
                    setType(type)
                    setCurrentPage(1)
                })
                .catch(err => {
                    console.error(err)
                    setLoading(false)
                })
        } else {
            fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}&type=${type}`)
                .then(response => response.json())
                .then(data => {
                    setMovieList(data.Search)
                    setPageCount(data.totalResults)
                    setLoading(false)
                    setCurrentSearch(str)
                    setType(type)
                    setCurrentPage(1)
                })
                .catch(err => {
                    console.error(err)
                    setLoading(false)
                })
        }
        // .then((data)=>{this.setState({moviesList : data.Search})})
    }

    return (
        <>
            <Header/>
            <Main moviesList={moviesList}
                  pageCount={pageCount}
                  currentPage={currentPage}
                  loading={loading}
                  searchFunc={searchFunc}
                  setNewPage={setNewPage}/>
            <Footer/>
        </>)
}


