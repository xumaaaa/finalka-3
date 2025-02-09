import s from "./Error.module.scss";

const Error = () => {
  return (
    <>
      <section className={s.error}>
        <h2 className={s.title}>Страница не найдена. 404</h2>
      </section>
    </>
  );
};

export default Error;
