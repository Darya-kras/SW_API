import Header from './components/Header/Header';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import Homepage from './pages/Homepage/Homepage';
import { SearchProvider } from './components/SearchBar/SearchContext';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <SearchProvider>
          <div className='Base'>
            <Header />
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/FavoritesPage' element={<FavoritesPage />} />
            </Routes>
          </div>
        </SearchProvider>
      </HashRouter>
    </div>
  );
}

export default App;