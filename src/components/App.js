import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate} from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './Routes/PrivateRoute';
import { PublicRoute } from './Routes/PublicRoute';
import { refreshUser } from '../redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import {selectIsLoggedIn} from '../redux/auth/autSelectors'



const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

export const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  
  const dispatch = useDispatch();
  const { isRefreshing} = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <b>Refreshing user...</b>;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            isLoggedIn ? (
              <Navigate to="/phonebook" />
            ) : (
              <PublicRoute component={<RegisterPage />} />
            )
          }
        />
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/phonebook" />
            ) : (
              <PublicRoute component={<LoginPage />} />
            )
          }
        />
       <Route
  path="/phonebook"
  element={
    isLoggedIn ? (
      <PrivateRoute component={<ContactsPage />} />
    ) : (
      <Navigate to="/login" />
    )
  }
/>
      </Route>
    </Routes>
  );
};
