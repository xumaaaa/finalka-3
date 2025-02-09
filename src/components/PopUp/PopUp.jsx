import { useContext } from "react";
import { MyContext } from "../../context/MyContext";
import s from "./PopUp.module.scss";
import { useForm } from "react-hook-form";

const PopUp = () => {
  const { isPopUp, switchPopUp, sendTelegram } = useContext(MyContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => sendTelegram(data);

  return (
    <>
      <div
        className={isPopUp ? `${s.popUp} ${s.active}` : s.popUp}
        onClick={switchPopUp}
      >
        <form
          className={s.form}
          onClick={(e) => e.stopPropagation()}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className={s.title}>Оформление заказа</h2>

          <input
            {...register("name")}
            className={s.inp}
            type="text"
            placeholder="Имя"
          />

          <input
            {...register("number")}
            className={s.inp}
            type="text"
            placeholder="Номер получателя"
          />

          <button className={s.btn} type="submit">
            Отправить
          </button>
        </form>
      </div>
    </>
  );
};

export default PopUp;
