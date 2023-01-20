import React from 'react';
import {Movie} from "./Movie";


function Movies(props) {
    const {curPage = 1} = props

    const pagesCount = Math.ceil(props.pageCount / 10)
    let pages = []
    const lPage = []
    const rPage = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    for (let i = curPage; i < curPage + 2; i++) {
        if (pages[i]) {
            rPage.push(pages[i])
        }
    }

    for (let i = curPage - 2; (i > curPage - 4) && (i >= 0); i--) {
        if (pages[i]) {
            lPage.unshift(pages[i])
        }
    }

    function findFirstPage (array, number) {
        for (let i = 0; i < array.length; i++){
            if (array[i] === number)
                return number
        }
    }


    console.log('Кол-во страниц:', pages.length)
    console.log('Текущая страница', curPage)
    console.log('Какие страницы есть слева от текущей: ', lPage)
    console.log('Какие страницы есть справа от текущей: ', rPage)


    return <>
        <div className="movies">
            {props.movieList.map(item =>
                <Movie key={item.imdbID}
                       {...item}
                />)}
        </div>
        <div className='pages'>
            {
                (curPage === 1 || findFirstPage(lPage,1)) ? null :
                <span className='pageBtn End' onClick={() => {
                props.setNewPage(1)
                }
                }>В начало</span>
            }
            {
                lPage.map(pageNumber => <span key={pageNumber} onClick={() => {
                    props.setNewPage(pageNumber)
                }} className='pageBtn'>{pageNumber}</span>)
            }
            {
                <span onClick={() => {
                    props.setNewPage(curPage)
                }} className='pageBtn active'>{curPage}</span>
            }
            {
                rPage.map(pageNumber => <span key={pageNumber} onClick={() => {
                    props.setNewPage(pageNumber)
                }} className='pageBtn'>{pageNumber}</span>)
            }
            {
                (curPage === pagesCount || findFirstPage(rPage,pagesCount)) ? null :
                    <span className='pageBtn End' onClick={() => {
                        props.setNewPage(pagesCount)
                    }
                    }>В конец</span>
            }
        </div>
    </>
}

export {Movies};

