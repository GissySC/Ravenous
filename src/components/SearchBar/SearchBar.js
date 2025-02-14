import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState('Best Match');

    const handleSelectedSorting = (event) => {
        setSortBy(event.target.value);
    }

    const handleSearch = (event) => {
        event.preventDefault();
        console.log(`Searching Yelp with ${searchTerm}, ${location}, ${sortBy}`)
    }

    return (
        <div id='searchBar'>
            <div id="title-app">
                <h1>ravenous</h1>
            </div>
            <section id='sorting-options'>
                {['Best Match', 'Highest Rated', 'Most Reviewed'].map((option) => (
                    <button 
                        key={option}
                        type="button"
                        value={option}
                        onClick={handleSelectedSorting}
                        className={sortBy === option ? 'active' : ''}
                    >
                        {option}
                    </button>
                ))}
            </section>

            <form id='sbinputs' onSubmit={handleSearch}>
                <input
                    type='text' 
                    id='userterms' 
                    name='userterms' 
                    placeholder='Asian food'   
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)}
                />                       
                <input 
                    type='text' 
                    id='location' 
                    name='location' 
                    placeholder='Barcelona'  
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />

                <input type='submit' value="Let's Go" />
            </form>
        </div>
        
    );
}

export default SearchBar;