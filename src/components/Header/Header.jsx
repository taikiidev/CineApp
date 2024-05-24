import NavBar from "../NavBar/Navbar"
import ToggleTheme from "../ToggleTheme/ToggleTheme"

const Header = ({user, isLogged, button}) => {
  console.log(user)
  return (
    <div className="p-5 w-full bg-black dark:bg-dark-200 flex justify-between items-center">
      {isLogged ?
      ( 
        <>
        <div className="flex gap-2 items-center">
          <img src={user.picture} alt="profile" className="rounded-full h-8 w-8" />
          <span className="text-gray-100">Olá {user.given_name}</span>
          {button}
        </div>
        </>
      )
      :
      <span className="text-gray-100">Olá, Visitante </span>
      
  }
      <h1 className="text-gray-100 text-2xl sm:text-4xl">Bem vindo ao CineApp!</h1>
      <NavBar/>
      <ToggleTheme />
    </div>
  )
}

export default Header