import './App.css'
import MovieCard from './components/moviecard'
function App() {
 
  return (
  <>
  <MovieCard movie={{title: "peter Pan", release_date:"26-11-2001"}}/>
  <MovieCard movie={{title: "Avatar", release_date:"15-10-2009"}}/>
   </>
  )
}

export default App
