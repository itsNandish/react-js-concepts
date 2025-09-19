
import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import HomePage from './Home'
import AboutPage from './About'
import ProductsPage from './Contact'
import CarProduct from './carProduct'
import BikeProduct from './bikeProduct'
import RegisterForm from './React-hook-form'
import FocusInput from './Hooks'
import Parent from './useCallback-hook'

function App() {

  return (
    <>
      <h1>Practice on Learned Topics</h1>

      <nav>
        <Link to={"/"}>Home</Link> | <Link to={"/About"}>About</Link> | <Link to={"/Products"}>Product</Link>
        | <Link to={"/register-form"}>Register here</Link>
      </nav>

      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/About' element={<AboutPage />} />
        <Route path='/About/:name' element={<AboutPage />}/>
        {/* <Route path='/Products' element={<ProductsPage />} /> */}
        <Route  path='/Products' element={<ProductsPage />}>
          <Route path='car' element={<CarProduct />}/>
          <Route path='bike' element={<BikeProduct />}/>
        </Route>
        <Route path='/register-form' element={<RegisterForm />} />
        <Route path='/hooks' element={<FocusInput />} />
         <Route path='/use-callback' element={<Parent />} />
      </Routes>
    </>
  )
}

export default App
