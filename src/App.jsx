import './App.css'
import MovieCard from './components/moviecard'
import Home from './pages/Home';
import { Routes,Route } from 'react-router-dom';
import Favourites from './pages/Favourites';
import NavBar from './components/NavBar';
function App() {
  let movienumber=1;
    
  return (
   <div>
   <NavBar/>
   <main className='main-content'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Favourites' element={<Favourites/>}/>
    </Routes>
   </main>
   </div>
  )
}

export default App
