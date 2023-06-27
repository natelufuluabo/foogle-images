import './styles.css';
import { appThemeAtom } from '../Utilities/atoms';
import { useRecoilState } from 'recoil';

const NavBar = () => {
    const [appTheme, setAppTheme] = useRecoilState(appThemeAtom);
    const toggleAppTheme = () => {
        appTheme === 'light' ? setAppTheme('dark'):setAppTheme('light')
        console.log(appTheme);
    }
    return(
        <nav className="navbar sticky-top d-flex flex-row pt-3">
            {/* eslint-disable-next-line */}
            <a id={appTheme === 'light' ? 'websiteTitle-light' : 'websiteTitle-dark'} className="navbar-brand" href="#">
                Foggle-Images
            </a>
            <button id={appTheme === 'light' ? 'themeTogglerButton-light' : 'themeTogglerButton-dark'} onClick={toggleAppTheme}>
                <i class="fa-solid fa-moon"></i>
            </button>
        </nav>
    )
};

export default NavBar;