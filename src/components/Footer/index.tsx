import { Link } from "react-router-dom";
import { Logo } from "../../assets/Logo";
import { useFormContext } from "../Form/context/useFormContext";

export function Footer() {
  const { formRef } = useFormContext();

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full xl:h-32 bg-white p-4 xl:px-4">
      <div className="max-w-full xl:max-w-[1440px] mx-auto">
        <div className="flex items-center justify-center xl:justify-between xl:pt-4">
          <Logo className='w-9 xl:w-16 h-9 xl:h-16 text-black xl:mr-52'/>
          <div className="hidden xl:flex items-center flex-1">
            <div className="flex gap-2 mx-2">
              <Link to="/produtos" className="underline">Para concessionárias</Link>
              <span>/</span>
            </div>
            <div className="flex gap-2 mx-2">
              <Link to="/seu-carro" className="underline">Encontre seu Carro</Link>
              <span>/</span>
            </div>
            <div className="flex gap-2 mx-2">
              <Link to="/sobre-nos" className="underline">Sobre Nós</Link>
              <span>/</span>
            </div>
            <div className="flex gap-2 mx-2">
              <span className="underline cursor-pointer" onClick={handleScrollToForm}>Fale Conosco</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
