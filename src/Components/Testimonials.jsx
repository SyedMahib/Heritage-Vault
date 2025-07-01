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
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Omar Faruk",
    role: "Archaeologist",
    message:
      "Accurate data and a beautiful interface make this the perfect tool for my field work.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 3,
    name: "Sara Alam",
    role: "Curator",
    message:
      "I love how simple and elegant everything is. It’s very helpful for presenting artifacts to the public.",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    id: 4,
    name: "Imran Chowdhury",
    role: "Anthropologist",
    message:
      "Using this artifact tracker saves hours of manual documentation. A great modern tool for historians.",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
  },
  {
    id: 5,
    name: "Dr. Mahmud Hossain",
    role: "Archaeology Professor",
    message:
      "An invaluable resource for students and researchers. The attention to historical accuracy is commendable.",
    image: "https://randomuser.me/api/portraits/men/55.jpg"
  },
  {
    id: 6,
    name: "Nasima Akter",
    role: "Cultural Researcher",
    message:
      "I love the clean layout and how easy it is to search and browse artifacts from various regions.",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    id: 7,
    name: "Rezaul Karim",
    role: "Museum Director",
    message:
      "This platform has helped our institution collaborate with other archives internationally.",
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    id: 8,
    name: "Fatima Noor",
    role: "Heritage Conservationist",
    message:
      "I use this tool regularly to keep track of restoration projects. It's professional and reliable.",
    image: "https://randomuser.me/api/portraits/women/70.jpg"
  },
  {
    id: 9,
    name: "Tanvir Ahmed",
    role: "Archivist",
    message:
      "The real-time updates and intuitive dashboard make artifact tracking easier than ever before.",
    image: "https://randomuser.me/api/portraits/men/80.jpg"
  },
  {
    id: 10,
    name: "Dr. Rumi Choudhury",
    role: "Historian & Writer",
    message:
      "A fantastic platform that bridges history with modern technology. Highly recommended.",
    image: "https://randomuser.me/api/portraits/women/81.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 container mx-auto">
      <div className="px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1F1F1F] mb-4">
          What Experts Say
          <span className="block w-[200px] h-1 bg-[#A37854] mx-auto mt-4 rounded-full"></span>
        </h2>
        <p className="text-[#5A5A5A] font-medium text-lg mb-10 max-w-xl mx-auto">
          Hear from historians, archaeologists, and curators who use our
          platform.
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
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className=" bg-white p-6 rounded-2xl transition duration-300 flex flex-col justify-between h-[260px] md:h-[300px] xl:h-[220px]">
                <p className="text-gray-600 text-lg font-medium italic mb-6">
                  “{t.message}”
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-gray-800">
                      {t.name}
                    </h4>
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
