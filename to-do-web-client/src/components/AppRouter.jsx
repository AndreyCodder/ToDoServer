import React from 'react';
import { useContext } from 'react';
import { Route, Routes } from 'react-router';
import { privateRoutes, publicRoutes } from '../router/routes';
import { AuthContext } from './Context/context';


const AppRouter = () => {
  const {isAuth} = useContext(AuthContext)
    return (
          isAuth
            ?
            <Routes>
              {
                privateRoutes.map(r => {return (
                    <Route
                      path={r.path}
                      element={r.element}
                      key={r}
                    />
                  ) }
                ) 
              }
            </Routes>
            :
            <Routes>
              {
                publicRoutes.map(r => {return (
                    <Route
                      path={r.path}
                      element={r.element}
                      key={r}
                    />
                  ) }
                ) 
              }
            </Routes>
    );
};

export default AppRouter;