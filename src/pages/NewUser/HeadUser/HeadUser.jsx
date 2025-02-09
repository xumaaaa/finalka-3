import s from "./HeadUser.module.scss";

const HeadUser = () => {
  return (
    <>
      <section className={s.headUser}>
        <p className={s.text}>431 followers | 13 following</p>
      </section>
    </>
  );
};

export default HeadUser;
