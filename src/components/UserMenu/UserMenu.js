import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import {ButtonLogOut, GreetingUser }  from "./UserMenu.styled";


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div >
      <GreetingUser >Welcome, {user.name}</GreetingUser>
      <ButtonLogOut type="button" onClick={() => dispatch(logOut())}>
        Logout
      </ButtonLogOut>
    </div>
  );
};