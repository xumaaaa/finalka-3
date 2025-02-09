import { useContext, useEffect } from "react";
import s from "./ChangeCollection.module.scss";
import { Context } from "../../context/Context";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const ChangeCollection = () => {
  const {
    ourCollectionDataById,
    getOurCollectionDataById,
    putOurCollectionDataById,
  } = useContext(Context);

  const { id } = useParams();

  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (message) => putOurCollectionDataById(message, id);

  useEffect(() => {
    getOurCollectionDataById(id);
  }, []);

  useEffect(() => {
    if (ourCollectionDataById) {
      setValue("src", ourCollectionDataById.src);
    }
  }, [ourCollectionDataById]);

  return (
    <>
      <section className={s.changeCollection}>
        <h2 className={s.title}>Change</h2>

        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <input
            className={s.inp}
            {...register("src")}
            type="text"
            placeholder="Src"
          />

          <button className={s.btn} type="submit">
            Change
          </button>
        </form>
      </section>
    </>
  );
};

export default ChangeCollection;
