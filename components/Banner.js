import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Image from "next/image";
import slider from "../public/assets/banner1.png";
import slider2 from "../public/assets/banner-4.png";
import slider3 from "../public/assets/banner-2.png";
import slider4 from "../public/assets/banner1.png";

const Banner = () => {
  return (
    <div className=" text-4xl text-center bg-gray-400">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper">
        <SwiperSlide>
          <Image
            src={slider2}
            alt=".."
            className="w-full h-[30vh] md:h-[60vh]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={slider}
            alt=".."
            className="w-full h-[30vh] md:h-[60vh]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={slider3}
            alt=".."
            className="w-full h-[30vh] md:h-[60vh]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={slider4}
            alt=".."
            className="w-full h-[30vh] md:h-[60vh]"
          />
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Banner;