import Navbar from "../components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import SearchBar from "../components/SearchBar";
import Favorites from "../views/Favorites";
import FavInfo from "../components/FavInfo";

function App() {
  const myStyle = {
    backgroundColor: "black",
    backgroundSize: "fill",
    backgroundRepeat: "repeat",
  };
  return (
    <div className="App" style={myStyle}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search" element={<SearchBar />} />
        <Route exact path="/favorites" element={<Favorites />} />
        <Route exact path="/favorites/:name" element={<FavInfo />} />
        <Route exact path="/pokemon/:name" element={<FavInfo />} />
      </Routes>
    </div>
  );
}

export default App;
