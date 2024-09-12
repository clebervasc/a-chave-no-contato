import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

import polo from '../../assets/images/cars/slide/polo.png'
import onix from '../../assets/images/cars/slide/onix.png'
import l200 from '../../assets/images/cars/slide/l200.png'
import corolla from '../../assets/images/cars/slide/corolla.png'

export function SliderHome() {
  return (
    <Swiper
      spaceBetween={100}
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false
      }}
      loop={true}
      speed={1000}
    >
      <SwiperSlide>
        <div className="relative !flex items-center justify-center">
          <img src={polo} alt="VW Polo" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative !flex items-center justify-center">
          <img src={l200} alt="Mitsubishi L200" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative !flex items-center justify-center">
          <img src={onix} alt="Chevrolet Onix" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative !flex items-center justify-center">
          <img src={corolla} alt="Toyota Corolla" />
        </div>
      </SwiperSlide>
    </Swiper>
    
  )
}
