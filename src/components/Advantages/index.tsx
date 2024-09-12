import renegade from '../../assets/images/renegade.png'
import kwid from '../../assets/images/kwid.png'
import toro from '../../assets/images/toro.png'
import sedan from '../../assets/images/sedan.svg'
import suv from '../../assets/images/suv.svg'
import compact from '../../assets/images/compact.svg'

import { CaretRightIcon } from '@radix-ui/react-icons'
import { useFormContext } from '../Form/context/useFormContext';

export function Advantages() {
  const { formRef } = useFormContext();

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="hidden xl:flex flex-col max-w-full mx-auto">
        <div className="flex">
          <div className="w-1/2 h-[560px] bg-white">
            <img
              className="w-full h-[560px] object-cover"
              src={renegade}
              alt="Encontramos Pessoas no Momento de Real Interesse"
            />
          </div>
          <div className="w-1/2 h-[560px] bg-black flex justify-center">
            <div className="w-[530px] flex flex-col justify-center">
              <p className="text-blue font-bold text-2xl">01</p>
              <h3 className="text-white mt-[32px] mb-[14px] font-bold text-[34px] leading-[41px]">
                Encontramos Pessoas no Momento de Real Interesse
              </h3>
              <p className="text-white text-xl leading-6">
                Utilizando tecnologia programática e nossa expertise em
                marketing, identificamos e entendemos o comportamento dos
                usuários na internet. Apresentamos a solução da{" "}
                <strong>Chave no Contato</strong> para aqueles que estão
                dispostos a comprar um carro novo, ajudando-os a encontrar o
                melhor custo-benefício na sua região.
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
        <div className="flex">
          <div className="w-1/2 h-[560px] bg-blue flex justify-center">
            <div className="w-[530px] flex flex-col justify-center">
              <p className="text-white font-bold text-2xl">02</p>
              <h3 className="text-white mt-[32px] mb-[14px] font-bold text-[34px] leading-[41px]">
                Concessionárias Parceiras prontas para dar o melhor atendimento
              </h3>
              <p className="text-white text-xl leading-6">
                Após identificar a demanda, encaminhamos para nossas
                concessionárias parceiras, para que possam proporcionar um
                atendimento de excelência e realizar a venda do automóvel,
                satisfazendo plenamente o cliente.
              </p>
              <button
                className="bg-black text-white w-[282px] h-12 flex items-center justify-center mt-[73px] rounded-[20px] font-bold text-xl hover:bg-white hover:text-black transition-colors"
                onClick={handleScrollToForm}
              >
                QUERO VENDER MAIS <CaretRightIcon className="ml-3 w-6 h-6" />
              </button>
            </div>
          </div>
          <div className="w-1/2 h-[560px] bg-black">
            <img
              className="w-full h-[560px] object-cover"
              src={kwid}
              alt="Concessionárias Parceiras prontas para dar o melhor atendimento"
            />
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2 h-[560px] bg-white">
            <img
              className="w-full h-[560px] object-cover"
              src={toro}
              alt="Foco na Qualidade de Atendimento e Vendas"
            />
          </div>
          <div className="w-1/2 h-[560px] bg-black flex justify-center">
            <div className="w-[530px] flex flex-col justify-center">
              <p className="text-blue font-bold text-2xl">03</p>
              <h3 className="text-white mt-[32px] mb-[14px] font-bold text-[34px] leading-[41px]">
                Foco na Qualidade de Atendimento e Vendas
              </h3>
              <p className="text-white text-xl leading-6">
                Nosso objetivo é facilitar o processo de compra para os
                compradores e ajudar as concessionárias a encontrar novos
                clientes. Trabalharmos para gerar uma experiência positiva e
                satisfatória para todos os envolvidos, focando na qualidade do
                atendimento e dos leads.
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
      </div>

      <div className="flex xl:hidden flex-col max-w-full mx-auto p-4 pb-[60px] bg-white">
        <div className="flex flex-col w-full min-h-[371px]">
          <p className="text-blue font-bold text-2xl">01</p>
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-black text-lg leading-[22px]">
              Encontramos Pessoas no Momento de Real Interesse
            </h3>
            <img
              src={suv}
              alt="Encontramos Pessoas no Momento de Real Interesse"
            />
          </div>
          <p className="mt-5 text-black text-sm leading-[17px]">
            Utilizando tecnologia programática e nossa expertise em marketing,
            identificamos e entendemos o comportamento dos usuários na internet.
            Apresentamos a solução da Chave no Contato para aqueles que estão
            dispostos a comprar um carro novo, ajudando-os a encontra o melhor
            custo-benefício na sua região.
          </p>
          <button
            className="bg-blue text-white w-[248px] h-10 flex items-center justify-center mt-[73px] rounded-[20px] font-bold text-base hover:bg-white hover:text-blue transition-colors"
            onClick={handleScrollToForm}
          >
            QUERO VENDER MAIS <CaretRightIcon className="ml-3 w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="flex xl:hidden flex-col max-w-full mx-auto p-4 bg-blue">
        <div className="flex flex-col w-full min-h-[371px]">
          <p className="text-white font-bold text-2xl text-right">02</p>
          <div className="flex items-center justify-between">
            <img
              src={sedan}
              alt="Concessionárias Parceiras prontas para dar o melhor atendimento"
            />
            <h3 className="font-bold text-white text-lg leading-[22px] text-right">
              Concessionárias Parceiras prontas para dar o melhor atendimento
            </h3>
          </div>
          <p className="mt-5 text-white text-sm leading-[17px] text-right">
            Após identificar a demanda, encaminhamos para nossas concessionárias
            parceiras, para que possam proporcionar um atendimento de excelência
            e realizar a venda do automóvel, satisfazendo plenamente o cliente.
          </p>

          <div className="w-full flex flex-row-reverse">
            <button
              className="bg-black text-white w-[248px] h-10 flex items-center justify-center mt-[73px] rounded-[20px] font-bold text-base hover:bg-white hover:text-blue transition-colors"
              onClick={handleScrollToForm}
            >
              QUERO VENDER MAIS <CaretRightIcon className="ml-3 w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex xl:hidden flex-col max-w-full mx-auto p-4 pb-[60px] bg-white">
        <div className="flex flex-col w-full min-h-[371px]">
          <p className="text-blue font-bold text-2xl">03</p>
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-black text-lg leading-[22px]">
            Foco na Qualidade de Atendimento e Vendas
            </h3>
            <img
              src={compact}
              alt="Foco na Qualidade de Atendimento e Vendas"
            />
          </div>
          <p className="mt-5 text-black text-sm leading-[17px]">
            Nosso objetivo é facilitar o processo de compra para os compradores
            e ajudar as concessionárias a encontrar novos clientes. Trabalharmos
            para gerar uma experiência positiva e satisfatória para todos os
            envolvidos, focando na qualidade do atendimento e dos leads.
          </p>
          <button
            className="bg-blue text-white w-[248px] h-10 flex items-center justify-center mt-[73px] rounded-[20px] font-bold text-base hover:bg-white hover:text-blue transition-colors"
            onClick={handleScrollToForm}
          >
            QUERO COMPRAR <CaretRightIcon className="ml-3 w-6 h-6" />
          </button>
        </div>
      </div>
    </>
  );
}