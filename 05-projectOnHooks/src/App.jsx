import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassBasedComponent from './components/class-based-component'
import FunctionalBasedComponent from './components/function-based-components'
import ProductList from './components/products'
import Users from './components/users'


const dummyData = ['product 1', 'product 2', 'product 3'];

function App() {
  return (
    <div>
      <h1>Fetch API</h1>
      {/* <ClassBasedComponent/> */}

      {/* <FunctionalBasedComponent/> */}
      {/* <ProductList listOfProducts = {dummyData} name = "Nandish" city = "Bengaluru"/> */}
      <Users/>
    </div>

  )
}

export default App
