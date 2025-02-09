import { Link } from 'react-router-dom';
import s from './Nav.module.scss';
import Burger from './Burger/Burger';
import { useContext } from 'react';
import { Context } from '../../context/Context';

const Nav = () => {
  const { switchBurger, isAdmin, logOut } = useContext(Context);

  return (
    <>
      <nav className={s.nav}>
        <Burger />

        <Link to={'/'}>
          <img className={s.img} src="/logo.svg" alt="logo" />
        </Link>

        <div className={s.block_1}>
          <Link className={s.link} to={'/'}>
            EXPLORE
          </Link>
          <Link className={s.link} to={'/brands'}>
            Brands
          </Link>
          <Link className={s.link} to={'/collection'}>
            COLLECTION
          </Link>

        </div>

        <div className={s.block_2}>
          {!!isAdmin ? (
            <>
              <div className={s.box} onClick={logOut}>
               

                <button className={s.btn} type="button">
                  Log out
                </button>

                
              </div>

                <img className={s.img_user} src="/admin.png" alt="user" />
            </>
          ) : (
            <Link to={'/log_in'} className={s.box}>
              

              <button className={s.btn} type="button">
                Log In
              </button>

              
            </Link>
          )}
        </div>

        <div className={s.burger} onClick={() => switchBurger()}>
          <span className={s.line}></span>
          <span className={s.line}></span>
          <span className={s.line}></span>
        </div>
      </nav>
    </>
  );
};

export default Nav;
