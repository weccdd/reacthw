import {simpsons} from "./data/arrSimpson";
import {Simpson} from "./Components/ComponentsSimpson/Simpson";
import {rickAndMorty} from "./data/arrRickAndMorty";
import {RickAndMorty} from "./Components/RickAndMorty/RickAndMorty";

const App = () => {
    return (
        <div>
           <div>{
               simpsons.map((simpson, index)=>(
                   <Simpson item={simpson} key={index}/>
               ))
           }</div>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <div>{
                rickAndMorty.map(rickAndMorty => (
                    <RickAndMorty item={rickAndMorty} key={rickAndMorty.id}/>
                ))
            }</div>
        </div>
    );
};

export {App};