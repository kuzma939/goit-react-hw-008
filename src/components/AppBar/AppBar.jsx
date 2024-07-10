import { UserMenu } from '../UserMenu/UserMenu';
import  AuthNav  from '../AuthNav/AuthNav';
import { Navigation } from '../Navigation/Navigation';
import { Header } from './AppBar.styled';
import { useAuth } from '../../hooks/useAuth';
import { Container } from '..//../App.styled';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { MobileMenu } from '../MobileMenu/MobileMenu';

 const AppBar = () => {
  const { isLoggedIn } = useAuth();
  const isPageWide = useMediaQuery('(min-width: 768px)');

  return (
    <Container>
      <Header>
        {!isPageWide && isLoggedIn && <MobileMenu />}
        {(isPageWide && <Navigation />) || (!isLoggedIn && <Navigation />)}
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
    </Container>
  );
};
export default AppBar;