import { HeroSection } from './Component/HeroSection'
import './App.css'
import About from './Component/About';
import Footer from './Component/Footer';
import Error from './Component/Error';
import CountryDetails from './Component/CountryDetails';
import {Header} from './Component/Header'
import Country from './Component/Country';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from './Component/Contact';
function App() {
const router = createBrowserRouter([
  {
    path:"/",
    element:<div>
      <Header/>
      <HeroSection/>
      <About/>
      <Footer/>
    </div>
  },
  {
    path:'/about',

    element:<div>
      <Header/>
       <About/>
        <Footer/>
    </div>
   
  },
  {
    path:'/country',
    element:<div>
      <Header/>
       <Country/>
        <Footer/>
    </div>
  },
  {
   path:'/contact',
   element:<div>
      <Header/>
       <Contact/>
        <Footer/>
    </div>
  },
  { 
    path:"/country/:id",
    element:<CountryDetails/>

  },
  { 
    path:"*",
    element:<Error/>

  }
])

  return (
   <>
    return <RouterProvider router={router}> </RouterProvider>;

   </>
  )
}

export default App
