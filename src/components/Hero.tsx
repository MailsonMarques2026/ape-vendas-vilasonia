import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/Gallery/fachada.gif"; 

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFeatures = () => {
    document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-top md:bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 md:pt-32 text-center">
        <motion.span
          initial={{ opacity: 0, y: 1 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block mb-6 rounded-full border border-gold/40 px-5 py-2 text-sm text-[#8dc63f] font-bold tracking-wider text-sm uppercase"
        >
          Lançamento Exclusivo na Vila Sônia
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6"
        >
          Financiamos com Minha Casa Minha Vida.
          
        <span className="block text-[#8dc63f] font-extrabold drop-shadow-sm mt-2">
          Preço promocional até 31 de Janeiro: à partir de 201.000,00!
        </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg text-primary-foreground/80 md:text-3xl mb-10"
        >
         
        More a 500m do Metrô Vila Sônia no melhor condominio, tendo lazer de alto padrão com mais de 35 opções.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg text-primary-foreground/80 md:text-3xl mb-10"
        >
         
        Studios, 1 e 2 dormitórios ao lado do metrô Vila Sônia
        Lazer de alto padrão, diferenciais exclusivos e financiamento pela Caixa (Minha Casa MinhaVida)
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Primary */}
            <Button
              size="lg"
              onClick={scrollToContact}
              className="
                          bg-accent text-accent-foreground
                          hover:bg-[#2f6f2f]
                          shadow-md
                          px-8 py-6 text-base
                          transition-colors
                        "

            >
              Quero receber informações
            </Button>
          </motion.div>

        {/* Stats */}
<motion.div
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
  className="
    inline-block
    mb-8 mt-4
    border border-green-400/50
    bg-[#cfeac3]/70
    px-6 py-4
    rounded-xl
  "
>
  {[
    {
      title: "Localização estratégica",
      size:
        "• Rua Grauçá, 200 a 500 metros do metrô Vila Sônia ",
    },
    {
      size:
       "• 6 minutos do Parque Chácara Jockey",
    },
    {
      size:
       "• 10 minutos do Shopping Butantã", 
    },
    {
       size:
        "• 20 minutos do MorumBis •",
    },  
     
  ].map((item, index) => (
    <div
      key={index}
      className="flex flex-col font-bold items-center text-center gap-2"
    >
      {/* TÍTULO */}
      <span className="text-sm uppercase tracking-wider text-green-600">
        {item.title}
      </span>

      {/* LOCALIZAÇÃO — DESTAQUE */}
      <span className="
        text-base md:text-lg
        font-bold
        text-green-700
        
      ">
        {item.size}
      </span>
    </div>
  ))}
</motion.div>


      </div>
    </section>
  );
};

export default Hero;
