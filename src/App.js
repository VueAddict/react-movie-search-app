import { useState } from 'react'

import Movie from './components/Movie'
import Search from './components/Search'
import useFetch from './hooks/useFetch'

const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6276b4b596f0f967e3424fa0ea0666ab&page=1'

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=6276b4b596f0f967e3424fa0ea0666ab&query='

function App() {
  const [url, setUrl] = useState(FEATURED_API)
  const { data: movies, isLoading, error } = useFetch(url)

  const searchMovies = term => {
    setUrl(SEARCH_API + term)
  }

  return (
    <>
      <Search searchMovies={searchMovies} />
      {
        isLoading && <h1 className='loading'>Loading...</h1>
      }
      {
        error && <h1 className='error'>Oops, Error :(</h1>
      }
      
      <div className="movie-container">
        {
          movies && movies.results.map(movie => <Movie key={movie.id} movie={movie} />)
        }
      </div>
    </>
  );
}

export default App;
