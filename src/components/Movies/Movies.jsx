function Movies({filmes}) {
    return ( 
        <ul className="dark:text-gray-400 grid grid-cols-3 gap-3">
               {filmes.map((filme, index) => <li className="flex flex-col items-center" key={index}>
                  <img className="mt-4 mb-4" src={`https://image.tmdb.org/t/p/w200/${filme.poster_path}`}/>
                  <img className="mt-4 mb-4" src={`https://image.tmdb.org/t/p/w200/${filme.backdrop_path}`}/>
                  {filme.title}
                  </li>)}
            </ul>
     );
}

export default Movies;