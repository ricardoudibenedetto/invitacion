import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';



export const AppRouter = () => {
  return (
    <>

      <Routes>

        <Route path="login/*" element={
          <PublicRoute>
            {/* <LoginPage /> */}
            <Routes>
              <Route path="/*" element={<LoginPage />} />
            </Routes>
          </PublicRoute>
        }
        />


        <Route path="/*" element={
          <PrivateRoute>
            <Routes>
              <Route path="home" element={<HomePage />} />
            </Routes>
          </PrivateRoute>
        } />

        {/* <Route path="login" element={<LoginPage />} /> */}
        {/* <Route path="/*" element={ <HeroesRoutes />} /> */}



      </Routes>

    </>
  )
}
