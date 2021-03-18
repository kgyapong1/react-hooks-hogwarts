import Tile from "./Tile";

function HogList({hogArray}){
    const filteredHog = hogArray.map((hog) => {
        return <Tile name={hog.name} weight={hog.weight} specialty={hog.specialty} greased={hog.greased}/>
       

    });

console.log(filteredHog)
return(
<div> {filteredHog}</div>
)



}




export default HogList;