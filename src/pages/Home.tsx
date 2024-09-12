import { Form } from "../components/Form"
import { Advantages } from "../components/Advantages"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { SliderBrands } from "../components/SliderBrands"
import { SliderHome } from "../components/SliderHome"
import { cn } from "../utils/cn"

import { Helmet } from "react-helmet-async";

export function Home() {
  const heroClass = cn(
    'relative w-full h-full z-10 xl:max-w-[690px] overflow-hidden xl:bg-none',
    "bg-[url('./assets/images/bg-hero-mobile.svg')] bg-no-repeat",
    'sm:bg-100% sm:bg-bottom',
    'max-[640px]:bg-center max-[640px]:bg-100%'
  )

  const blueDivStyle = cn(
    'bg-blue h-full w-[40%] rounded-tr-[48px] absolute xl:top-0 right-0 z-0 xl:block',
    'sm:hidden',
    'max-[640px]:bottom-0 max-[640px]:w-full max-[640px]:h-[200px] max-[640px]:rounded-tr-[0]'
  )

  return (
    <div className="bg-black font-inter">
      <Header />
      <Helmet>
        <title>
          Chave no Contato | Conectando Compradores e Concessionárias
        </title>
        <meta
          name="description"
          content="Conectamos compradores e concessionárias através de uma solução programática que identifica o interesse real de compra, proporcionando a melhor experiência de venda e compra de carros."
        />
        <meta
          name="keywords"
          content="comprar carros, vender carros, concessionárias, marketing programático, compra de carros, venda de carros"
        />
        <meta name="robots" content="index,follow" />
        <meta
          property="og:title"
          content="Chave no Contato | Conectando Compradores e Concessionárias"
        />
        <meta
          property="og:description"
          content="Solução que conecta compradores e concessionárias, facilitando o processo de compra e venda de automóveis."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.chavenocontato.com/" />
        <meta property="og:image" content="URL_DA_IMAGEM_COMPARTILHAVEL" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Chave no Contato | Conectando Compradores e Concessionárias"
        />
        <meta
          name="twitter:description"
          content="Solução que conecta compradores e concessionárias, facilitando o processo de compra e venda de automóveis."
        />
        <meta name="twitter:image" content="URL_DA_IMAGEM_COMPARTILHAVEL" />
        <link rel="canonical" href="https://www.chavenocontato.com/" />
      </Helmet>
      <div className="bg-black">
        <div className="w-full h-[575px] sm:h-screen bg-white rounded-t-[48px] relative">
          <div className="max-w-full xl:max-w-[1440px] mx-auto h-full flex xl:flex-row flex-col justify-between items-center xl:px-4">
            <div className="z-10">
              <div>
                <h1 className="font-days_one xl:w-[563px] text-[66px] xl:text-[96px] leading-[63px] xl:leading-[83px] text-center mt-[52px] xl:mt-auto">
                  A <span className="text-blue">chave</span> é
                  <br className="xl:hidden" /> o contato
                </h1>
              </div>
              <div>
                <h2 className="w-[563px] text-[32px] text-center mt-[21px] hidden xl:block ">
                  Juntamos quem quer{" "}
                  <strong className="text-blue">comprar</strong> com quem quer{" "}
                  <strong className="text-blue">vender.</strong>
                </h2>
              </div>
            </div>
            <div className={heroClass}>
              <div className="relative top-1/2 -translate-y-1/2 w-full text-center">
                <SliderHome />
                <div className="bg-blue flex min-w-[320px]:mt-[160px] sm:mt-0">
                  <h2 className="w-full text-center mt-[21px] xl:hidden text-white text-lg">
                    Juntamos quem quer <strong>comprar</strong> com
                    <br />
                    quem quer <strong>vender.</strong>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className={blueDivStyle}></div>
        </div>
      </div>
      <SliderBrands />
      <div className="text-center pt-4 pb-0 xl:py-14 bg-white">
        <h3 className="text-lg xl:text-[32px] text-black font-bold leading-[130%]">
          Como <strong className="text-blue">Conectamos</strong> Compradores
          <br className="block xl:hidden" />e Concessionárias
        </h3>
      </div>
      <Advantages />
      <Form />
      <Footer />
    </div>
  );
}
