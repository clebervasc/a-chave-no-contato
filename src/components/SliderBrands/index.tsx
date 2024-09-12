import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';

import chevrolet from '../../assets/images/logos/slide/chevrolet.svg'
import nissan from '../../assets/images/logos/slide/nissan.svg'
import jeep from '../../assets/images/logos/slide/jeep.svg'
import mitisubishi from '../../assets/images/logos/slide/mitsubishi.svg'
import mercedes from '../../assets/images/logos/slide/mercedes.svg'
import vw from '../../assets/images/logos/slide/volks.svg'
import audi from '../../assets/images/logos/slide/audi.svg'
import bmw from '../../assets/images/logos/slide/bmw.svg'
import citroen from '../../assets/images/logos/slide/citroen.svg'
import fiat from '../../assets/images/logos/slide/fiat.svg'
import ford from '../../assets/images/logos/slide/ford.svg'
import honda from '../../assets/images/logos/slide/honda.svg'
import hyundai from '../../assets/images/logos/slide/hyundai.svg'
import peugeot from '../../assets/images/logos/slide/peugeot.svg'
import renault from '../../assets/images/logos/slide/renault.svg'
import toyota from '../../assets/images/logos/slide/toyota.svg'



export function SliderBrands() {
  return (
    <div className="bg-black h-[152px] max-w-full xl:max-w-[1440px] mx-auto flex items-center justify-center">
      <Swiper
      modules={[Autoplay, FreeMode]}
      spaceBetween={30}
      slidesPerView={7}
      freeMode
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      speed={4000} 
      loop
      allowTouchMove
      className="h-24"
      breakpoints={{
        320: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
        1280: {
          slidesPerView: 7,
          spaceBetween: 30,
        },
      }}
    >
      <SwiperSlide className="!flex justify-center items-center">
        <img src={chevrolet} alt="Marca Parceira" />,
      </SwiperSlide>
      <SwiperSlide className="!flex justify-center items-center">
        <img src={nissan} alt="Marca Parceira" />,
      </SwiperSlide>
      <SwiperSlide className="!flex justify-center items-center">
        <img src={jeep} alt="Marca Parceira" />,
      </SwiperSlide>
      <SwiperSlide className="!flex justify-center items-center">
        <img src={mitisubishi} alt="Marca Parceira" />,
      </SwiperSlide>
      <SwiperSlide className="!flex justify-center items-center">
        <img src={mercedes} alt="Marca Parceira" />,
      </SwiperSlide>
      <SwiperSlide className="!flex justify-center items-center">
        <img src={vw} alt="Marca Parceira" />,
      </SwiperSlide>
      <SwiperSlide className="!flex justify-center items-center">
        <img src={audi} alt="Marca Parceira" />,
      </SwiperSlide>
      <SwiperSlide className="!flex justify-center items-center">
        <img src={bmw} alt="Marca Parceira" />,
      </SwiperSlide>
      <SwiperSlide className="!flex justify-center items-center">
        <img src={citroen} alt="Marca Parceira" />,
      </SwiperSlide>
      <SwiperSlide className="!flex justify-center items-center">
        <img src={fiat} alt="Marca Parceira" />,
      </SwiperSlide>
      <SwiperSlide className="!flex justify-center items-center">
        <img src={ford} alt="Marca Parceira" />,
      </SwiperSlide>
      <SwiperSlide className="!flex justify-center items-center">
        <img src={honda} alt="Marca Parceira" />,
      </SwiperSlide>
      <SwiperSlide className="!flex justify-center items-center">
        <img src={hyundai} alt="Marca Parceira" />,
      </SwiperSlide>
      <SwiperSlide className="!flex justify-center items-center">
        <img src={peugeot} alt="Marca Parceira" />,
      </SwiperSlide>
      <SwiperSlide className="!flex justify-center items-center">
        <img src={renault} alt="Marca Parceira" />,
      </SwiperSlide>
      <SwiperSlide className="!flex justify-center items-center">
        <img src={toyota} alt="Marca Parceira" />,
      </SwiperSlide>
    </Swiper>
    </div>
  )
}
