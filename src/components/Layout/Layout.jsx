import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import  AppBar  from '../AppBar/AppBar';
import { Container } from '../../App.styled';
import { Main, Wrapper } from './Layout.styled';
import  BgCircles  from '../BgCircles/BgCircles';

 const Layout = () => {
  return (
    <>
      <AppBar />
      <Main>
        <Container>
          <Wrapper>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </Wrapper>
        </Container>
      </Main>
      <BgCircles />
    </>
  );
};
export default Layout;