
import './App.css';
import { Route, Routes } from '../node_modules/react-router/index';
import NewsPage from './NewsPage';

function App() {

  return (
    <Routes>
      <Route path='/' element={<NewsPage />} />
      <Route path='/:category' element={<NewsPage />} />
    </Routes>
  );
}

export default App;
