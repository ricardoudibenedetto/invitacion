import { Route, Routes } from 'react-router-dom';


import { CronogramaPage, HomePage, IngresoPage, ListaInvitadosPage, LoginPage, MicroPage } from '../pages';
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
              <Route path="listaInvitados" element={<ListaInvitadosPage />} />
              <Route path="micro" element={<MicroPage />} />
              <Route path="ingreso" element={<IngresoPage />} />
              <Route path="cronograma" element={<CronogramaPage />} />
            </Routes>
          </PrivateRoute>
        } />

        {/* <Route path="login" element={<LoginPage />} /> */}
        {/* <Route path="/*" element={ <HeroesRoutes />} /> */}



      </Routes>

    </>
  )
}
