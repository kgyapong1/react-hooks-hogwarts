import React, {useState} from "react";
import augustus_gloop from "../assets/augustus_gloop.jpg";
import babe from "../assets/babe.jpg";
import bailey from "../assets/bailey.jpg";
import cherub from "../assets/cherub.jpg";
import galaxy_note from "../assets/galaxy_note.jpg";
import leggo_my_eggo from "../assets/leggo_my_eggo.jpg";
import peppa from "../assets/peppa.jpg";
import piggy_smalls from "../assets/piggy_smalls.jpg";
import piglet from "../assets/piglet.jpg";
import porkchop from "../assets/porkchop.jpg";
import trouble from "../assets/trouble.jpg";
import truffle_shuffle from "../assets/truffle_shuffle.jpg";

const images = {
    "augustus_gloop": augustus_gloop,
    Babe: babe,
    Porkchop: porkchop,
    Cherub: cherub,
    "Piggy smalls": piggy_smalls,
  };


function Tile({name, weight, specialty, greased}){
  const [showInfo, setShowInfo] = useState(false)

  function handleClick() {
    setShowInfo(!showInfo)
  }

  
    return (
      <div onClick={handleClick}>
        <h2>{name}</h2>
        <img src={images[name]} alt={name} />
        {showInfo ? <p> {weight} {specialty} {greased} </p> : null} 
      </div>
    );
  }

export default Tile;


  
