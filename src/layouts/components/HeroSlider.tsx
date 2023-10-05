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
  //Add a state that will trigger a re-render later
  // const [_, setInit] = useState(false);

  // const prevRef = useRef(null);
  // const nextRef = useRef(null);

  // const pagination = {
  //   clickable: true,
  // };

  return (
    <>
      <Swiper
        // modules={[Pagination, Navigation]}
        // //assign the refs to the swiper navigation buttons
        // pagination={true}
        // navigation={{
        //   prevEl: prevRef.current,
        //   nextEl: nextRef.current,
        // }}
        // //trigger a re-render by updating the state on swiper initialization
        // onInit={() => setInit(true)}
        pagination={{ clickable: true, bulletClass: 'banner-pagination-bullet', bulletActiveClass: 'banner-pagination-bullet-active' }}
        modules={[Pagination]}
      >
        {content.map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <div className="row items-center px-7 lg:px-[100px]">
              <div className="sm:col-12 md:col-6">
                <div className="text-center">
                  {
                    item?.content && <p
                      className="mb-4 text-lunar dark:text-darkmode-lunar font-medium text-xxs md:text-xl"
                      dangerouslySetInnerHTML={markdownify(item.content)}
                    />
                  }
                  <h1
                    className="mb-8 text-[22px] lg:text-[56px]"
                    dangerouslySetInnerHTML={markdownify(item.title)}
                  />
                  {item.button!.enable && (
                    <Link className="btn lg:btn-lg btn-primary" href={item.button!.link}>
                      {item.button!.label}
                    </Link>
                  )}
                </div>
              </div>

              <div className="sm:col-12 md:col-6 mt-6 md:mt-0">
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

        {/* <div className="flex justify-between lg:justify-normal gap-4 mx-4 text-dark">
          <div ref={prevRef} className="p-4 rounded-md bg-body cursor-pointer"><HiOutlineArrowNarrowLeft size={24} /></div>
          <div ref={nextRef} className="p-4 rounded-md bg-body cursor-pointer"><HiOutlineArrowNarrowRight size={24} /></div>
        </div> */}
      </Swiper>
    </>
  );
};

export default HeroSlider;
