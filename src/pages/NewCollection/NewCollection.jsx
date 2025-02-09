import { useContext, useEffect } from "react";
import s from "./NewCollection.module.scss";
import { Context } from "../../context/Context";
import { useForm } from "react-hook-form";

const NewCollection = () => {
  const { addOurCollectionData, getOurCollectionData } = useContext(Context);

  useEffect(() => {
    getOurCollectionData();
  }, []);

  const { register, handleSubmit } = useForm();

  const onSubmit = (message) => addOurCollectionData(message);

  return (
    <>
      <section className={s.newCollection}>
        <h2 className={s.title}>Create</h2>

        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <input
            className={s.inp}
            {...register("src")}
            type="text"
            placeholder="Src"
          />

          <button className={s.btn} type="submit">
            Create
          </button>
        </form>
      </section>
    </>
  );
};

export default NewCollection;
