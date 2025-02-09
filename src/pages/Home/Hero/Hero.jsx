import { useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import { Autoplay } from 'swiper/modules';
import s from './Hero.module.scss';
import { Context } from "../../../context/Context";

const Hero = () => {

  const { HomeSwiperData, getHomeSwiperData } = useContext(Context);

  useEffect(() => {
    getHomeSwiperData();
  }, []);

  return (
    <>
      <header className={s.header}>
        <div className={s.container_1}>
          <h1 className={s.title}>
          МИРОВЫЕ БРЕНДЫ HUMA PARFUME
          </h1>

        </div>

        <div className={s.container_2}>
          <Swiper
            modules={[Autoplay]}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop
            className={s.Swiper}
           
          >
            {!!HomeSwiperData &&
              HomeSwiperData.map((el) => (
                <SwiperSlide key={el.id} >
                  <img className={s.img} src={el.src} alt={el.alt} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div> 
            <h2 className={s.subtitle}>
            Мы являемся крупнейшими официальными представителями мировых брендов парфюмерии и косметики в Узбекистане!
            </h2>
      </header>
    </>
  );
};

export default Hero;
