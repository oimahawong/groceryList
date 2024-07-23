// searchbar.jsx

import React, { useState } from 'react';
import axios from 'axios';

function SearchBar({ setSearchResults }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get('https://api.redcircleapi.com/request', {
        params: {
          api_key: '1AA1111A1AAA111A111AA11A111AA111',
          search_term: searchTerm,
          category_id: '5zja3',
          type: 'search'
        }
      });

      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search for..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="btn btn-outline-secondary" type="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
