import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";
import SearchBar from "./SearchBar";
import Favorites from "./Favorites";
import FavInfo  from "./FavInfo";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search" element={<SearchBar />} />
        <Route exact path="/favorites" element={<Favorites />} />
        <Route exact path="/favorites/:name" element={<FavInfo />} />
      
      </Routes>
    </div>
  );
}

export default App;
