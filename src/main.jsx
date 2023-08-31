import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


//Blocos de Rotas
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EditarProdutos from './routes/EditarProdutos.jsx';
import Erro404 from './routes/Erro404.jsx';
import Home from './routes/Home.jsx';
import Produtos from './routes/Produtos.jsx';

const router = createBrowserRouter([
  {path: '/', element: <App/>, 
  children: [
    {path: '/', element: <Home/>},
    {path: '/produtos', elemnet: <Produtos/>},
    {path: '/editar/produtos/:id', element: <EditarProdutos/> }
  ]}

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
