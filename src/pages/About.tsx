import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Target, Sparkles, Shield, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Cuidado Integral",
      description: "Acreditamos no tratamento holístico, considerando corpo, mente e espírito como um todo integrado."
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Construímos uma rede de apoio onde terapeutas e pacientes se conectam de forma genuína."
    },
    {
      icon: Target,
      title: "Excelência",
      description: "Selecionamos cuidadosamente profissionais qualificados e comprometidos com resultados reais."
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Garantimos um ambiente seguro, privado e acolhedor para todas as interações."
    },
    {
      icon: Sparkles,
      title: "Transformação",
      description: "Facilitamos jornadas de autoconhecimento e crescimento pessoal sustentável."
    },
    {
      icon: Globe,
      title: "Acessibilidade",
      description: "Democratizamos o acesso a terapias integrativas através da tecnologia."
    }
  ];

  const team = [
    {
      name: "Ana Carolina",
      role: "Fundadora & CEO",
      description: "Terapeuta holística com 15 anos de experiência, apaixonada por conectar pessoas ao seu bem-estar."
    },
    {
      name: "Roberto Santos",
      role: "Diretor de Tecnologia",
      description: "Desenvolvedor com foco em criar soluções que realmente fazem diferença na vida das pessoas."
    },
    {
      name: "Marina Silva",
      role: "Coordenadora de Terapeutas",
      description: "Psicóloga e especialista em terapias integrativas, responsável pela curadoria dos profissionais."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 mb-16">
          <div className="container mx-auto text-center animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Sobre a{" "}
              <span className="bg-gradient-to-r from-primary via-harmonize to-accent bg-clip-text text-transparent">
                HarmoniCare
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Somos uma plataforma dedicada a conectar pessoas em busca de bem-estar 
              com terapeutas qualificados em terapias integrativas. Nossa missão é 
              democratizar o acesso ao cuidado holístico através da tecnologia.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="px-4 mb-16 bg-muted/30 py-16">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-harmonize flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Nossa Missão</h3>
                  <p className="text-muted-foreground">
                    Facilitar o acesso a terapias integrativas de qualidade, 
                    promovendo o equilíbrio e bem-estar de cada indivíduo.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-harmonize to-accent flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Nossa Visão</h3>
                  <p className="text-muted-foreground">
                    Ser referência em saúde integrativa, inspirando uma nova 
                    geração de cuidado com o ser humano completo.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Nossos Valores</h3>
                  <p className="text-muted-foreground">
                    Cuidado genuíno, respeito, ética, excelência e 
                    compromisso com a transformação das pessoas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="px-4 mb-16">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                O Que Nos Move
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nossos valores guiam cada decisão e moldam a experiência que oferecemos
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card 
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-harmonize/20 flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{value.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="px-4 mb-16 bg-muted/30 py-16">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Nossa Equipe
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Profissionais dedicados a transformar o cuidado com a saúde integral
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-harmonize mx-auto mb-4 flex items-center justify-center">
                      <User className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-primary font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="px-4 mb-16">
          <div className="container mx-auto max-w-4xl">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-3xl font-serif font-bold mb-6 text-center">
                  Nossa História
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    A HarmoniCare nasceu de uma visão simples, mas transformadora: 
                    tornar o acesso a terapias integrativas mais fácil e acessível para todos. 
                    Em um mundo cada vez mais acelerado, percebemos a necessidade crescente 
                    de cuidar não apenas do corpo, mas também da mente e do espírito.
                  </p>
                  <p>
                    Fundada em 2024, nossa plataforma conecta pessoas em busca de equilíbrio 
                    com terapeutas qualificados em diversas modalidades: reiki, acupuntura, 
                    aromaterapia, meditação e muito mais. Cada profissional é cuidadosamente 
                    selecionado para garantir qualidade e segurança.
                  </p>
                  <p>
                    Acreditamos que o bem-estar é um direito de todos, e a tecnologia deve 
                    servir como ponte para facilitar essa jornada. Por isso, criamos uma 
                    experiência completa: agendamento simples, chat em tempo real, conteúdos 
                    educativos e uma loja com produtos selecionados para apoiar sua jornada 
                    de autoconhecimento.
                  </p>
                  <p className="font-medium text-foreground">
                    Junte-se a nós nesta jornada de cuidado, equilíbrio e transformação. 
                    Estamos aqui para apoiar cada passo do seu caminho rumo ao bem-estar integral.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// Import User icon for team avatars
import { User } from "lucide-react";

export default About;