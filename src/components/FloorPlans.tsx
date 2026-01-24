import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

/* IMAGENS */
import PlantaDe17 from "@/assets/PLANTADE17M.png";
import PlantaDe32 from "@/assets/PLANTADE32M.png";
import PlantaDe35 from "@/assets/PLANTADE35M.png";
import PlantaDe36 from "@/assets/PLANTADE36M.png";

/* TIPAGEM */
type Plan = {
  id: number;
  name: string;
  size: string;
  bedrooms: number;
  bathrooms: number;
  balcony?: number;
  image: string;
  features: string[];
};

/* DADOS */
const plans: Plan[] = [
  {
    id: 1,
    name: "Studio – Unidade R2V",
    size: "17 m²",
    bedrooms: 1,
    bathrooms: 1,
    image: PlantaDe17,
    features: [
      "Unidade R2V - Sem limitador de renda",
      "A partir de R$ 201.000,00",
      "Para renda a partir de R$ 3.000,00",
      "Ótima oportunidade para investir!",
      "Média de aluguel na região: R$ 2.000,00",
    ],
  },
  {
    id: 2,
    name: "Apto 1 dorm + office",
    size: "32m²",
    bedrooms: 1,
    bathrooms: 1,
    balcony: 1,
    image: PlantaDe32,
    features: [
      "Varanda",
      "Ponto para Ar-Condicionado",
      "Chuveiro a Gás",
      "Torneiras Aquecidas",
      "Ponto para automação com Alexa",
      "A partir de R$ 247.000,00",
      "Preço promocional exclusivo válido até 31 de Janeiro",
      "Para renda a partir de R$ 4.500,00",

    ],
  },
  {
    id: 3,
    name: "Apto 2 dorms c/ varanda gourmet",
    size: "35m²",
    bedrooms: 2,
    bathrooms: 1,
    balcony: 1,
    image: PlantaDe35,
    features: [
      "Ponto para Ar-Condicionado",
      "Chuveiro a Gás",
      "Torneiras Aquecidas",
      "Ponto para automação com Alexa",
      "Churrasqueira a Gás na varanda",
      "A partir de R$ 267.000,00",
      "Preço promocional exclusivo válido até 31 de Janeiro",
      "Para renda a partir de R$ 5.000,00",
    ],
  },
  {
    id: 4,
    name: "2 dorms com duas varandas",
    size: "36m²",
    bedrooms: 2,
    bathrooms: 1,
    balcony: 2,
    image: PlantaDe36,
    features: [
      "Varanda na área de serviço",
      "Varanda privativa no quarto",
      "Ponto para Ar-Condicionado",
      "Chuveiro a Gás",
      "Torneiras Aquecidas",
      "Ponto para automação com Alexa",
      "Churrasqueira a Gás",
      "A partir de R$ 313.000,00",
      "Para renda a partir de R$ 5.000,00",
    ],
  },
];

const FloorPlans = () => {
  const [activePlan, setActivePlan] = useState<Plan>(plans[0]);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="floor-plans" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <span className="text-accent font-bold tracking-wider text-sm uppercase">
            Plantas
          </span>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Plantas inteligentes para morar ou investir
          </h2>

          <p className="text-muted-foreground font-bold">
            Quatro opções de plantas para você escolher a que melhor se adapta à sua escolha.
          </p>
        </motion.div>

        {/* SELECTOR */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-center gap-4 mb-8 md:mb-12">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setActivePlan(plan)}
              className={`w-full lg:w-auto px-4 py-3 md:px-6 rounded-lg font-medium transition-all text-sm md:text-base ${
                activePlan.id === plan.id
                  ? "bg-accent text-accent-foreground shadow-gold"
                  : "bg-card text-muted-foreground hover:bg-secondary border border-border"
              }`}
            >
              <span className="block">{plan.name}</span>
              <span className="text-xs opacity-80 md:hidden">{plan.size}</span>
            </button>
          ))}
        </div>

        {/* DETAILS */}
        <motion.div
          key={activePlan.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* IMAGE */}
          <div className="bg-card rounded-2xl p-4 md:p-8 shadow-soft border border-border">
            <img
              src={activePlan.image}
              alt={`Planta ${activePlan.name}`}
              loading="lazy"
              decoding="async"
              className="w-full h-auto max-h-[400px] lg:max-h-[500px] object-contain mx-auto"
            />
          </div>

          {/* INFO */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-6">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                {activePlan.name}
              </h3>
              <span className="text-accent text-xl md:text-2xl font-semibold">
                {activePlan.size}
              </span>
            </div>

            {/* STATS */}
            <div
              className={`grid gap-3 md:gap-6 mb-8 ${
                activePlan.balcony ? "grid-cols-3" : "grid-cols-2"
              }`}
            >
              <div className="text-center p-3 md:p-4 bg-secondary rounded-lg">
                <div className="font-display text-xl md:text-2xl font-bold text-foreground">
                  {activePlan.bedrooms}
                </div>
                <div className="text-muted-foreground text-xs md:text-sm">
                  Quartos
                </div>
              </div>

              <div className="text-center p-3 md:p-4 bg-secondary rounded-lg">
                <div className="font-display text-xl md:text-2xl font-bold text-foreground">
                  {activePlan.bathrooms}
                </div>
                <div className="text-muted-foreground text-xs md:text-sm">
                  Banhos
                </div>
              </div>

              {activePlan.balcony && (
                <div className="text-center p-3 md:p-4 bg-secondary rounded-lg">
                  <div className="font-display text-xl md:text-2xl font-bold text-foreground">
                    {activePlan.balcony}
                  </div>
                  <div className="text-muted-foreground text-xs md:text-sm">
                    Varanda
                  </div>
                </div>
              )}
            </div>

            {/* FEATURES */}
            <ul className="space-y-3 mb-8">
              {activePlan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-foreground text-sm md:text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button
              onClick={scrollToContact}
              size="lg"
              className="
                w-full sm:w-auto
                bg-[#8dc63f] text-white
                hover:bg-[#2f6f2f]
                shadow-md shadow-[#8dc63f]/40
                px-8 py-6 text-base font-bold
                transition-colors
              "
            >
              Solicitar Mais Informações
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FloorPlans;
