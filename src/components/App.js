import React from "react";
import Nav from "./Nav";
import Tile from "./Tile";
import hogs from "../porkers_data";
import Filter from "./Filter";
import HogList from "./HogList";

function App() {
  return (
    <div>
    <div className="App">
  
      <Nav />
    </div>
    <div> <Filter/> </div>
    <div> <HogList hogArray={hogs}/> </div>
    </div>
  );
}

export default App;
