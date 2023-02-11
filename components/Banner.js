import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Image from "next/image";
import slider from "../public/assets/slide5.jpg";
import slider2 from "../public/assets/slide6.jpg";
import slider3 from "../public/assets/slide5.jpg";
import slider4 from "../public/assets/slide8.jpg";

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
            src={slider}
            alt=".."
            className="w-full h-[30vh] md:h-[70vh] object-fit object-center "
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={slider2}
            alt=".."
            className="w-full h-[30vh] md:h-[70vh] object-fit object-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={slider3}
            alt=".."
            className="w-full h-[30vh] md:h-[70vh] object-fit object-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={slider4}
            alt=".."
            className="w-full h-[30vh] md:h-[70vh] object-fit object-center"
          />
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Banner;