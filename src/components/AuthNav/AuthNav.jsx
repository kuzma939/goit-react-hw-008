import { AuthList, AuthItem } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <AuthList>
      <li>
        <AuthItem to={'/register'}>Sign up</AuthItem>
      </li>
      <li>
        <AuthItem to={'/login'}>Sign in</AuthItem>
      </li>
    </AuthList>
  );
};
export default AuthNav;