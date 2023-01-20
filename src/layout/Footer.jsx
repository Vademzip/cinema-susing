function Footer(){
    return (
        <footer className="page-footer grey">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Сайт сделан под три банки пива</h5>
                        <p className="grey-text text-lighten-4">Вы можете искать на нём фильмы, а потом переходить на сайт IMDB, кликнув на них. Удобно...</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Ссылка на совместный канал Азлагора и Фирамира</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="https://github.com/Vademzip/cinema-susing">Ссылка на репозиторий</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer