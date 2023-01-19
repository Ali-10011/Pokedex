import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import SearchBar from "./SearchBar";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <SearchBar />
     <Home />
    </div>
  );
}

export default App;
