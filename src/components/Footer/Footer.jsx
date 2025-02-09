import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={s.footer}>
        <div className={s.container}>
          <img className={s.logo} src="/logo.svg" alt="logo" />

          <div className={s.block_1}>
            <p className={s.text}>
              Shihami is the world’s leading NFTs marketplace where you can
              discover, sell and bid NFTs and get rich
            </p>

            <div className={s.box}>
              <a href="https://www.youtube.com/" target="_blank">
                <img className={s.img} src="/youtube.svg" alt="youtube" />
              </a>
              <a href="https://x.com/" target="_blank">
                <img className={s.img} src="/twitter.svg" alt="twitter" />
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <img className={s.img} src="/facebook.svg" alt="facebook" />
              </a>
              <a href="https://www.google.com/" target="_blank">
                <img className={s.img} src="/google.svg" alt="google" />
              </a>
            </div>

          </div>

          <div className={s.block_2}>
            <h2 className={s.title}>About</h2>
            <p className={s.text}>About Shop</p>
            <p className={s.text}>Live Auctions</p>
            <p className={s.text}>Shop Blog</p>
            <p className={s.text}>Activity</p>
          </div>

          <div className={s.block_2}>
            <h2 className={s.title}>Support</h2>
            <p className={s.text}>Help & Support</p>
            <p className={s.text}>Item Details</p>
            <p className={s.text}>Author Profile</p>
            <p className={s.text}>Collection</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
