import {Movies} from "../components/Movies";
import Preloader from "../components/Preloader.jsx";
import Search from "../components/Search.jsx";

function Main(props) {
    return (
        <main className='container content'>
            <Search searchFunc={props.searchFunc}/>
            {props.loading ?
                <Preloader/> :
                props.moviesList ?
                    <Movies movieList={props.moviesList} pageCount={props.pageCount} curPage={props.currentPage}/> :
                    'Ничего не найдено'
            }
        </main>
    )
}

export default Main