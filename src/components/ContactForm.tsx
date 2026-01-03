import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xnjadaza", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Sucesso!",
          description: "Mensagem enviada! Entraremos em contato em breve.",
        });
        setFormData({ name: "", email: "", phone: "" });
      } else {
        throw new Error("Erro ao enviar");
      }
    } catch {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível enviar. Tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-cream-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* FORMULÁRIO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1"
          >
            <div className="bg-[#cfeac3] rounded-2xl p-6 sm:p-8 shadow-soft max-w-xl mx-auto">

              <span className="text-accent font-medium tracking-wider text-sm uppercase">
                Contato
              </span>

              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mt-3 mb-4">
                Agende Sua Visita
              </h2>

              <p className="text-muted-foreground mb-6">
                Preencha o formulário e nossa equipe entrará em contato.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                  name="name"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-14"
                />

                <Input
                  type="email"
                  name="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-14"
                />

                <Input
                  name="phone"
                  placeholder="Seu telefone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="h-14"
                />

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-[#8dc63f] text-white
                    hover:bg-[#2f6f2f]
                    shadow-md shadow-[#8dc63f]/30
                    text-base font-bold
                    transition-colors"
                >
                  {isSubmitting ? "Enviando..." : (
                    <>
                      Quero ser contactado(a)
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* MAPA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2"
          >
            <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-soft max-w-xl mx-auto">
              <div className="relative aspect-video">
                <iframe
                  src="https://www.google.com/maps?q=Rua+Grauçá,+200+-+Vila+Sônia,+São+Paulo+-+SP&output=embed"
                  className="absolute inset-0 w-full h-full grayscale-[30%]"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>

              <div className="p-4 bg-black text-white">
                <p className="text-sm opacity-80">Endereço</p>
                <p className="font-semibold">
                  Rua Grauçá, 200 – Vila Sônia
                </p>
                <p className="text-xs opacity-70">
                  São Paulo – SP • 05626-020
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
