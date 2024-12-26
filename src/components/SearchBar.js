import React from 'react';
import './SearchBar.css';

function SearchBar() {
    return (
        <div id='searchBar'>
            <div id="title-app">
                <h1>ravenous</h1>
            </div>
            <section id='sorting-options'>
                <button type='button'>Best Match</button>
                <button type='button'>Highest Rated</button>
                <button type='button'>Most Reviewed</button>
            </section>
            <form id='sbinputs' action=''>
                <input
                    type='text' 
                    id='userterms' 
                    name='userterms' 
                    placeholder='Asian food'    
                />                       
                <input 
                    type='text' 
                    id='location' 
                    name='location' 
                    placeholder='Barcelona'  
                />

                <input type='submit' value="Let's Go"/>
            </form>
        </div>
        
    );
}

export default SearchBar;