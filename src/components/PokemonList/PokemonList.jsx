import { useEffect, useState } from "react";




function PokemonList(){

    const [X, setX] = useState(0);
    const [Y, setY] = useState(0);

    useEffect(() => {
        console.log("Effect called")
    }, [X]);

    return(
        <>
            <div>
                X: {X} <button onClick={() =>setX(X+1)}>Inc</button>
            </div>
            <div>
                Y: {Y} <button onClick={() =>setY(Y+1)}>Dec</button>
            </div>
        </>
    )
}
export default PokemonList;