import s from "./NFTCard.module.scss";

const NFTCard = ({
  src,
  alt,
  subtitle,
  text,
  alignSelf,
  zIndex,
  left,
  right,
  top,
  bottom,
}) => {
  return (
    <>
      <div
        className={s.NFTCard}
        style={{
          alignSelf: alignSelf,
          zIndex: zIndex,
          left: left,
          right: right,
          top: top,
          bottom: bottom,
        }}
      >
        <img className={s.img} src={src} alt={alt} />
        <h2 className={s.subtitle}>{subtitle}</h2>
        <p className={s.text}>{text}</p>
      </div>
    </>
  );
};

export default NFTCard;
