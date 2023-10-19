"use client"

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import Image from 'next/image';
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi';
import type { Swiper as TSwiper } from 'swiper';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const ProductGallery = ({ products }: { products: any }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState<TSwiper | null>(null);

	const [_, setInit] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	const prevRef = useRef(null);
	const nextRef = useRef(null);

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
					//trigger a re-render by updating the state on swiper initialization
					onInit={() => setInit(true)}
				>

					{
						products.map((item: any) => (
							<SwiperSlide key={item.id}>
								<Image src={item.imgSrc} alt={item.productName} width={722} height={623} className='mb-6' />
							</SwiperSlide>
						))
					}

					<div
						className={`hidden lg:flex justify-between w-full absolute top-1/2 -translate-y-1/2 z-10 px-6 text-dark ${isHovered ? 'opacity-100 transition-opacity duration-300 ease-in-out' : 'opacity-0 transition-opacity duration-300 ease-in-out'
							}`}
					>
						<div ref={prevRef} className="p-2 lg:p-4 rounded-md bg-body cursor-pointer shadow-sm"><HiOutlineArrowNarrowLeft size={24} /></div>
						<div ref={nextRef} className="p-2 lg:p-4 rounded-md bg-body cursor-pointer shadow-sm"><HiOutlineArrowNarrowRight size={24} /></div>
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
				className="mySwiper"
			>
				{
					products.map((item: any) => (
						<SwiperSlide key={item.id}>
							<Image src={item.imgSrc} alt={item.productName} width={168} height={146} className='rounded-md cursor-pointer'/>
						</SwiperSlide>
					))
				}
			</Swiper>
		</>
	)
}

export default ProductGallery