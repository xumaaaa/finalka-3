import './App.scss';
import Nav from './components/Nav/Nav';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Info from './pages/Info/Info';
import Footer from './components/Footer/Footer';
import Brands from './pages/Brands/Brands';
import NewUser from './pages/NewUser/NewUser';
import Sliding from './components/Sliding/Sliding';
import LogIn from './pages/LogIn/LogIn';
import NewCollection from './pages/NewCollection/NewCollection';
import ChangeCollection from './pages/ChangeCollection/ChangeCollection';
import { useContext } from 'react';
import { Context } from './context/Context';
import Collection from './pages/Collection/Collection';
import Error from './pages/Error/Error';
import ChangeHeadphones from './components/ChangeHeadphones/ChangeHeadphones';
import Register from './pages/Register/Register';
import Admin1 from './pages/Admin 2/Admin';
import Product from './pages/Product/Product';
import AddHeadphones from './components/AddHeadphones/AddHeadphones';

const App = () => {
  const { isAdmin } = useContext(Context);

  return (
    <>
      <Nav />
      <Sliding />

      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/brands'} element={<Brands />} />
        <Route path={'/collection'} element={<Collection />} />
        <Route path={'/new_user'} element={<NewUser />} />
        <Route path={'/log_in'} element={<LogIn />} />
        <Route path="*" element={<Error />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/product/:id" element={<Product />} />

        {!!isAdmin && (
          <>
            <Route path={'/admin'} element={<Home />} />
            <Route path={'/admin/create'} element={<NewCollection />} />
            <Route path={'/admin/change/:id'} element={<ChangeCollection />} />
            {/* <Route path="/admin" element={<Admin />} /> */}
            <Route path="/addHeadphones" element={<AddHeadphones />} />
            <Route
              path="/changeHeadphones/:id"
              element={<ChangeHeadphones />}
            />
          </>
        )}
      </Routes>
      <Info />
      <Footer />
    </>
  );
};

export default App;
