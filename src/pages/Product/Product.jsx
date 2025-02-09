import { useParams } from "react-router-dom";
import s from "./Product.module.scss";
import { useContext, useEffect } from "react";
import { MyContext } from "../../context/MyContext";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import BlockAccessories from "../../components/BlockAccessories/BlockAccessories";
// import PopUp from "../../components/PopUp/PopUp";

const Product = () => {
  const { parfumeById, getParfumeById, switchPopUp } =
    useContext(MyContext);

  const { id } = useParams();

  useEffect(() => {
    getParfumeById(id);
  }, []);

  return (
    <>
      <PopUp />

      <section className={s.product}>
        <div className={s.container}>
          {!!parfumeById && (
            <BlockAccessories
              key={parfumeById.id}
              id={parfumeById.id}
              src={parfumeById.src}
              title={parfumeById.title}
              price={parfumeById.price}
            />
          )}


          <ProductInfo />
        </div>

        <button onClick={switchPopUp} className={s.btn} type="button">
          Заказать
        </button>
      </section>
    </>
  );
};

export default Product;
