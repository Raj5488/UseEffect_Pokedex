import { useEffect, useState } from "react";
import  axios from 'axios';
import "./PokemonList.css";
function PokemonList(){

        const [pokemonList, setPokemonList] = useState([]);
        const [isLoading, setisLoading] = useState(true);
    async function downloadPokemons(){
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        console.log(response.data);
        setisLoading(false)
    }
    useEffect(() => {
        downloadPokemons();
    }, []);

    return(
        <div className="pokemon-list-wrapper">
            <div>Pokemon List</div>
            {(isLoading)? 'Loading...' : 'Data downloaded' }
        </div>

    )
}
export default PokemonList;