"use client";
import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import Link from "next/link";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

const HeroSlider = ({ content }: { content: any }) => {

  return (
    <>
      <Swiper
        pagination={{ clickable: true, bulletClass: 'banner-pagination-bullet', bulletActiveClass: 'banner-pagination-bullet-active' }}
        modules={[Pagination]}
      >
        {content.map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <div className="row items-center px-7 xl:px-[100px]">
              <div className="sm:col-12 lg:col-6 xl:px-[60px]">
                <div className="text-center">
                  {
                    item?.content && <p
                      className="mb-2 lg:mb-3 text-lunar dark:text-darkmode-lunar font-medium text-xxs md:text-xl"
                      dangerouslySetInnerHTML={markdownify(item.content)}
                    />
                  }
                  <h1
                    className="mb-4 lg:mb-10"
                    dangerouslySetInnerHTML={markdownify(item.title)}
                  />
                  {item.button!.enable && (
                    <Link className="btn-sm lg:btn-lg btn-primary font-medium" href={item.button!.link}>
                      {item.button!.label}
                    </Link>
                  )}
                </div>
              </div>

              <div className="sm:col-12 lg:col-6 mt-6 lg:mt-0">
                {item.image && (
                  <ImageFallback
                    src={item.image}
                    className="mx-auto w-[388px] lg:w-full"
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

        {/* <div className="flex justify-between lg:justify-normal gap-4 mx-4 text-dark">
          <div ref={prevRef} className="p-4 rounded-md bg-body cursor-pointer"><HiOutlineArrowNarrowLeft size={24} /></div>
          <div ref={nextRef} className="p-4 rounded-md bg-body cursor-pointer"><HiOutlineArrowNarrowRight size={24} /></div>
        </div> */}
      </Swiper>
    </>
  );
};

export default HeroSlider;
