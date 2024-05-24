import { useEffect, useState } from "react";
import { Spinner } from "@material-tailwind/react";
import Movies from "../components/Movies/Movies";

export default function MovieList() {
    const [filmes, setFilmes] = useState([]);
    const [series, setSeries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [movieID, setMovieID] = useState("");

    useEffect(() => {
        setIsLoading(true);

        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR&page=1')
            .then(response => response.json())
            .then(data => {
                setFilmes(data.results);
                setIsLoading(false);
            })
            .catch(err => console.error(err));

        fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR&page=1')
            .then(response => response.json())
            .then(data => {
                setSeries(data.results);
                setIsLoading(false);
                console.log(data.results);
            })
            .catch(err => console.error(err));
    }, []);

    function handleClick(e) {
        console.log(e.target.parentNode.id);
        let id = e.target.parentNode.id;
        setMovieID(id);
    }

    return (
        <>
            <div
                style={movieID ? {backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${filmes[movieID].backdrop_path})`} : {backgroundColor: 'black'}}
                className="h-[650px] pb-5 flex flex-col items-baseline justify-end overflow-x-scroll hide-scroll-bar bg-no-repeat bg-cover bg-center"
            >
                <h1 className="text-white text-6xl mx-auto my-6">Filmes</h1>
                <div className="overflow-x-scroll">
                    <ul className="dark:text-gray-400 flex flex-wrap gap-4 justify-center">
                        {filmes.map(filme =>
                            <li key={filme.id} className="w-full lg:w-40 bg-blue-gray-800 rounded-lg p-4 m-2 h-auto text-white flex flex-col items-center text-center" id={filmes.indexOf(filme)} onClick={handleClick}>
                                <Movies filme={filme}/>
                            </li>
                        )}
                    </ul>
                </div>
            </div>

            {isLoading ?
                <>
                    <p className="mb-2">Carregando...</p>
                    <Spinner className="h-12 w-12" />
                </>
                : null}

            <div>
                <h1 className="text-4xl text-center my-6 dark:text-gray-400">Séries</h1>
                <div className="overflow-x-scroll">
                    <ul className="dark:text-gray-400 flex flex-wrap gap-4 justify-center">
                        {series.map(serie =>
                            <li key={serie.id} className="w-full lg:w-40 bg-deep-orange-800 rounded-lg p-4 m-2 h-auto text-white flex flex-col items-center text-center" id={serie.id} onClick={handleClick}>
                                <Movies filme={serie}/>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}
