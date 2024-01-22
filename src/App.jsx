import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Main from './pages/Main/Main';
import Favorites from './pages/Favorites/Favorites';
import RecipeDetails from './pages/RecipeDetails/RecipeDetails';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Layout />}
        >
          <Route
            path=''
            element={<Main />}
          />
          <Route
            path='favorites'
            element={<Favorites />}
          />
          <Route
            path='recipe/:id'
            element={<RecipeDetails />}
          />
        </Route>
        <Route
          path='*'
          element={<ErrorPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
