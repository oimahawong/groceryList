import { Fragment, useState } from "react";
import SearchBar from "./SearchBar"; //search DOM
import HomeIcon from "../assets/shopping-bag.svg";
import "../Home.css"; // Import the CSS file

function Home() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    // Implement your search logic here
    console.log("Searching for:", query);
    // Update the search results (this is just an example)
    setSearchResults([`Result for "${query}"`]);
  };

  return (
    <Fragment>
      <div className="home-container">
    
      <iframe
          src="https://giphy.com/embed/2TFn4myx9Ocd6PYCFf"
          
          className="giphy-embed"
          allowFullScreen
          title="Giphy Embed"
        ></iframe>
        <p>
          <a href="https://giphy.com/gifs/zookiz-shopping-zookiz-sticker-the-crazy-zoo-2TFn4myx9Ocd6PYCFf">
           
          </a>
        </p>
        <SearchBar onSearch={handleSearch} />
        <div>
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
        
      </div>
    </Fragment>
  );
}

export default Home;
