import { FC, ReactNode, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "../../styles/UI.scss";
import LeftArrow from "../../svg/arrow-left.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type sliderProps = {
  items: ReactNode[];
};

export const Slider: FC<sliderProps> = ({ items }) => {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".swiper-wrapper",
        {
          opacity: 0,
        },
        { duration: 1, opacity: 1 }
      );
    },
    { dependencies: [items], scope: container }
  );

  return (
    <Swiper
      ref={container}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      modules={[Navigation]}
      slidesPerView={3}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>{item}</SwiperSlide>
      ))}
      <div className="swiper-button-prev">
        <LeftArrow />
      </div>
      <div className="swiper-button-next">
        <LeftArrow />
      </div>
    </Swiper>
  );
};
