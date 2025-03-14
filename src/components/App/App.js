import React, { useState } from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList.js';
import SearchBar from '../SearchBar/SearchBar.js';


function App() {
  const [businesses, setBusinesses] = useState([]);

  const handleSearch = async (searchTerm, location, sortBy) => {
    try {
      const response = await fetch(
        `/.netlify/functions/Yelp?searchTerm=${searchTerm}&location=${location}&sortBy=${sortBy}`
      );
      if (!response.ok) {
      throw new Error(`Error en la petición: ${response.statusText}`);
      }

      const data = await response.json();
      setBusinesses(data || []);
    } catch (error) {
      console.error("Error al obtener los datos de Yelp:", error);
    }
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
