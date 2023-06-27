import { useState } from "react";
import { useRecoilState, } from "recoil";
import { searchResultsAtom } from "../Utilities/atoms";
import { fetchImages } from '../Utilities/api';

const SearchBar = () => {
    const [userInput, setUserInput] = useState('');
    // eslint-disable-next-line
    const [searchResults, setSearchResults] = useRecoilState(searchResultsAtom);
    const handleChange = (event) => {
        setUserInput(event.target.value);
    }
    const updateSearchResults = async () => {
        const results = await fetchImages(userInput);
        setSearchResults(results);
        setUserInput('');
    }
    return (
        <div className="col-sm-12 col-md-12 col-lg-7 searchContainer">
            <div class="input-group">
                <input type="text" class="form-control p-3 searchInput" value={userInput} onChange={handleChange}/>
                <div class="input-group-append">
                    <button onClick={updateSearchResults} class="btn py-3 px-4 searchButton" type="button"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;