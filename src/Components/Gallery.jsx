import React, { use } from "react";
import { Link } from "react-router";

const dataPromise = fetch(
  "https://a-11-server-side-peach.vercel.app/artifacts"
).then((res) => res.json());

const Gallery = () => {
  const data = use(dataPromise);

  return (
    <div>
      <section className="py-16">
        <div className="text-center mb-10">
           <h2 className="text-3xl md:text-5xl font-bold text-[#1F1F1F] my-4 ">
         Our Gallery
          <span className="block w-[100px] h-1 bg-[#A37854] mx-auto mt-4 rounded-full"></span>
        </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-6xl mx-auto px-4">
          {data.slice(0,16).map((image) => (
            <div
              key={image._id}
              className="relative group overflow-hidden rounded-md shadow-lg"
            >
              <img
                src={image.artifactImage}
                alt={image.artifactName}
                className="object-cover w-full h-48 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Link to={`/artifacts/${image._id}`} className="text-white text-sm font-semibold">
                  {image.artifactName}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
