import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const artifacts = [
  {
    id: "68640e04ed62325d6da8841b",
    name: "Sword of Salahuddin",
    date: "1170 AD",
    location: [31.7683, 35.2137],
    description:
      "A curved steel blade with inscriptions of Qur'anic verses along its spine.",
    image: "https://i.ibb.co/7tcjNtgS/1300-03-1.jpg",
    locationText: "Jerusalem",
  },
  {
    id: "68640e04ed62325d6da8841d",
    name: "Al-Rahma Astrolabe",
    date: "950 AD",
    location: [33.3152, 44.3661],
    description:
      "A brass astrolabe engraved with Arabic inscriptions and intricate geometric designs.",
    image: "https://i.ibb.co/PvDSM1zw/large-1938-0427-0001.jpg",
    locationText: "Baghdad, Iraq",
  },
  {
    id: "68640e04ed62325d6da8841e",
    name: "The Sunstone Cogwheel",
    date: "350 BC",
    location: [31.2001, 29.9187],
    description:
      "A perfectly preserved bronze cogwheel with celestial symbols.",
    image:
      "https://i.ibb.co/B2WYm9bf/Gemini-Generated-Image-3dwv2t3dwv2t3dwv.png",
    locationText: "Alexandria, Egypt",
  },
  {
    id: "68640e04ed62325d6da88420",
    name: "Tablet of the Star Seer",
    date: "2000 BC",
    location: [33.2232, 43.6793],
    description:
      "Clay tablet with cuneiform script depicting celestial bodies.",
    image: "https://i.ibb.co/MkFpt2XP/seal-0776.jpg",
    locationText: "Mesopotamia (Modern-day Iraq)",
  },
  {
    id: "68640e04ed62325d6da88421",
    name: "The Blue Qur'an Manuscript",
    date: "900 AD",
    location: [35.6712, 10.1006],
    description:
      "Page from the Blue Qur'an with gold Kufic script on blue parchment.",
    image: "https://i.ibb.co/VYT8LSLf/Folio-Blue-Quran-Met-2004-88.jpg",
    locationText: "Kairouan, Tunisia",
  },
  {
    id: "68640e04ed62325d6da88422",
    name: "Blade of Aethelred",
    date: "990 AD",
    location: [51.5074, -0.1278],
    description: "Anglo-Saxon longsword with dragon motifs on the hilt.",
    image: "https://i.ibb.co/HTfMsV4z/images.jpg",
    locationText: "England, UK",
  },
  {
    id: "68640e04ed62325d6da88423",
    name: "The Jade Compass",
    date: "1200 BC",
    location: [25.033, 121.5654],
    description: "Jade compass with mysterious navigational properties.",
    image: "https://i.ibb.co/svjqPT8V/jade-compass.jpg",
    locationText: "Ancient China",
  },
  {
    id: "68640e04ed62325d6da88425",
    name: "Mamluk Mosque Lamp",
    date: "1350 AD",
    location: [30.0444, 31.2357],
    description:
      "Glass mosque lamp with cobalt blue enamel and Arabic inscriptions.",
    image: "https://i.ibb.co/5h7yBy31/FKq-E-EIXo-AAGkpw.jpg",
    locationText: "Cairo, Egypt",
  },
  {
    id: "68640e04ed62325d6da88426",
    name: "Golden Pharaoh Mask",
    date: "1323 BC",
    location: [25.7402, 32.6014],
    description: "Gold death mask of Pharaoh Tutankhamun with lapis lazuli.",
    image:
      "https://i.ibb.co/VnnwLVy/Gemini-Generated-Image-ia6ismia6ismia6i.png",
    locationText: "Valley of the Kings, Egypt",
  },
  {
    id: "68640e04ed62325d6da88427",
    name: "Rosetta Stone",
    date: "196 BC",
    location: [31.404, 30.4161],
    description:
      "Stone inscribed with decree in Greek, Demotic and Hieroglyphic.",
    image:
      "https://i.ibb.co/MkkNnpSn/rosettastonedsc-3520-british-museum-lmauldin.webp",
    locationText: "Rosetta, Egypt",
  },
  {
    id: "68640e04ed62325d6da88428",
    name: "Terracotta Warrior",
    date: "210 BC",
    location: [34.3843, 109.2785],
    description: "Clay soldier from Emperor Qin Shi Huang's army.",
    image: "https://i.ibb.co/QFsfyB4W/7541.jpg",
    locationText: "Xi'an, China",
  },
  {
    id: "68640e04ed62325d6da88429",
    name: "Code of Hammurabi",
    date: "1754 BC",
    location: [32.1892, 48.2536],
    description: "Babylonian legal code engraved on stone stele.",
    image: "https://i.ibb.co/GD0JPHC/code-hammurabi-gettyimages-91425803.jpg",
    locationText: "Susa, Iran",
  },
  {
    id: "6864166fed62325d6da8842a",
    name: "Ottoman Tughra Seal",
    date: "1550 AD",
    location: [41.0082, 28.9784],
    description: "Ornate document seal representing Sultan's authority.",
    image: "https://i.ibb.co/fzpvVwns/download.jpg",
    locationText: "Istanbul, Turkey",
  },
];

export default function ArtifactMap() {
  return (
    <div className="my-25">
      <h2 className="text-3xl md:text-5xl font-bold text-[#1F1F1F] mb-10 text-center ">
        Artifacts Discovery Map
        <span className="block w-[200px] h-1 bg-[#A37854] mx-auto mt-4 rounded-full"></span>
      </h2>
      <div className="w-full h-[600px] rounded-lg shadow-lg overflow-hidden">
        <MapContainer
          center={[40, 80]}
          zoom={4}
          minZoom={3}
          scrollWheelZoom={true}
          className="w-full h-full"
        >
          <TileLayer
            url="https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=cb09599cffda4e1485d5d995188e5a29"
            attribution='&copy; <a href="https://www.thunderforest.com/">Thunderforest</a>'
          />

          {artifacts.map((artifact) => (
            <Marker key={artifact.id} position={artifact.location}>
              <Popup>
                <div className="w-64">
                  <h3 className="font-bold text-lg">{artifact.name}</h3>
                  <p className="text-gray-600">{artifact.date}</p>
                  {artifact.image && (
                    <img
                      src={artifact.image}
                      alt={artifact.name}
                      className="w-full h-32 object-cover my-2 rounded"
                    />
                  )}
                  <p className="text-sm">{artifact.description}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
