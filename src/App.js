import './App.css';
import NavBar from './Components/NavBar';
import SearchBar from './Components/SearchBar';
import { useRecoilValue } from 'recoil';
import { appThemeAtom } from './Utilities/atoms';

function App() {
  const appTheme = useRecoilValue(appThemeAtom);
  return (
    <div id={appTheme} className='big-container'>
      <div className="container d-flex flex-column gap-5">
        <NavBar/>
        <SearchBar />
      </div>`
    </div>
  );
}

export default App;
