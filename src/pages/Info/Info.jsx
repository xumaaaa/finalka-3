import { useContext } from "react";
import s from "./Info.module.scss";
import { Context } from "../../context/Context";

const Info = () => {
  const { sendTelegram, message } = useContext(Context);

  return (
    <>
      <section className={s.info}>
        <h2 className={s.title}>Готовы сделать заказ?</h2>

        <form
          className={s.container}
          onSubmit={(e) => sendTelegram(message.message, e)}
        >
          <input
            className={s.inpText}
            onChange={(e) => (message.message = e.target.value)}
            type="text"
            placeholder="+998 (00) 000 00 00"
          />

          <button className={s.btn} type="submit">
            <img className={s.img} src="/arrow_right.svg" alt="arrow_right" />
          </button>
        </form>
      </section>
    </>
  );
};

export default Info;
