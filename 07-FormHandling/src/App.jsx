
import './App.css'
import Forms from './components/forms'
import Register from './components/register'
import LogIn from './components/loginPage'

function App() {


  return (
    <div>
        <h1>Form Handling In React</h1>
        {/* <Forms /> */}
        <div style={ {display : 'felx', gap : '20px'}}>
          <LogIn />
          <Register />
        </div>
   </div>
  )
}

export default App
