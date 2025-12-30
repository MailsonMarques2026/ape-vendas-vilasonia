import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/* IMAGENS */
import fachada from "@/assets/Gallery/fachada.gif"; 
import bengalo from "@/assets/Gallery/Bengalo.gif";
import churrasqueira from "@/assets/Gallery/Churrasqueira.gif";
import crossfit from "@/assets/Gallery/Crossfit.gif";
import petPlace from "@/assets/Gallery/pet-place.gif";
import piscina from "@/assets/Gallery/piscina.gif";
import playground from "@/assets/Gallery/playground.gif";
import quadra from "@/assets/Gallery/quadra.gif";

import academia from "@/assets/Gallery/Academia.gif";
import bicicletario from "@/assets/Gallery/Bicicletario.gif";
import brinquedoteca from "@/assets/Gallery/Brinquedoteca.gif";
import coworking from "@/assets/Gallery/coworking.gif";
import espacoBeleza from "@/assets/Gallery/espaco-beleza.gif";
import delivery from "@/assets/Gallery/delivery.gif";
import ioga from "@/assets/Gallery/ioga.gif";
import lavanderia from "@/assets/Gallery/lavanderia.gif";
import mercado from "@/assets/Gallery/mercado.gif";
import petCare from "@/assets/Gallery/pet-care.gif";
import salaoDeFesta from "@/assets/Gallery/salao-de-festa.gif";
import sauna from "@/assets/Gallery/sauna.gif";
import spa from "@/assets/Gallery/spa.gif";
import sportBar from "@/assets/Gallery/sport-bar.gif";
import jogos from "@/assets/Gallery/jogos.gif";

import hidromassagem from "@/assets/Gallery/hidromassagem.gif";
import rooftop from "@/assets/Gallery/rooftop.gif";

type Category = "externas" | "internas" | "rooftop";

const galleryData = {
  externas: [
    { src: fachada, title: "Fachada" },
    { src: bengalo, title: "Piscina com Raia" },
    { src: churrasqueira, title: "Churrasqueira" },
    { src: crossfit, title: "Espaço Crossfit" },
    { src: petPlace, title: "Pet Place" },
    { src: piscina, title: "Piscina" },
    { src: playground, title: "Playground" },
    { src: quadra, title: "Quadra Poliesportiva" },
  ],
  internas: [
    { src: academia, title: "Academia" },
    { src: bicicletario, title: "Bicicletário" },
    { src: brinquedoteca, title: "Brinquedoteca" },
    { src: coworking, title: "Coworking" },
    { src: espacoBeleza, title: "Espaço Beleza" },
    { src: delivery, title: "Delivery Room" },
    { src: ioga, title: "Espaço Yoga" },
    { src: lavanderia, title: "Lavanderia" },
    { src: mercado, title: "Mercado" },
    { src: petCare, title: "Pet Care" },
    { src: salaoDeFesta, title: "Salão de Festas" },
    { src: sauna, title: "Sauna" },
    { src: spa, title: "Spa" },
    { src: sportBar, title: "Sport Bar" },
    { src: jogos, title: "Sala de Jogos" },
  ],
  rooftop: [
    { src: hidromassagem, title: "Hidromassagem" },
    { src: rooftop, title: "Rooftop Gourmet" },
  ],
};

const Gallery = () => {
  const [category, setCategory] = useState<Category>("externas");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = galleryData[category];

  const closeLightbox = () => setSelectedIndex(null);

  const showPrev = () => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev - 1 + images.length) % images.length
    );
  };

  const showNext = () => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % images.length
    );
  };

  /* Teclado */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, images.length]);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-12">

        {/* MENU */}
        <aside className="lg:w-1/4 flex lg:flex-col gap-4 overflow-x-auto">
          {[
            { key: "externas", label: "Áreas Externas" },
            { key: "internas", label: "Áreas Internas" },
            { key: "rooftop", label: "Rooftop" },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setCategory(item.key as Category)}
              className={`px-6 py-3 rounded-full border transition-all whitespace-nowrap ${
                category === item.key
                  ? "bg-accent text-white border-accent"
                  : "border-muted text-muted-foreground hover:border-accent"
              }`}
            >
              {item.label}
            </button>
          ))}
        </aside>

        {/* GRID */}
        <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.button
              key={`${category}-${image.title}`}
              onClick={() => setSelectedIndex(index)}
              className="relative overflow-hidden rounded-2xl h-[320px] group focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-end transition-opacity">
                <span className="p-5 text-white font-medium">{image.title}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* FECHAR */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white"
            >
              <X size={32} />
            </button>

            {/* ANTERIOR */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-6 text-white"
            >
              <ChevronLeft size={40} />
            </button>

            {/* IMAGEM */}
            <motion.img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].title}
              onClick={(e) => e.stopPropagation()}
              className="max-w-[90vw] max-h-[85vh] rounded-xl object-contain"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
            />

            {/* PRÓXIMA */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-6 text-white"
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
