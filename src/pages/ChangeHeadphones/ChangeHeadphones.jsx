import { useContext, useEffect } from 'react';
import s from './ChangeHeadphones.module.scss';
import { Context } from '../../context/Context';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const ChangeHeadphones = () => {
  const { ParfumeById, getParfumeById, putParfumeById } = useContext(Context);

  const { id } = useParams();

  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (message) => putParfumeById(message, id);

  useEffect(() => {
    getParfumeById(id);
  }, []);

  useEffect(() => {
    if (ParfumeById) {
      setValue('src', ParfumeById.src);
      setValue('title', ParfumeById.title);
      setValue('price', ParfumeById.price);
    }
  }, [ParfumeById]);

  return (
    <>
      <section className={s.changeHeadphones}>
        <h2 className={s.title}>Изменить</h2>

        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <input
            className={s.inp}
            {...register('src')}
            type="text"
            placeholder="Ссылка"
          />

          <input
            className={s.inp}
            {...register('title')}
            type="text"
            placeholder="Заголовок"
          />

          <input
            className={s.inp}
            {...register('price')}
            type="text"
            placeholder="Цена"
          />

          <button className={s.btn} type="submit">
            Изменить
          </button>
        </form>
      </section>
    </>
  );
};

export default ChangeHeadphones;
