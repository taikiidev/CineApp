import {NavLink} from 'react-router-dom';

export default function NavBar(){
    return(
        <>
        <nav className="text-white">
            <ul className='flex justify-between'>
                <li className='p-4'><NavLink to='/' className="active:border-b-white"> Home</NavLink></li>
                <li className='p-4'><NavLink to='/lista-filmes' className="active:border-b-white"> Filmes</NavLink></li>
                <li className='p-4'><NavLink to='/sobre' className="active:border-b-white"> Sobre</NavLink></li>
            </ul>    
        </nav>
        </>
    )
}