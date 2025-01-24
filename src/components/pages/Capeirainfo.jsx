import capoeira5 from "../../assets/Capoeira5.jpg";

function Capoeira() {
  return (
    <div className="flex h-screen w-screen items-center justify-around flex-col bg-cover bg-center relative">
      <img
        src={capoeira5}
        alt="Imagem de fundo"
        className="absolute inset-0 w-full h-full object-cover z-[-1] opacity-20"
      />
      <h1 className="text-4xl font-bold mb-4 text-indigo-600">
        Benefícios da Capoeira: Por que Praticar?
      </h1>
      <div className="flex items-center justify-between w-auto">
        <div className="mr-10">
          <p className="w-96 border-2 border-gray-500 rounded-lg p-4 text-blue-950 text-2xl">
            A capoeira é muito mais do que uma arte marcial; é uma fusão única
            de cultura, música e movimento. Praticá-la oferece inúmeros
            benefícios, como: Melhora do condicionamento físico: Aumenta a
            força, flexibilidade e resistência. Coordenação e equilíbrio:
            Desenvolve controle corporal e reflexos rápidos.
          </p>
        </div>

        <div>
          <p className="w-96 border-2 border-gray-500 rounded-lg p-4 text-blue-950 text-2xl z-10">
            Cultura e conexão: Aproxima você da rica herança afro-brasileira.
            Socialização: Promove amizades e trabalho em equipe. Bem-estar
            mental: Reduz o estresse e aumenta a confiança. A capoeira é uma
            prática inclusiva e dinâmica que transforma corpo e mente.
            Experimente e descubra o gingado que existe em você!{" "}
          </p>
        </div>
      </div>

      <h2 className="text-2xl text-indigo-600">
        Aulas aos Sábados de manhã ás:{" "}
      </h2>
      <h3 className="text-4xl">9:00</h3>
    </div>
  );
}

export default Capoeira;
