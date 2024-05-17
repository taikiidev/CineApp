import { useEffect, useState } from "react";
import { Spinner } from "@material-tailwind/react";
import Movies from "../components/Movies/Movies";


export default function MovieList(){

    const [filmes, setFilmes] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [movieID, setMovieID] = useState("");
    const [movieBackground, setMovieBackground] = useState(null);
    const [url, setUrl] = useState(null);

        useEffect(() => { 
        setIsLoading(true);
        setTimeout(() => {
         fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR&page=1')
         .then(response => response.json())
         .then(data => {setFilmes(data.results);
          setIsLoading(false);})
         .catch(err => console.error(err));
        }, 3000);
        },[])

        function handleClick(e){
            console.log(e.target.parentNode.id);
            let id = e.target.parentNode.id;
            setMovieID(id);
            console.log(movieID);
            getmovieUrl(movieID);      
        }

        function getmovieUrl(movieID){
            
            fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=7c572a9f5b3ba776080330d23bb76e1e`)
            .then(response => response.json())
            .then(data => {setMovieBackground(data);
                setUrl(`https://image.tmdb.org/t/p/w1280/${movieBackground.backdrop_path}`);})
            .catch(err => console.error(err));
        }

    return(
       <>
       {/* <div style={{backgroundImage: `url('${url}')`}} className="h-[300px]"> */}
       <div style={
        movieID? 
        {backgroundImage: `url('${url}')`}:
        {backgroundColor: 'black'}} className="h-[300px]">
         <h1 className="dark:text-gray-400 text-3xl mb-6 text-center ">Lista de Filmes</h1>
        </div>
         {isLoading ? 
         <>
         <p className="mb-2">Carregando...</p>
         <Spinner className="h-12 w-12" />
         </>
          : null}
          <ul className="dark:text-gray-400 grid grid-cols-3 gap-3">
            {filmes.map(filme => 
            <li key={filme.id} id={filme.id} className="flex flex-col items-center" onClick={handleClick}>
                <Movies filme={filme}/>
            </li>
            )}
          </ul>
       </>
    )
}