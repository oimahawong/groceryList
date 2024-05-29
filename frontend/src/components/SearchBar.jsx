import { useState } from "react";
import CameraIcon from "../assets/camera-126.svg";
import "../Home.css"; // Import the CSS file


function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="input-group input-group-lg">
     
      <img class="camera"src={CameraIcon} alt="Image Icon" width="50" height="50" />
     
      <input
        type="text"
        className="form-control"
        placeholder="Search Item"
        value={query}
        onChange={handleInputChange}
        aria-label="Search"
        
      />
       
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>

    </div>
    
  );
}

export default SearchBar;
