"use client"

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Image from 'next/image';
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi';
import type { Swiper as TSwiper } from 'swiper';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const ProductGallery = ({ images }: { images: any }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<TSwiper | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handleSlideChange = (swiper: TSwiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <>
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Swiper
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSlideChange={handleSlideChange}
        >
          {images.map((item: any, index: number) => (
            <SwiperSlide key={item.url}>
              <Image src={item.url} alt={item.altText} width={722} height={623} className="mb-6 border rounded-md " />
            </SwiperSlide>
          ))}
          <div
            className={`hidden lg:flex justify-between w-full absolute top-1/2 -translate-y-1/2 z-10 px-6 text-dark ${
              isHovered ? 'opacity-100 transition-opacity duration-300 ease-in-out' : 'opacity-0 transition-opacity duration-300 ease-in-out'
            }`}
          >
            <div ref={prevRef} className="p-2 lg:p-4 rounded-md bg-body cursor-pointer shadow-sm">
              <HiOutlineArrowNarrowLeft size={24} />
            </div>
            <div ref={nextRef} className="p-2 lg:p-4 rounded-md bg-body cursor-pointer shadow-sm">
              <HiOutlineArrowNarrowRight size={24} />
            </div>
          </div>
        </Swiper>
      </div>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {images.map((item: any, index: number) => (
          <SwiperSlide key={item.altText}>
            <div
              className={`rounded-md border cursor-pointer overflow-hidden ${
                index === activeIndex ? 'border border-primary dark:border-blue-500' : ''
              }`}
            >
              <Image src={item.url} alt={item.altText} width={168} height={146} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductGallery;
