import MovieCard from "../components/moviecard"
import { useState } from "react"
function Home(){
    const[searchQuery,setSearchQuery]=useState("");
    const movies=[
        { id:1 ,title:"john-wick",release_date:"2020"},
        { id:2 ,title:"hulk",release_date:"2005"},
        { id:3 ,title:"terrifier",release_date:"2021"},
        { id:4 ,title:"Avengers",release_date:"2012"},
    ]
    
    const handleSearch=(e)=> {
        e.preventDefault()
    alert(searchQuery);
    }
   return (
   <div className="home">
    <form onSubmit={handleSearch} className="search-form">
        <input type="text" 
        placeholder="Search For Movie" 
        className="search-input"
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}/>
        <button type="submit">Search</button>
    </form>
    <div className="movies-grid">
        {movies.map((movie) =>(
            movie.title.toLowerCase().startsWith(searchQuery)&&<MovieCard movie={movie} key={movie.id}/>))}
    </div>
   </div>
   )
};
export default Home;