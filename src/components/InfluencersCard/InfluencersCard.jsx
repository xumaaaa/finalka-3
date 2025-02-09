import s from "./InfluencersCard.module.scss";

const InfluencersCard = ({
  img_1,
  img_2,
  user_img,
  title,
  check_img,
  text,
}) => {
  return (
    <>
      <div className={s.container}>
        <div className={s.block_1}>
          <img className={s.img_1} src={img_1} alt="broken" />
          <img className={s.img_2} src={img_2} alt="broken" />
          <img className={s.user_img} src={user_img} alt="broken" />
        </div>

        <div className={s.block_2}>
          <div className={s.box}>
            <h2 className={s.title}>{title}</h2>
            <img className={s.check_img} src={check_img} alt="broken" />
          </div>

          <p className={s.text}>{text}</p>
        </div>
      </div>
    </>
  );
};

export default InfluencersCard;
