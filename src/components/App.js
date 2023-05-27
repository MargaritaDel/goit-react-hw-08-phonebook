import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './Routes/PrivateRoute';
import { PublicRoute } from './Routes/PublicRoute';
import { refreshUser } from '../redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';

const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/phonebook" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/phonebook" component={<LoginPage />} />
          }
        />
        <Route
          path="/phonebook"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};