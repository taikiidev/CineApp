import { useEffect, useState } from "react";

export default function ListaFilmes(){

    const [filmes, setFilmes] = useState([])

        useEffect(() => { 
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=en-US&page=1')
        .then(response => response.json())
        .then(data => setFilmes(data.results))
        .catch(err => console.error(err));
        },[])

    return(
       <>
         <h1 className="dark:text-gray-400 text-3xl mb-6">Lista de Filmes</h1>
            <ul className="dark:text-gray-400 grid grid-cols-3 gap-3">
               {filmes.map((filme, index) => <li className="flex flex-col items-center" key={index}>
                  <img className="mt-4 mb-4" src={`https://image.tmdb.org/t/p/w200/${filme.poster_path}`}/>
                  {filme.title}
                  </li>)}
            </ul>
       </>
    )
}