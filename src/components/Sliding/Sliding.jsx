import s from "./Sliding.module.scss";

const Sliding = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={s.sliding} onClick={scrollToTop}>
        <img className={s.img} src="/arrow_top.svg" alt="arrow_top" />
      </div>
    </>
  );
};

export default Sliding;
