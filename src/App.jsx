
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import ArticlesList from './pages/ArticlesList'
import Error from './pages/Error'

const routes = [{
  path: '/',
  element: <Home />
},
{
  path: '/About',
  element: <About />
},
{
  path: '/articles',
  element: <ArticlesList />
},
{
  path: './*',
  element: <Error />
}
]

const router = createBrowserRouter(routes);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
