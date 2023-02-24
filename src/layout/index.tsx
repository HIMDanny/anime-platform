import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => {
  return (
    <>
      <header className="sticky top-0 z-10 w-full">
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
