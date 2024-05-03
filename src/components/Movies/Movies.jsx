import { Link } from "react-router-dom";
function Movies({filmes}) {
    return ( 
        <ul className="dark:text-gray-400 grid grid-cols-3 gap-3">
               {filmes.map((filme, index) => <li className="flex flex-col items-center" key={index}>
                  <img className="mt-4 mb-4" src={`https://image.tmdb.org/t/p/w200/${filme.poster_path}`}/>
                  {filme.title}
                  {filme.vote_average}
                  <Link className="underline" to={`/filmes/${filme.id}`}>Detalhes</Link>
                  </li>)}
            </ul>
     );
}

export default Movies;