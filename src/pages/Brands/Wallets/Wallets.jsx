import { useContext, useEffect } from "react";
import s from "./Wallets.module.scss";
import { Context } from "../../../context/Context";
import WalletCard from "../../../components/WalletCard/WalletCard";

const Wallets = () => {
  const { walletData, getWalletData } = useContext(Context);

  useEffect(() => {
    getWalletData();
  }, []);

  return (
    <>
      <section className={s.wallets}>
        {/* <h3 className={s.subtitle}>
          Trade with world’s most trusted and fastest wallets
        </h3> */}

        <h2 className={s.title}>Brands</h2>

        <div className={s.container}>
          {!!walletData &&
            walletData.map((el) => (
              <WalletCard
                key={el.id}
                src={el.src}
                alt={el.alt}
                text={el.text}
              />
            ))}
        </div>
      </section>
    </>
  );
};

export default Wallets;
