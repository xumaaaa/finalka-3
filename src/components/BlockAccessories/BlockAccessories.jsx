import { Link } from "react-router-dom";
import s from "./BlockAccessories.module.scss";
import { useContext } from "react";
import { Context } from "../../context/Context";

const BlockAccessories = ({ src, title, price, id }) => {
  const { deleteParfumeById, location, isAdmin } = useContext(Context);

  return (
    <>
      <Link
        className={s.blockAccessories}
        // to={location.pathname === "/admin" ? `` : `/product/${id}`}
      >
        <img className={s.img} src={src} alt="broken" />

        <div className={s.container}>
          <div className={s.block}>
            <h2 className={s.title}>{title}</h2>
          </div>

          <p className={s.price}>{price}</p>
        </div>

        {!!isAdmin && (
          <>
            <Link className={s.btn} to={`/changeHeadphones/${id}`}>
              Изменить
            </Link>

            <button
              className={s.btn}
              type="button"
              onClick={() => deleteParfumeById(id)}
            >
              Удалить
            </button>
          </>
        )}
      </Link>
    </>
  );
};

export default BlockAccessories;
