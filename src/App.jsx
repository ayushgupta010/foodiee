import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Success from './pages/success'
import Home from './pages/home'
import Error from './pages/error'

function App() {


  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/success' element={<Success/>} />
    <Route path='/*' element={<Error/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
