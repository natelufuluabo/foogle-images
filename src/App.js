import './App.css';
import { useRecoilValue } from 'recoil';
import NavBar from './Components/NavBar';
import { appThemeAtom } from './Utilities/atoms';

function App() {
  const appTheme = useRecoilValue(appThemeAtom);
  return (
    <div id={appTheme} className='big-container'>
      <div className="container">
        <NavBar/>
      </div>`
    </div>
  );
}

export default App;
