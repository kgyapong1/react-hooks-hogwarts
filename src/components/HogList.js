import Tile from "./Tile";

function HogList({hogArray}){
const filteredHog = hogArray.map((hog)=> {
return hog.name, hog.image

})
return(<Tile/>)



}




export default HogList;