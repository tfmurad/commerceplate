"use client";
import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import Link from "next/link";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

const HeroSlider = ({ content }: { content: any }) => {
	return (
		<div>
			<Swiper
				navigation={true}
				modules={[Pagination, Navigation]}
			>
				{content.map(
					(item: any, index: number) => (
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
					),
				)}
			</Swiper>
		</div>
	)
}

export default HeroSlider;