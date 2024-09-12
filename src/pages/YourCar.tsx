import { CaretRightIcon } from "@radix-ui/react-icons";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { useFormContext } from "../components/Form/context/useFormContext";
import { Header } from "../components/Header";
import { SliderBrands } from "../components/SliderBrands";

import yourCars from '../assets/images/seu-carro/cars.svg'
import yourCar1 from '../assets/images/seu-carro/1.svg'
import yourCar2 from '../assets/images/seu-carro/2.svg'
import { Helmet } from "react-helmet-async";

export function YourCar() {
  const { formRef } = useFormContext();

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="font-inter w-full h-full bg-white">
      <Helmet>
        <title>Carro Zero ou Seminovo | Encontre o Melhor Negócio</title>
        <meta
          name="description"
          content="Descubra o melhor negócio para carros zero ou seminovos. Nós conectamos você às concessionárias com as melhores ofertas e vantagens exclusivas."
        />
        <meta
          name="keywords"
          content="carro zero, seminovos, comprar carro, ofertas de carros, concessionárias, melhores negócios de carros"
        />
        <meta name="author" content="Sua Empresa" />

        <meta
          property="og:title"
          content="Carro Zero ou Seminovo | Melhor Negócio para Você"
        />
        <meta
          property="og:description"
          content="Encontramos o carro ideal para você, seja zero ou seminovo. Conecte-se com as melhores ofertas e condições de compra."
        />
        <meta property="og:image" content={yourCars} />
        <meta property="og:url" content="https://www.chavenocontato.com/seu-carro" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Carro Zero ou Seminovo | Encontre o Melhor Negócio"
        />
        <meta
          name="twitter:description"
          content="Ofertas imperdíveis de carros zero ou seminovos. Encontre o carro ideal com as melhores condições."
        />
        <meta name="twitter:image" content={yourCars} />
      </Helmet>
      <Header />
      <div className="max-w-full xl:max-w-[1440px] mx-auto h-full relative pt-6">
        <h1 className="text-2xl text-center leading-none p-6">
          <span className="font-bold">Carro Zero ou Seminovo: </span>Encontramos
          o negócio perfeito para você
        </h1>

        <img
          className="block xl:hidden"
          src={yourCars}
          alt="Carro Zero ou Seminovo: Encontramos
          o negócio perfeito para você"
        />

        <div className="flex flex-col gap-6 mt-6">
          <div className="px-6">
            <div className="xl:flex xl:items-center xl:justify-center">
              <div className="hidden xl:block w-1/2">
                <img className="block px-6" src={yourCar1} alt="Seminovos" />
              </div>
              <div className="xl:flex-1">
                <h2 className="text-2xl font-bold mb-2">Seminovos</h2>
                <p className="text-xl">
                  Encontrar um seminovo confiável e com bom preço não precisa
                  ser complicado. Nós fazemos isso por você! Encaminhamos seu
                  contato para a concessionária mais próximaque ofereça o melhor
                  custo-benefício. Informe suas preferências e deixe o resto com
                  a gente.
                </p>
                <button
                  className="bg-blue text-white w-[282px] h-12 flex items-center justify-center mt-[73px] rounded-[20px] font-bold text-xl hover:bg-white hover:text-blue transition-colors"
                  onClick={handleScrollToForm}
                >
                  QUERO COMPRAR <CaretRightIcon className="ml-3 w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
          <div className="py-6 px-6 bg-blue text-white xl:bg-white xl:text-black">
            <div className="xl:flex xl:items-center xl:justify-center">
              <div className="xl:flex-1">
                <h2 className="text-2xl font-bold mb-2">Carro Zero</h2>
                <p className="text-xl">
                  Quer garantir que está fazendo o melhor negócio? Deixe que
                  encontramos a melhor concessionária para você. Buscamos as
                  melhores ofertas e negociamos todas as vantagens possíveis
                  para que você tenha uma experiência de compra excepcional e
                  tenha a melhor negociação.
                </p>
                <button
                  className="bg-black text-white w-[282px] h-12 flex items-center justify-center mt-[73px] rounded-[20px] font-bold text-xl hover:bg-white hover:text-blue transition-colors"
                  onClick={handleScrollToForm}
                >
                  QUERO COMPRAR <CaretRightIcon className="ml-3 w-6 h-6" />
                </button>
              </div>
              <div className="hidden xl:block w-1/2">
                <img className="block px-6" src={yourCar2} alt="Carro Zero" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <SliderBrands />
        <Form />
      </div>
      <Footer />
    </div>
  );
}