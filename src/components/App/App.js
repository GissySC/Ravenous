import React, { useState } from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList.js';
import SearchBar from '../SearchBar/SearchBar.js';
import searchBusinesses from '/Gissela/Documentos/Web Dev/Practice/Ravenous/ravenousapp/src/utils/Yelp.js';


function App() {
  const [businesses, setBusinesses] = useState([]);

  const handleSearch = async (searchTerm, location, sortBy) => {
    const results = await searchBusinesses(searchTerm, location, sortBy);
    setBusinesses(results || []);
  }

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
