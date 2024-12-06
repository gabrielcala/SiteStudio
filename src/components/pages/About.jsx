import { Dumbbell } from "lucide-react";
import deadlifter from "../../assets/Deadlifter.jpeg";

const About = () => {
  return (
    <>
      <div
        className="w-full h-auto flex items-center justify-center gap-7 lg:py-16
            md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 flex-wrap-reverse"
      >
        <div className="lg:w-[38%] md:w-full w-full h-auto relative overflow-hidden rounded-lg">
          <img
            src={deadlifter}
            alt=""
            className="w-full lg:h-[85vh] md:h-[68vh] sm:h-[60vh] h-[55vh] object-cover"
          />
        </div>
        <div className="lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start md:text-start sm:text-start text-center">
          <h5
            className="text-lg font-medium text-gray-200 flex items-center
            lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 mb-3"
          >
            <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" />
            Sobre Nós
          </h5>
          <h1 className="lg:text-3xl md:text-3xl sm:text-2xl text-xl font-semibold text-gray-200 mb-4 leading-normal lg:pe-5 md:pe-4 sm:pe-1 pe-0">
            Construa sua melhor versão, forge um corpo forte e uma mente
            otimista.
          </h1>
          <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-500 font-medium mb-4">
            No Studio Cala Equilibrium presamos pela satisfação e bom
            atendimento dos alunos, buscando a integridade fisica e mental e
            tomando todo cuidado para trazer resultados consistentes e uma
            mudança do corpo e da mente, do estilo de vida, atividades que
            integram o ser como um todo e não como partes separadas. Venha
            experimentar essa mudança.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
