
import './App.css';
import { Route, Routes } from '../node_modules/react-router/index';
import NewsPage from './NewsPage';
import { BrowserRouter } from '../node_modules/react-router-dom/index';

function App() {

  return (
    <Routes>
      <Route path='/' element={<NewsPage />} />
      <Route path='/:category' element={<NewsPage />} />
    </Routes>
  );
}

export default App;
