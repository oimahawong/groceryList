// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import GroceryList from './components/GroceryList';
import GroceryEST from './components/GroceryEST';
import ListGroup from './components/ListGroup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grocery-list" element={<GroceryList />} />
        <Route path="/grocery-est" element={<GroceryEST />} />
        <Route path="/list-group" element={<ListGroup />} />
        
        {/* Catch-all route for unmatched paths */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

// NoMatch component to handle unmatched routes
const NoMatch = () => {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default App;
