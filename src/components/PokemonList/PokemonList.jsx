import { useEffect, useState } from "react";

function PokemonList(){
    useEffect(() => {
        console.log("Effect called")
    }, []);
    const [X, setX] = useState(0);
    const [Y, setY] = useState(0);

    return(
        <>
            <div>
                X: {X} <button onClick={() =>setX(X+1)}>Inc</button>
            </div>
            <div>
                X: {Y} <button onClick={() =>setY(Y+1)}>Dec</button>
            </div>
        </>
    )
}
export default PokemonList;