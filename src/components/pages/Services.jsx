import { Dumbbell } from "lucide-react";
import dois from "../../assets/post1.jpeg";
import capoeira from "../../assets/capoeira.png";
import taichi from "../../assets/taichiyang.jpg";
import yoga from "../../assets/yoga2.jpg";
import medita from "../../assets/medita.jpg";
import pilates from "../../assets/pilates.jpg";

const Services = () => {
  const services = [
    {
      id: 1,
      serviceImg: `${dois}`,
      title: "Funcional",
      desc: "Aptidão cardio vascular, perda de peso, resistência.",
      link: "#services",
    },
    {
      id: 2,
      serviceImg: `${yoga}`,
      title: "Yoga",
      desc: "Equilibrio, redução do stress, força muscular.",
      link: "#services",
    },
    {
      id: 3,
      serviceImg: `${taichi}`,
      title: "Tai chi",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },
    {
      id: 4,
      serviceImg: `${capoeira}`,
      title: "Capoeira",
      desc: "Arte marcial, dança, musica, cultura, diversão .",
      link: "#services",
    },
    {
      id: 5,
      serviceImg: `${medita}`,
      title: "Meditação",
      desc: "Aprenda a entender a si mesmo e torne sua mente tranquila.",
      link: "#services",
    },
    {
      id: 6,
      serviceImg: `${pilates}`,
      title: "Pilates",
      desc: "Flexivel, resistente, saudavel, tenha todos esses beneficios.",
      link: "#services",
    },
  ];

  return (
    <>
      <div
        className="w-full h-auto flex items-center justify-center flex-col lg:py-16
            md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 "
      >
        <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
          <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" />
          Nossos Serviços
        </h6>
        <div
          className="w-full h-auto flex items-center justify-center gap-x-4 gap-y-5 
        flex-wrap mb-10"
        >
          {/* Lets display it throutht loop*/}
          {services.map((sdata) => (
            <div
              key={sdata.id}
              className="lg:w-[28%] md:w-[48%] sm:w-[48%] w-full lg:h-[50vh] md:h-[53vh] sm:h-[58vh] h-[60vh] rounded-xl bg-black relative overflow-hidden cursor-pointer z-10 hover:-translater-y-2 ease-out duration-500"
              style={{
                backgroundImage: `url(${sdata.serviceImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="w-full h-full bg-black/70 absolute top-0 left-0 -z-10"></div>
              <div className="w-full h-full flex items-center justify-center flex-col text-white p-4 z-50">
                <h1 className="text-xl text-gray-100 font-semibold text-center mb-4">
                  {sdata.title}
                </h1>
                <p className="text-base text-gray-400 font-normal text-center mb-4">
                  {sdata.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
