
import './App.css'
import { Routes, Route} from 'react-router-dom'
import ReactHookForm from './react-hook-form'
import HookRef from './Hooks'
import TranstackQuery from './Transtack-query'

function App() {

  return (
    <>
      <Routes>
        <Route path="/react-hook-form" element={<ReactHookForm />} />
        <Route path="/useRef-hook" element={<HookRef />} />
         <Route path="/transtack" element={<TranstackQuery />} />
      </Routes>
    </>
  )
}

export default App
