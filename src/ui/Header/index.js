import './styles/index.css';
import SearchBar from '../SearchBar';
// import AddBar from '../AddBar';
import { useLocation } from 'react-router-dom';
import NavBar from '../NavBar';

const Header = (props) => {
  const location = useLocation();

  return (
    <header>
      <div className='header-flex'>
        <h1>Animals App</h1>
        {location.pathname !== '/' && location.pathname !== '/about' && (
          <SearchBar />
        )}
        <NavBar {...props} />
      </div>
      {/* <AddBar placeholder={'Add an animal'} /> */}
    </header>
  );
};

export default Header;
