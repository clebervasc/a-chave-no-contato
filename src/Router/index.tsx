import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Products } from '../pages/Products';
import { Home } from '../pages/Home';
import { YourCar } from '../pages/YourCar';
import { About } from '../pages/About';

export function Router() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/seu-carro" element={<YourCar />} />
        <Route path="/sobre-nos" element={<About />} />
       </Routes>
    </BrowserRouter>
  )
}