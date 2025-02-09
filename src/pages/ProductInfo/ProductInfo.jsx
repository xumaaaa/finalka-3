import { useContext } from "react";
import s from "./ProductInfo.module.scss";
import { MyContext } from "../../context/MyContext";

const ProductInfo = () => {
  const { productInfoData } = useContext(MyContext);

  return (
    <>
      <div className={s.productInfo}>
        <h2 className={s.title}>Описание и характеристики</h2>

        <div className={s.container}>
          {!!productInfoData &&
            productInfoData.map((el) => (
              <p className={s.text} key={el.id}>
                {el.text}
              </p>
            ))}
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
