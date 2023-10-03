"use client";
import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import Link from "next/link";
import { useRef, useState } from "react";
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HeroSlider = ({ content }: { content: any }) => {
  //Add a state that will trigger a re-render later
  const [_, setInit] = useState(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <Swiper
        modules={[Pagination, Navigation]}
        //assign the refs to the swiper navigation buttons
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        //trigger a re-render by updating the state on swiper initialization
        onInit={() => setInit(true)}
      >
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

        <div className="flex justify-between lg:justify-normal gap-4 mx-4">
          <div ref={prevRef} className="p-4 rounded-md bg-body cursor-pointer"><HiOutlineArrowNarrowLeft size={24} /></div>
          <div ref={nextRef} className="p-4 rounded-md bg-body cursor-pointer"><HiOutlineArrowNarrowRight size={24} /></div>
        </div>
      </Swiper>
    </>
  );
};

export default HeroSlider;
