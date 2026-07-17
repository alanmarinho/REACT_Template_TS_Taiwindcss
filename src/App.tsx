import { Routes, Route } from 'react-router-dom';
import Page404 from '@pages/page404';
import HomePage from '@pages/home';
import ExemploPage from '@pages/exemplo';


function App() {
  return (
    <>
      <Routes>
        <Route
          path={'/'}
          element={
            <HomePage />
          }
        />
        <Route
          path={'/exemplo'}
          element={
            <ExemploPage />
          }
        />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;