import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import SearchBar from "./SearchBar";
import Favorites from "./Favorites";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/search' >
            <SearchBar />
          </Route>
          <Route exact path='/favorites' >
            <Favorites />
          </Route>
          
        </Switch>
      </div>
    </Router >
  );
}

export default App;
