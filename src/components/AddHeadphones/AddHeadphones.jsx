import { useContext, useEffect } from "react";
import s from "./AddHeadphones.module.scss";
import { MyContext } from "../../context/MyContext";
import { Context } from "../../context/Context";
import { useForm } from "react-hook-form";

const AddHeadphones = () => {
  const { addParfume, getParfume } = useContext(Context);

  useEffect(() => {
    getParfume();
  }, []);

  const { register, handleSubmit } = useForm();

  const onSubmit = (message) => addParfume(message);

  return (
    <>
      <section className={s.addHeadphones}>
        <h2 className={s.title}>Добавить</h2>

        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <input
            className={s.inp}
            {...register("title")}
            type="text"
            placeholder="Заголовок"
          />

          <input
            className={s.inp}
            {...register("price")}
            type="text"
            placeholder="Цена"
          />

          <button className={s.btn} type="submit">
            Создать
          </button>
        </form>
      </section>
    </>
  );
};

export default AddHeadphones;
