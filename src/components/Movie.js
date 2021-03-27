const IMG_API = 'https://image.tmdb.org/t/p/w1280'

const Movie = ({ movie }) => {
    const { title, poster_path, overview, vote_average} = movie

    const setVoteClass = vote => {
        if(vote >= 8) return 'green'
        if(vote >= 6) return 'yellow'
        return 'red'
    }
    return (
        <div className="movie">
            <img src={poster_path ? (IMG_API + poster_path) : 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=667&q=80'} alt={title}/>
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>
            <div className="movie-overview">
                <h2>Overview</h2>
                <span></span>
                <p>{overview}</p>
            </div>
        </div>
    )
}


export default Movie