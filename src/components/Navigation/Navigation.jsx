import { useAuth } from 'hooks/useAuth';
import { Nav, NavPages } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <NavPages to="/">
        <span>Home</span>
      </NavPages>
      {isLoggedIn && (
        <NavPages to="/phonebook">
          <span>Phonebook</span>
        </NavPages>
      )}
    </Nav>
  );
};
