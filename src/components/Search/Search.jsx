import "./Search.css";
function Search(){
    return(
        <div className="seach-wrapper">
        <input 
            id="pokemon-name-search"
            type="text"
            placeholder="pokemon name..."
        />
        </div>
    );
}
export default Search;