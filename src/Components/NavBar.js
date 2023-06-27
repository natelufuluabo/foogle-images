import './styles.css';
import { appThemeAtom, searchResultsAtom } from '../Utilities/atoms';
import { useRecoilState } from 'recoil';

const NavBar = () => {
    const [appTheme, setAppTheme] = useRecoilState(appThemeAtom);
    // eslint-disable-next-line
    const [searchResults, setSearchResults] = useRecoilState(searchResultsAtom);
    const toggleAppTheme = () => {
        appTheme === 'light' ? setAppTheme('dark'):setAppTheme('light')
    }
    return(
        <nav className="navbar d-flex flex-row col-sm-12 col-md-12 col-lg-8 pt-3">
            {/* eslint-disable-next-line */}
            <a onClick={() => setSearchResults([])} id={appTheme === 'light' ? 'websiteTitle-light' : 'websiteTitle-dark'} className="navbar-brand" href="#">
                Fooggle-Images
            </a>
            <button id={appTheme === 'light' ? 'themeTogglerButton-light' : 'themeTogglerButton-dark'} onClick={toggleAppTheme}>
                <i class="fa-solid fa-moon"></i>
            </button>
        </nav>
    )
};

export default NavBar;