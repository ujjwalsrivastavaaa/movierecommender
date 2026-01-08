 function MovieCard({movie}){

    function onLike(){
    alert("clicked");
    }
  return(
    <div className="movie-card">
        <div clasName="movie-poster">
            <img src={movie.url} alt={movie.title}/>
            <div className="movie-overlay">
                <button className="favourite-btn" onClick={onLike}>♡</button>
            </div>
        </div>
     <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
     </div>
    </div>
  )
}
export default MovieCard;