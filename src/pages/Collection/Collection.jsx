import { useContext, useEffect } from "react";
import s from "./Collection.module.scss";
import { Context } from "../../context/Context";
import BlockAccessories from "../../components/BlockAccessories/BlockAccessories";
import { Link } from "react-router-dom";

const Collection = ({ title }) => {
  const { parfume, getParfume, isAdmin } = useContext(Context);

  useEffect(() => {
    getParfume();
  }, []);

  return (
    <>
      <section className={s.accessories}>

         {!!isAdmin && (
        <section className={s.admin}>
          <Link className={s.link} to={"/AddHeadphones"}>
            Добавить
          </Link>
  
        </section>
                )}
        <h2 className={s.title}>{title}</h2>

        <div className={s.container}>
          {!!parfume &&
            parfume.map((el) => (
              <BlockAccessories
                key={el.id}
                id={el.id}
                src={el.src}
                title={el.title}
                price={el.price}
              />
            ))}
        </div>
      </section>
    </>
  );
};

export default Collection;
