import { useState, useEffect } from 'react'

const Search = ({searchMovies}) => {
    const [term, setTerm] = useState('')

    // useEffect(() => {
    //     if(term) {
    //         searchMovies(term)  
    //     };
    // }, [term, searchMovies])

    const handleSubmit = e => {
        e.preventDefault()
        if(term) {
            searchMovies(term)
            setTerm('')
        }
    }
    return (
        <header>
            <span>KinoJs</span>
            <form onSubmit={handleSubmit}>
                <input type="text" className="search" placeholder='Search...' value={term} onChange={e => setTerm(e.target.value)}/>
            </form>
        </header>
    )
}

export default Search;