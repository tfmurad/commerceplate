"use client";
import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import Link from "next/link";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { useSwiper } from "swiper/react";

const HeroSlider = ({ content }: { content: any }) => {
  const swiperBTN = useSwiper();
  console.log(swiperBTN);
  return (
    <>
      <Swiper navigation={true} modules={[Pagination, Navigation]}>
        {content.map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <div className="row items-center md:px-[100px]">
              <div className="sm:col-12 md:col-6">
                <div className="text-center">
                  <p
                    className="mb-4"
                    dangerouslySetInnerHTML={markdownify(item.content ?? "")}
                  />
                  <h1
                    className="mb-8"
                    dangerouslySetInnerHTML={markdownify(item.title)}
                  />
                  {item.button!.enable && (
                    <Link className="btn btn-primary" href={item.button!.link}>
                      {item.button!.label}
                    </Link>
                  )}
                </div>
              </div>

              <div className="sm:col-12 md:col-6">
                {item.image && (
                  <ImageFallback
                    src={item.image}
                    className="mx-auto"
                    width={702}
                    height={551}
                    alt="banner image"
                    priority
                  />
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}

        <button
          onClick={() => swiperBTN.slidePrev()}
          className="bg-white text-3xl w-[30px] h-[32px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-md absolute bottom-4 left-4"
        >
          <HiOutlineArrowNarrowLeft />
        </button>
        <button
          onClick={() => swiperBTN.slideNext()}
          className="bg-white text-3xl w-[30px] h-[32px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-md absolute bottom-4 right-4 md:left-24 opacity-50"
        >
          <HiOutlineArrowNarrowRight />
        </button>
      </Swiper>
    </>
  );
};

export default HeroSlider;
