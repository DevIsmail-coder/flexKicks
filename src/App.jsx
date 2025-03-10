
import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Home from './pages/home/home'
import Menpage from './pages/menpage/Menpage'
import Women from './pages/women/Women'
import Baby from './pages/baby/Baby'
import Details from './pages/details/Details'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Checkout from './pages/checkout/Checkout'
import Cart from './pages/cart/Cart'
import Contact from './pages/contact/Contact'


function App() {
  
    const routes = createBrowserRouter([
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/menpage",
        element: <Menpage />
      },
      {
        path: "/womenpage",
        element: <Women />
      },
      {
        path: "/babypage",
        element: <Baby/>
      },
      {
        path: "/detailspage",
        element: <Details />
      },
      {
        path: "/loginpage",
        element: <Menpage />
      },
      {
        path: "/loginpage",
        element: <Login />
      },
      {
        path: "/signuppage",
        element: <Signup />
      },
      {
        path: "/checkout",
        element: <Checkout />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ])
  return <div className='Appbody'>
    <RouterProvider router={routes} />
  </div>
}

export default App
