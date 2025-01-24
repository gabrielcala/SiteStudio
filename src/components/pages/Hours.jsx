import capoeira5 from "../../assets/Capoeira5.jpg";

function Hours() {
  return (
    <div className="relative h-screen w-full">
      <img
        src={capoeira5}
        alt="Imagem de fundo"
        className="absolute inset-0 w-full h-full object-cover z-[-1] opacity-20"
      />
      {
        <p className="w-96 border-2 border-gray-500 rounded-lg p-4 text-gray-200">
          A capoeira é muito mais do que uma arte marcial; é uma fusão única de
          cultura, música e movimento. Praticá-la oferece inúmeros benefícios,
          como: Melhora do condicionamento físico: Aumenta a força,
          flexibilidade e resistência. Coordenação e equilíbrio: Desenvolve
          controle corporal e reflexos rápidos.
        </p>
      }
    </div>
  );
}

export default Hours;
