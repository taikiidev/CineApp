import { FaClock, FaStar } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Movie() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});



    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR`)
        .then(response => response.json())
        .then(data => {setMovie(data)})
        .catch(err => console.error(err));
    }, []);
    
    const url = `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`;
    return ( 
        <div className='h-screen text-white'>
            <div className="relative max-w-xl mx-auto mt-5"></div>
            <div className='text-center items-center mb-5 flex gap-5 flex-col justify-center w-full h-2/3 bg-no-repeat bg-cover bg-center' style={{backgroundImage: `url('${url}')`}}>
            
         
            <div className="absolute inset-0 bg-black opacity-60 rounded-md top-28 bottom-24"></div>
                <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
                    
                    <h1 className='text-7xl'>{movie.title || movie.name}</h1>
                    <h2 className='text-4xl'>{movie.tagline}</h2>
                    <div className="flex items-center">
                    {movie.runtime && <h3 className="mr-2"><FaClock /> </h3>}
                        {movie.runtime && <h3 className='text-2xl'>{movie.runtime} minutos</h3>}
                    </div>
                    
                    <div className="flex items-center">
                        <h4 className="mr-2"><FaStar /> </h4>
                        <h4 className='text-xl'>{movie.vote_average} votos</h4>
                    </div>
            </div>


            
            
           
        </div>

        <div>
            <h1 className="text-black p-4 text-4xl" >Sinopse</h1>
            <a href=""><h1 className="text-black p-4 text-4xl">asdasd</h1></a>
        </div>
        
        <p className='text-black p-4'>{movie.overview}</p>
        </div>
    );
}

export default Movie;