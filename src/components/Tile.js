import React, {useState} from "react";
import augustus_gloop from "../assets/augustus_gloop.jpg";
import babe from "../assets/babe.jpg";
import porkchop from "../assets/porkchop.jpg";
import cherub from "../assets/cherub.jpg";
import piggy_smalls from "../assets/piggy_smalls.jpg";

const images = {
    "augustus_gloop": augustus_gloop,
    Babe: babe,
    Porkchop: porkchop,
    Cherub: cherub,
    "Piggy smalls": piggy_smalls,
  };

function Tile({props}){
const [name, setName] = useState("")

return (<div>
    <img src={images[images.name]} alt={props.name} />
    </div>)

}

export default Tile;


  
  function PigCard(props) {
    return (
      <div>
        <h2>{props.name}</h2>
        <img src={images[props.name]} alt={props.name} />
      </div>
    );
  }