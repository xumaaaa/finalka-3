import { Link } from 'react-router-dom';
import s from './Burger.module.scss';
import { useContext } from 'react';
import { Context } from '../../../context/Context';

const Burger = () => {
  const { switchBurger, burger, isAdmin, logOut } = useContext(Context);

  return (
    <>
      <aside
        className={burger ? `${s.aside} ${s.active}` : s.aside}
        onClick={() => switchBurger()}
      >
        <div className={s.container} onClick={(e) => e.stopPropagation()}>
          <div className={s.close} onClick={() => switchBurger()}>
            <span className={s.line}></span>
            <span className={s.line}></span>
          </div>

          <div className={s.block_1}>
            <Link className={s.link} to={'/'}>
              EXPLORE
            </Link>
            <Link className={s.link} to={'/brands'}>
              BRANDS
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

                <img className={s.img_user} src="/user.svg" alt="user" />
              </>
            ) : (
              <Link to={'/log_in'} className={s.box}>
                <button className={s.btn} type="button">
                  Log In
                </button>
              </Link>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Burger;
