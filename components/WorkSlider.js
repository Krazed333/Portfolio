import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Music Visualizer",
          path: "/LEDproject.jpg",
        },
        {
          title: "Facial Regonition",
          path: "/FaceID.jpg",
        },
        {
          title: "Batle Bots",
          path: "/battlebots.jpg",
          URL: "https://wiki.robojackets.org/Chonkiii",
        },
        {
          title: "Portfolio",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "Quiz-Testing App",
          path: "/Quiz.jpg",
        },
        {
          title: "MERN stack project",
          path: "/thumb1.jpg",
        },
        {
          title: "Awwarded",
          path: "/thumb2.jpg",
        },
        {
          title: "Payment Gateway",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      Pagination={{
        clickable: true,
      }}
      modules={{ Pagination }}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <Link
                    href={
                      image.title === "Batle Bots"
                        ? image.URL
                        : "https://github.com/Krazed333?tab=repositories"
                    }
                  >
                    <div
                      className="relative rounded-lg overflow-hidden flex items-center justify-center group "
                      key={index}
                    >
                      <div className="w-[250px] xl:w-[350px] flex items-center justify-center relative overflow-hidden group xl:h-[200px] h-[130px]">
                        <Image
                          src={image.path}
                          width={500}
                          height={300}
                          alt=""
                        />
                        {/* overlay */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                        {/* title */}
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2rem] ">
                            {/* title part 1 */}
                            <div className="delay-100">{image.title}</div>
                            {/* title part 2 */}
                            <div className="translate-y-[500%] group:hover:translate-y-0 transition-all duration-300 delay-150">
                              title part 2
                            </div>
                            {/* icon */}
                            <div className="text-xl">
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
      Work Slider
    </Swiper>
  );
};

export default WorkSlider;
