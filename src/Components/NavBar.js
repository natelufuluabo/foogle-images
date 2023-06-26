import './styles.css';

const NavBar = () => {
    return(
        <nav className="navbar sticky-top d-flex flex-row mt-3">
            <a className="navbar-brand website-title" href="#">Foggle-Images</a>
            <button className="themeTogglerButton">
                <i class="fa-solid fa-moon"></i>
            </button>
        </nav>
    )
};

export default NavBar;