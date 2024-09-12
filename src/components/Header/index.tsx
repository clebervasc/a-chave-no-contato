import { useState } from 'react';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../../assets/Logo';
import { cn } from '../../utils/cn';
import { useFormContext } from '../Form/context/useFormContext';

export function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();
  const { formRef } = useFormContext();

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };


  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const isActive = (path: string) => cn(
    'hover:text-gray-400',
    location.pathname === path && 'text-black bg-white rounded-[20px] py-4 px-6 hover:text-gray-500'
  )


  return (
    <header className="h-20 xl:h-24 bg-black p-4">
      <div className="max-w-full xl:max-w-[1440px] mx-auto">
        <nav className="flex items-center justify-between">
          {/* Mobile */}
          <button onClick={toggleDrawer} className="xl:hidden text-white focus:outline-none">
            <HamburgerMenuIcon className='w-9 h-[20px]' width={36} height={20} />
          </button>

          {/* Logo */}
          <Logo className='w-9 xl:w-16 h-9 xl:h-16 text-white'/>

          {/* Menu Items */}
          <ul className="hidden xl:flex space-x-8 text-white font-bold">
            <li><Link to="/" className={isActive('/')}>Home</Link></li>
            <li><Link to="/produtos" className={isActive('/produtos')}>Para concessionárias</Link></li>
            <li><Link to="/seu-carro" className={isActive('/seu-carro')}>Encontre seu Carro</Link></li>
            <li><Link to="/sobre-nos" className={isActive('/sobre-nos')}>Sobre Nós</Link></li>
          </ul>

          {/* Button */}
          <button onClick={handleScrollToForm} className="bg-green text-white font-bold text-xs rounded-[20px] w-[107px] h-[30px]">Fale Conosco</button>

          {/* Drawer */}
          {isDrawerOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-90 z-[99] w-full transition-opacity duration-300 ease-in-out"
              onClick={closeDrawer}
            >
              <div
                className="absolute top-0 left-0 w-64 bg-blue h-full p-4 transform transition-transform duration-300 ease-in-out"
                onClick={(e) => e.stopPropagation()}
                style={{
                  transform: isDrawerOpen ? 'translateX(0)' : 'translateX(-100%)',
                  opacity: isDrawerOpen ? 1 : 0,
                }}
              >
                <button onClick={closeDrawer} className="text-white mb-4 focus:outline-none">
                  <Cross1Icon />
                </button>
                <ul className="space-y-4 text-white">
                <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
                <li><Link to="/produtos" className="hover:text-gray-400">Para concessionárias</Link></li>
                <li><Link to="/seu-carro" className="hover:text-gray-400">Encontre seu Carro</Link></li>
                <li><Link to="/sobre-nos" className="hover:text-gray-400">Sobre Nós</Link></li>
                </ul>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
