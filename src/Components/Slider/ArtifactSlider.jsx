import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useRef } from "react";
import "./slider.css";

const artifacts = [
  {
    name: "Sword of Salahuddin",
    era: "1170 AD",
    discovered: "1936",
    discoveredBy: "Emre Demir",
    image: '"https://i.ibb.co/7tcjNtgS/1300-03-1.jpg"',
  },
  {
    name: "Golden Mask of Pharaoh",
    era: "1323 BC",
    discovered: "1925",
    discoveredBy: "Howard Carter",
    image:
      "https://i.ibb.co/VnnwLVy/Gemini-Generated-Image-ia6ismia6ismia6i.png",
  },
  {
    name: "Scroll of the Silent Forest",
    image: "https://i.ibb.co/HMDTrWD/bdffc280-6885-4557-b245-744dfe826fdb-large.webp",
    era: "500 AD",
    discovered: "2010",
    discoveredBy: "Botanist, Dr. Alistair Finch",
  },
  {
    name: "Mamluk Mosque Lamp ",
    image: "https://i.ibb.co/5h7yBy31/FKq-E-EIXo-AAGkpw.jpg",
    era: "1350 AD",
    discovered: "1890",
    discoveredBy: "French explorer Jean-Pierre Bourdain"
  }
];

export default function ArtifactSlider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop="true"
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        {artifacts.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-[600px] bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${item.image})`,
              }}
            >

              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  {item.name}
                </h2>
                <p className="text-lg md:text-xl mb-2">📜 Era: {item.era}</p>
                <p className="text-md md:text-lg">
                  🧭 Discovered in {item.discovered} by {item.discoveredBy}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
