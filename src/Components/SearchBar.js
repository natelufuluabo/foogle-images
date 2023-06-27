import { useRecoilState } from "recoil";
import { searchResultsAtom } from "../Utilities/atoms";

const SearchBar = () => {
    return (
        <div className="col-sm-12 col-md-12 col-lg-7 searchContainer">
            <div class="input-group">
                <input type="text" class="form-control p-3 searchInput"/>
                <div class="input-group-append">
                    <button class="btn py-3 px-4 searchButton" type="button"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;