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
         <h1 className="dark:text-gray-400 text-3xl">Lista de Filmes</h1>
            <ul className="dark:text-gray-400">
               {filmes.map((filme, index) => <li key={index}>{filme.title}</li>)}
            </ul>
       </>
    )
}