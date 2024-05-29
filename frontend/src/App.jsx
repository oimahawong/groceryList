import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import GroceryList from './components/GroceryList';
import GroceryEST from './components/GroceryEST';
import ListGroup from './components/ListGroup';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/grocery-list" element={<GroceryList />} />
                <Route path="/grocery-est" element={<GroceryEST />} />
                <Route path="/list-group" element={<ListGroup />} />
            </Routes>
        </Router>
    );
}

export default App;
