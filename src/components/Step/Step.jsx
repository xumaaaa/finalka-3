import s from "./Step.module.scss";

const Step = ({ src, alt, text }) => {
  return (
    <>
      <div className={s.block}>
        <div className={s.box}>
          <img className={s.img} src={src} alt={alt} />
        </div>

        <p className={s.text}>{text}</p>
      </div>
    </>
  );
};

export default Step;
