import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Movie() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});



    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e`)
        .then(response => response.json())
        .then(data => {setMovie(data)})
        .catch(err => console.error(err));
    }, []);
    
    const url = `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`;
    return ( 
        <>
        <div className='text-center items-center mb-5 flex justify-center w-full h-2/3 bg-no-repeat bg-cover bg-center' style={{backgroundImage: `url('${url}')`}}>
        <h1 className='text-white text-7xl'>{movie.title}</h1>
        </div>
         <p className='p-4'>{movie.overview}</p>
        </>
    );
}

export default Movie;