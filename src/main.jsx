import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import App from './App'
import './main.css'
import ListaFilmes from './pages/ListaFilmes'
import Sobre from './pages/Sobre'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import Contato from './pages/Contato'

const router = createBrowserRouter([
{
  path: '/',
  element: <App />,
  children: [
    {index: true, element: <Home/>},
    {path: '/lista-filmes', element: <ListaFilmes/>},
    {path: '/sobre', element: <Sobre/>},
    {path: '/contato', element: <Contato/>},
    {path: '*', element: <PageNotFound/>},
  ]
}

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
