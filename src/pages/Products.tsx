
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Header } from "../components/Header";
import { SliderBrands } from "../components/SliderBrands";
import { ProductCard } from "../components/ProductCard";

import productCarImg from '../assets/images/productCarImg.svg'

import products1 from '../assets/images/produtos/1.svg'
import products2 from '../assets/images/produtos/2.svg'
import products3 from '../assets/images/produtos/3.svg'
import { Helmet } from "react-helmet-async";


export function Products() {
  return (
    <div className="font-inter w-full h-full">
      <Helmet>
        <title>
          Produtos para Concessionárias | Leads de Carros Seminovos e Novos
        </title>
        <meta
          name="description"
          content="Oferecemos leads qualificados para concessionárias, com foco em carros seminovos, novos e também na compra de veículos. Aumente suas vendas com nossos produtos."
        />
        <meta
          name="keywords"
          content="leads de carros, concessionárias, carros seminovos, carros novos, compra de carros, leads automotivos"
        />
        <meta name="author" content="Sua Empresa" />

        <meta
          property="og:title"
          content="Produtos para Concessionárias | Leads de Carros"
        />
        <meta
          property="og:description"
          content="Conheça nossos produtos voltados para concessionárias, fornecendo leads qualificados de carros seminovos, novos e de pessoas interessadas em vender seus veículos."
        />
        <meta property="og:image" content={productCarImg} />
        <meta property="og:url" content="https://www.chavenocontato.com/produtos" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Produtos para Concessionárias | Leads de Carros"
        />
        <meta
          name="twitter:description"
          content="Leads de carros seminovos e novos para concessionárias. Aumente suas vendas com leads qualificados."
        />
        <meta name="twitter:image" content={productCarImg} />
      </Helmet>
      <Header />
      <div className="w-full h-[600px] xl:h-[500px] relative">
        <div className="w-full bg-blue h-[75%] absolute z-0" />
        <div className="max-w-full xl:max-w-[1440px] mx-auto h-full relative">
          <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center h-full xl:gap-20">
            <div className="text-white font-days_one text-center xl:mt-20">
              <h1 className="text-[59px] xl:text-[69px] leading-none">
                Nossos Produtos
              </h1>
              <div className="mt-4">
                <h2 className="text-[22px] xl:text-[32px]">PARA</h2>
                <h2 className="text-[28px] xl:text-[38px]">Concessionárias</h2>
              </div>
            </div>
            <img
              src={productCarImg}
              alt="Nossos Produtos para Concessionárias"
              className="object-cover w-[369px] xl:w-[500px] xl:mt-20 py-5"
            />
          </div>
        </div>
      </div>
      <div className="bg-black">
        <SliderBrands />
      </div>
      <div className="max-w-full xl:max-w-[1440px] mx-auto h-full relative bg-white">
        <div className="flex items-center xl:items-start justify-between py-10 flex-col xl:flex-row">
          <ProductCard
            imgUrl={products1}
            text="Oferecemos leads de carros seminovos, sejam populares ou de
            alto padrão, conforme o perfil da sua concessionária. Esses
            leads estão em busca do melhor custo-benefício, sem
            necessariamente especificar uma marca ou modelo, permitindo
            que os vendedores apresentem ofertas interessantes e
            diversificadas."
            align="top"
          />

          <ProductCard
            imgUrl={products2}
            text="Disponibilizamos leads de carros novos, direcionados para 
            concessionárias que vendem veículos zero quilômetro. Esses leads são
            específicos para o modelo de carro em negociação."
            align="left"
          />

          <ProductCard
            imgUrl={products3}
            text="Fornecemos leads de pessoas interessadas em vender seus carros,
            ajudando sua concessionária a aumentar o estoque de seminovos."
            align="right"
          />
        </div>
      </div>
      <div className="bg-black">
        <Form />
      </div>
      <Footer />
    </div>
  );
}