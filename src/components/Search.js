import { useState } from "react";

function Search(props){
    const [searchTerm, setSearchTerm] = useState();
    return(
        <>
        search
          <input type="text" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} />
        </>
    )
}

export default Search;