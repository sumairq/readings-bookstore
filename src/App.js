import { Route, Routes } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import Header from './components/Header';
import CategoriesPage from './pages/CategoriesPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </>
  );
}

export default App;
