import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import {ButtonLogOut, GreetingUser, MenuUser }  from "./UserMenu.styled";


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <MenuUser >
      <GreetingUser >Welcome, {user.name}</GreetingUser>
      <ButtonLogOut type="button" onClick={() => dispatch(logOut())}>
        Logout
      </ButtonLogOut>
    </MenuUser>
  );
};