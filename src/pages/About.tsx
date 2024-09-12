import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { useFormContext } from "../components/Form/context/useFormContext";
import { Header } from "../components/Header";
import { SliderBrands } from "../components/SliderBrands";

import man from '../assets/images/sobre-nos/man.svg'
import { Helmet } from "react-helmet-async";

export function About() {
  const { formRef } = useFormContext();

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="font-inter w-full h-full bg-white">
      <Helmet>
        <title>Sobre Nós | A Chave no Contato para Negócios de Sucesso</title>
        <meta
          name="description"
          content="Saiba mais sobre nossa missão de conectar concessionárias e compradores, proporcionando a melhor experiência para todos. Investimos em estratégias assertivas para gerar resultados de alta performance."
        />
        <meta
          name="keywords"
          content="sobre nós, concessionárias, negócios de carros, compra e venda de carros, experiências de compra, estratégias digitais"
        />
        <meta name="author" content="Sua Empresa" />

        <meta property="og:title" content="Sobre Nós | A Chave no Contato" />
        <meta
          property="og:description"
          content="Proporcionamos excelentes experiências tanto para quem compra quanto para quem vende, conectando o carro ideal ao comprador certo."
        />
        <meta property="og:image" content={man} />
        <meta property="og:url" content="https://www.chavenocontato.com/sobre-nos" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sobre Nós | A Chave no Contato" />
        <meta
          name="twitter:description"
          content="Conectamos concessionárias e compradores, proporcionando a melhor experiência e gerando bons negócios."
        />
        <meta name="twitter:image" content={man} />
      </Helmet>
      <Header />
      <section className="overflow-hidden bg-white sm:grid xl:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
            <h2 className="font-days_one text-3xl sm:text-4xl">
              A chave no contato - <br /> Sobre nós
            </h2>

            <div className="lg:py-4">
              <article className="space-y-4">
                <p>
                  A chave do negócio é o contato, e a chave no contato é o
                  resultado. Nossa missão é proporcionar excelentes experiências
                  tanto para quem compra quanto para quem vende. Acreditamos que
                  para cada carro em uma concessionária, existe o comprador
                  ideal. Nosso trabalho é tornar isso uma realidade de maneira
                  profissional, gerando bons negócios para todos os envolvidos.
                </p>

                <p>
                  Investimos nos melhores recursos para atingir nossos objetivos
                  com alta performance, utilizando mídias digitais para
                  alavancar os negócios de nossos parceiros e realizar o sonho
                  dos motoristas.
                </p>

                <p>
                  Com precisão e no momento certo, utilizando a estratégia mais
                  assertiva, nós encontramos a chave no contato.
                </p>

                <button
                  className="bg-blue text-white w-[282px] h-12 flex items-center justify-center mt-[73px] rounded-[20px] font-bold  hover:bg-white hover:text-blue transition-colors text-base"
                  onClick={handleScrollToForm}
                >
                  Vamos tomar um café?
                </button>
              </article>
            </div>
          </div>
        </div>

        <img
          alt="A chave no contato"
          src={man}
          className="h-56 w-full object-cover sm:h-full sm:max-h-[765px]"
        />
      </section>
      <div className="bg-black">
        <SliderBrands />
        <Form />
      </div>
      <Footer />
    </div>
  );
}