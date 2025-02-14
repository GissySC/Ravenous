import './App.css';
import BusinessList from '../BusinessList/BusinessList.js';
import SearchBar from '../SearchBar/SearchBar.js';

const businesses = [
  {
    id: 1,
    name: "Café Bonjour",
    address: "123 Main St",
    city: "Paris",
    state: "FR",
    zipCode: "75000",
    category: "Brunch",
    rating: 4.5,
    reviewCount: 90,
    imageSrc: "/images/brunch.jpg", 
  },
  {
    id: 2,
    name: "Sushi Zen",
    address: "456 Sushi Lane",
    city: "Tokyo",
    state: "JP",
    zipCode: "100-0001",
    category: "Japanese",
    rating: 4.8,
    reviewCount: 120,
    imageSrc: "/images/brunch.jpg", 
  },
  {
    id: 3,
    name: "Burger World",
    address: "789 Burger Blvd",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    category: "Fast Food",
    rating: 4.2,
    reviewCount: 150,
    imageSrc: "/images/brunch.jpg", 
  },
];

function App() {
  return (
    <div className="App">
      <SearchBar />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
