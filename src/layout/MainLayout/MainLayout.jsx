import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { LayoutContainer } from './MainLayout.styled';
import { Loader } from 'components/Loader/Loader';

const MainLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </LayoutContainer>
  );
};

export default MainLayout;
