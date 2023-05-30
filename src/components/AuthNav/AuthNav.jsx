import { NavContainer } from './AuthNav.styled';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <NavContainer>
      <NavLink to="/register">
        <span>Register</span>
      </NavLink>
      <NavLink to="/login">
        <span>Log In</span>
      </NavLink>
    </NavContainer>
  );
};
