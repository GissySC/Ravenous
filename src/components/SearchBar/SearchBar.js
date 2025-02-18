import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState('best_match');

    const toTitleCase = (text) => {
        if (!text || typeof text !== 'string') return '';
        return text 
        .toLowerCase()
        .split(' ')
            .map(words => words.charAt(0).toUpperCase() + words.slice(1))
            .join(' ');
        
    };

    const handleSelectedSorting = (event) => {
        const newSortBy = event.target.getAttribute('data-value');
        setSortBy(newSortBy);
        if (searchTerm && location) {
            onSearch(searchTerm, location, newSortBy);
        }
    }; 
        

    const handleSearch = (event) => {
        event.preventDefault();

        if (!searchTerm || !location) {
            alert("Por favor, ingresa un término de búsqueda y una ubicación");
            return;
        }

        onSearch(searchTerm, location, sortBy);
    }

    return (
        <div id='searchBar'>
            <div id="title-app">
                <h1>ravenous</h1>
            </div>
            <section id='sorting-options'>
                {[
                    { label: 'Best Match', value: 'best_match'},
                    { label: 'Highest Rated', value: 'rating'},
                    { label: 'Most Reviewed', value: 'review_count'}

                ].map((option) => (
                    <button 
                        key={option.value}
                        type="button"
                        data-value={option.value}
                        onClick={handleSelectedSorting}
                        className={sortBy === option.value ? 'active' : ''}
                    >
                        {option.label}
                    </button>
                ))}
            </section>

            <form id='sbinputs' onSubmit={handleSearch}>
                <input
                    type='text' 
                    id='userterms' 
                    name='userterms' 
                    placeholder='Ejemplo: Sushi, Pizza, Brunch...'   
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(toTitleCase(e.target.value))}
                />                       
                <input 
                    type='text' 
                    id='location' 
                    name='location' 
                    placeholder='Ejemplo: Barcelona, Londres, Paris...'  
                    value={location}
                    onChange={(e) => setLocation(toTitleCase(e.target.value))}
                />

                <input type='submit' value="Let's Go" />
            </form>
        </div>
        
    );
}

export default SearchBar;