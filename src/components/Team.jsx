/* eslint-disable react/no-unescaped-entities */
import { forwardRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

const peoples = [
  {
    name: "Salih Arya Gumilang",
    image: "/assets/arya.png",
    role: "Mobile Developer",
  },
  {
    name: "Vincentius Kennedy W",
    image: "/assets/vincent.png",
    role: "Mobile Developer",
  },
  {
    name: "Zikri Ahmad Suanda",
    image: "/assets/zikri.png",
    role: "Cloud Computing",
  },
  {
    name: "Iip Sudrajat",
    image: "/assets/iip.png",
    role: "Cloud Computing",
  },
  {
    name: "Ahmad Nur Ihsanudin",
    image: "/assets/ahsan.png",
    role: "Machine Learning",
  },
  {
    name: "Hajjar Ayu Cahyani K",
    image: "/assets/ayu.png",
    role: "Machine Learning",
  },
  {
    name: "Elfira Ratna Syaharani",
    image: "/assets/elfira.png",
    role: "Maching Learning",
  },
];

const Team = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className="relative flex flex-col gap-12 my-24 md:my-44 lg:my-44">
        <h1 className="font-bold text-5xl text-center" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
          Let's Meet Our Team
        </h1>
        <div className="relative flex justify-center ">
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              400: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className={`mySwiper snap-center pt-24 2xs:pl-20 xs:pl-32 sm:pl-40 md:pl-5  lg:pl-20 xl:pl-20  flex justify-center`}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {peoples.map((people, index) => (
              <SwiperSlide key={index} className={`snap-center flex flex-col min-w-fit transition ease-out duration-500`}>
                <div className="relative flex flex-col items-center bg-secondary 2xs:h-52 2xs:w-60 xs:h-52 xs:w-60 sm:h-60 sm:w-72  md:h-48 md:w-56 lg:h-32 lg:w-36 xl:h-32 xl:w-40 rounded-xl">
                  <img src={people.image} alt="" className="2xs:h-72 xs:h-72 sm:h-64 sm:h-80 md:h-64 lg:h-48  xl:h-52  absolute -top-20 object-cover" />
                </div>
                <div className="flex flex-col gap-5">
                  <h3 className="font-semibold xs:text-sm sm:text-sm md:text-md lg:text-md xl:text-md">{people.name}</h3>
                  <p className="xs:text-sm sm:text-sm md:text-md xl:text-md">{people.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
});

Team.displayName = "Team";

export default Team;
