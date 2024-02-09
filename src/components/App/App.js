import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchPage from '../../pages/SearchPage/SearchPage.js';
import BoardPage from '../../pages/BoardPage/BoardPage.js';
import Root from '../../pages/RootPage/Root.js';
import SearchProvider from '../../providers/SearchProvider/SearchProvider.js';
import BoardProvider from '../../providers/BoardProvider/BoardProvider.js';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <SearchProvider>
        <BoardProvider>
          <Routes>
            <Route path="/" element={<Root />}>
              <Route index element={<SearchPage />} />
              <Route path="/search" element={<SearchPage />} />             
                <Route path="/myboard" element={<BoardPage />} />            
            </Route>
          </Routes>
          </BoardProvider>
        </SearchProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
