import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Ayesha Rahman",
    role: "Historian",
    message:
      "This platform helped me discover and catalog rare manuscripts. It's a true gem for researchers.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "Omar Faruk",
    role: "Archaeologist",
    message:
      "Accurate data and a beautiful interface make this the perfect tool for my field work.",
    image: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    id: 3,
    name: "Sara Alam",
    role: "Curator",
    message:
      "I love how simple and elegant everything is. It’s very helpful for presenting artifacts to the public.",
    image: "https://randomuser.me/api/portraits/women/50.jpg"
  },
  {
    id: 4,
    name: "Imran Chowdhury",
    role: "Anthropologist",
    message:
      "Using this artifact tracker saves hours of manual documentation. A great modern tool for historians.",
    image: "https://randomuser.me/api/portraits/men/64.jpg"
  }
];

const StarRating = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
          ★
        </span>
      );
    }
    return <div className="flex text-lg">{stars}</div>;
}

const Testimonials = () => {

  return (
     <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">What Experts Say</h2>
        <p className="text-gray-500 mb-10 max-w-xl mx-auto">
          Hear from historians, archaeologists, and curators who use our platform.
        </p>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className=" bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col justify-between h-[200px]">
                <p className="text-gray-600 text-base italic mb-6">“{t.message}”</p>
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-gray-800">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
