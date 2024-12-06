import { Swiper, SwiperSlide } from "swiper/react";

import dois from "../../assets/post1.jpeg";
import man from "../../assets/man-0.jpg";
import taichi from "../../assets/taichiyang.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const Hero = () => {
  const swiperData = [
    {
      id: 1,
      bgImg: `${man}`,
      slogan: "Mantenha o seu corpo",
      title: "Queimando",
      desc: "Está pronto/a para queimar as calorias e se divertir?",
    },
    {
      id: 2,
      bgImg: `${dois}`,
      slogan: "Acredite em si mesmo/a",
      title: "Voçê Pode!!!",
      desc: "Estamos aqui para que consiga atingir seus objetivos.",
    },
    {
      id: 3,
      bgImg: `${taichi}`,
      slogan: "Evolua seu corpo e mente",
      title: "Aumente sua energia",
      desc: "Torne sua mente mais estavel e seu corpo forte!",
    },
  ];
  return (
    <>
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
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="h-[80vh] relative w-full bg-indigo-600"
      >
        {swiperData.map((data) => (
          <SwiperSlide
            key={data.id}
            className=" h-full w-full"
            style={{
              backgroundImage: `url(${data.bgImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="w-full h-full bg-black/80 absolute top-0 left-0 -z-10">
              {" "}
            </div>
            <div className="w-full h-full flex items-center justify-center flex-col z-10">
              <h5 className="lg:text-4xl md:text-3xl sm:text-2xl text-indigo-500 font-semibold uppercase">
                {data.slogan}
              </h5>
              <h1 className="lg:text-8xl md:text-7xl sm:text-5xl text-white mb-4 uppercase font-bold">
                {data.title}
              </h1>
              <p className="lg:text-lg md:text-base sm:text-base text-gray-600 font-medium mb-6 text-center">
                {data.desc}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Hero;
