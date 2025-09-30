"use client";

import { useState } from "react";
import { Play, CheckCircle, Brain, Users, Heart, BookOpen, Target, Compass, Sparkles, Phone, Mail, Youtube, Facebook, Instagram, ChevronDown, ChevronUp, Stethoscope, GraduationCap, UserCheck, Baby, Lightbulb, HeartHandshake, MessageCircle } from "lucide-react";

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState<string | null>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const videos = [
    {
      id: "o8N6W6uLpww",
      title: "Tudo passa, tudo muda!",
      thumbnail: "https://img.youtube.com/vi/o8N6W6uLpww/maxresdefault.jpg"
    },
    {
      id: "fcjV6xbCxYw",
      title: "Como lidar com meus sentimentos?",
      thumbnail: "https://img.youtube.com/vi/fcjV6xbCxYw/maxresdefault.jpg"
    },
    {
      id: "1F--bdTRPfU",
      title: "Coloque sua saúde mental em primeiro lugar!",
      thumbnail: "https://img.youtube.com/vi/1F--bdTRPfU/maxresdefault.jpg"
    }
  ];

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Avaliação e Tratamento TDAH/Autismo",
      description: "Diagnóstico e intervenção especializada para adultos",
      image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/ee08f28d-2bed-4e21-bfb9-5f268951f794.jpg",
      fullDescription: "Avaliação neuropsicológica completa para TDAH e Transtorno do Espectro Autista em adultos. Utilizamos protocolos científicos validados, incluindo testes cognitivos, escalas comportamentais e entrevistas estruturadas. O processo inclui: análise do histórico de desenvolvimento, avaliação das funções executivas, atenção, memória e habilidades sociais. Após o diagnóstico, desenvolvemos um plano de intervenção personalizado com estratégias práticas para o dia a dia, orientação familiar e acompanhamento terapêutico especializado.",
      benefits: [
        "Diagnóstico preciso com protocolos científicos",
        "Relatório detalhado para outros profissionais",
        "Plano de intervenção personalizado",
        "Orientação para família e trabalho",
        "Acompanhamento terapêutico especializado"
      ]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Terapia Cognitivo-Comportamental",
      description: "Reprogramação de padrões e recuperação do controle",
      image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/a9b4b25f-280f-42b7-a61e-88349c631ada.png",
      fullDescription: "Abordagem terapêutica focada na modificação de pensamentos disfuncionais e comportamentos inadequados. Trabalhamos com técnicas baseadas em evidências científicas para transtornos de ansiedade, depressão, fobias e problemas de autoestima. O processo inclui: identificação de padrões de pensamento negativos, reestruturação cognitiva, técnicas de relaxamento, exposição gradual e desenvolvimento de habilidades de enfrentamento. Cada sessão é estruturada com objetivos claros e exercícios práticos para aplicação no cotidiano.",
      benefits: [
        "Técnicas baseadas em evidências científicas",
        "Resultados mensuráveis e objetivos",
        "Exercícios práticos para o dia a dia",
        "Desenvolvimento de habilidades de enfrentamento",
        "Acompanhamento do progresso sessão a sessão"
      ]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Psicanálise / Terapia Psicodinâmica",
      description: "Profundidade e mudança estrutural",
      image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/9edd7745-ae89-42dd-b7ae-df26d8645f93.png",
      fullDescription: "Processo terapêutico profundo que busca compreender os aspectos inconscientes que influenciam comportamentos, relacionamentos e escolhas de vida. Através da análise dos sonhos, associação livre e transferência, exploramos conflitos internos, traumas não resolvidos e padrões repetitivos. Esta abordagem é ideal para quem busca autoconhecimento profundo, mudanças estruturais na personalidade e compreensão das origens dos seus sintomas. O processo é individualizado e respeita o tempo único de cada pessoa.",
      benefits: [
        "Autoconhecimento profundo e duradouro",
        "Resolução de conflitos inconscientes",
        "Mudanças estruturais na personalidade",
        "Compreensão das origens dos sintomas",
        "Melhoria significativa nos relacionamentos"
      ]
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Psicopedagogia Clínica",
      description: "Avaliação e intervenção em dificuldades de aprendizagem",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
      fullDescription: "Especialização no diagnóstico e tratamento de dificuldades de aprendizagem em crianças, adolescentes e adultos. Realizamos avaliação psicopedagógica completa incluindo análise das habilidades de leitura, escrita, matemática e raciocínio lógico. Identificamos transtornos como dislexia, discalculia, disgrafia e déficits de atenção que impactam o aprendizado. O tratamento inclui técnicas de reabilitação cognitiva, estratégias de estudo personalizadas, orientação escolar e familiar, além de adaptações curriculares quando necessário.",
      benefits: [
        "Diagnóstico preciso de dificuldades de aprendizagem",
        "Técnicas de reabilitação cognitiva especializadas",
        "Estratégias de estudo personalizadas",
        "Orientação para escola e família",
        "Acompanhamento do progresso acadêmico"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Terapia de Casal Online",
      description: "Foco em resultados e objetivos definidos",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=300&fit=crop",
      fullDescription: "Atendimento especializado para casais que enfrentam dificuldades de comunicação, conflitos recorrentes, infidelidade, problemas de intimidade ou estão considerando separação. Utilizamos técnicas da Terapia Cognitivo-Comportamental de Casal e abordagens sistêmicas para melhorar a comunicação, resolver conflitos de forma construtiva e fortalecer o vínculo afetivo. O processo inclui: avaliação da dinâmica do relacionamento, identificação de padrões disfuncionais, desenvolvimento de habilidades de comunicação e estabelecimento de acordos mútuos.",
      benefits: [
        "Melhoria significativa na comunicação",
        "Resolução construtiva de conflitos",
        "Fortalecimento do vínculo afetivo",
        "Técnicas práticas para o dia a dia",
        "Acompanhamento online flexível e discreto"
      ]
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: "Orientação Vocacional",
      description: "Alinhamento entre talento e escolha profissional",
      image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/a81fc3c8-dd75-4fbe-838d-205bd59a8075.png",
      fullDescription: "Processo estruturado para jovens e adultos que precisam tomar decisões sobre carreira profissional. Utilizamos testes psicológicos validados, análise de interesses, aptidões e personalidade para identificar áreas de maior afinidade e potencial de sucesso. O processo inclui: autoconhecimento profissional, exploração do mercado de trabalho, análise de cursos e profissões, planejamento de carreira e desenvolvimento de estratégias para alcançar objetivos profissionais. Ideal para vestibulandos, profissionais em transição de carreira ou pessoas insatisfeitas com suas escolhas atuais.",
      benefits: [
        "Identificação precisa de aptidões e interesses",
        "Análise detalhada do mercado de trabalho",
        "Planejamento estratégico de carreira",
        "Redução da ansiedade na tomada de decisão",
        "Maior probabilidade de satisfação profissional"
      ]
    }
  ];

  const formations = [
    "Pós-graduação em Neuropsicologia Clínica — FAMEESP (700h)",
    "TDAH e Autismo no Adolescente e Adulto — PUC-Minas (2023-2024)",
    "Psicopedagogia Clínica e Institucional — FAMEESP (600h)",
    "Intervenção ABA para TEA — FAMEESP (720h)",
    "Psicologia Jurídica e Desenvolvimento Infantil — FAMEESP (600h)",
    "Terapia Cognitivo-Comportamental e Saúde Mental",
    "Doutor em Psicoeducação pela Universidade de São Carlos"
  ];

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2D1B69] via-[#3B2F7A] to-[#4A3C8C] text-white overflow-hidden">
        {/* Elementos tecnológicos de fundo com brilho aumentado */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/30 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)]"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border border-white/30 rounded-full shadow-[0_0_25px_rgba(255,255,255,0.3)]"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/30 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)]"></div>
          <div className="absolute top-1/2 right-10 w-40 h-40 border border-white/30 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.3)]"></div>
          
          {/* Linhas conectoras com brilho */}
          <div className="absolute top-20 left-20 w-px h-32 bg-white/30 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
          <div className="absolute top-40 right-32 w-32 h-px bg-white/30 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
          <div className="absolute bottom-32 left-1/3 w-24 h-px bg-white/30 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
          
          {/* Pontos de conexão com brilho */}
          <div className="absolute top-16 left-32 w-2 h-2 bg-white/50 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
          <div className="absolute top-44 right-24 w-2 h-2 bg-white/50 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
          <div className="absolute bottom-28 left-40 w-2 h-2 bg-white/50 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
        </div>

        <div className="relative container mx-auto px-6 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Transforme sua mente.<br />
              <span className="text-[#9D8DF1]">Redescubra sua vida.</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed max-w-4xl mx-auto">
              Pare de conviver com sintomas que roubam seu foco, suas relações e sua energia. 
              <strong className="text-white"> Atendimento online especializado</strong> com método, técnica e um caminho claro para mudar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5519995264250?text=Olá! Gostaria de agendar uma consulta online com o Dr. João Pedro"
                className="bg-[#9D8DF1] hover:bg-[#8B7AE8] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                Agendar Consulta Online
              </a>
              <a 
                href="https://wa.me/5519994594550?text=Dr. João Pedro, gostaria de falar sobre atendimento online"
                className="border-2 border-white text-white hover:bg-white hover:text-[#2D1B69] px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              >
                Falar Direto com o Doutor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section - Sem Jornada */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-16">
              Quem Sou
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Foto do Doutor */}
              <div className="flex justify-center">
                <div className="relative">
                  <img 
                    src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/2b42cfe3-2bb6-4dd0-ac16-46a857beea37.jpg" 
                    alt="Dr. João Pedro do Carmo Dutra" 
                    className="w-full h-auto max-w-md object-contain rounded-2xl"
                  />
                </div>
              </div>

              {/* Conteúdo */}
              <div className="space-y-8">
                <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                  <p>
                    Aos 8 anos recebi dois rótulos: <strong className="text-[#2D1B69]">autismo e altas habilidades</strong>. 
                    Para muitos, isso seria uma sentença. Para mim foi combustível. Nasci em São Carlos, 
                    filho de Jailza e Antenor, caçula dos irmãos Dionatan e Maicon — e essa trajetória me deu 
                    uma visão única sobre neurodivergência e funcionamento mental.
                  </p>
                  <p>
                    Hoje atuo como neuropsicólogo com formação em Psicologia, Psicanálise, Neuropsicologia e Psicopedagogia, 
                    além de pós-graduações específicas (ABA para TEA, TDAH no adulto, TCC e Saúde Mental). 
                    <strong className="text-[#2D1B69]"> Minha prática online</strong> mistura ciência, rigor clínico e uma escuta que vai direto ao ponto.
                  </p>
                </div>
                
                <div className="bg-[#2D1B69] text-white p-8 rounded-2xl">
                  <p className="text-xl font-semibold text-center">
                    Dr. João Pedro do Carmo Dutra<br />
                    <span className="text-[#9D8DF1]">CRP 06175783</span><br />
                    Neuropsicólogo | Especialista em TDAH e Autismo no Adulto
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nova Seção - Minha Jornada */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-16">
              Minha Jornada
            </h2>
            
            <div className="relative">
              {/* Linha vertical */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#9D8DF1]"></div>
              
              <div className="space-y-12">
                <div className="flex items-start space-x-8">
                  <div className="w-16 h-16 bg-[#2D1B69] rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#2D1B69] mb-4">8 anos</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Diagnóstico de autismo e altas habilidades - o início da minha compreensão sobre neurodivergência. 
                      Este momento definiu não apenas quem eu sou, mas também minha missão de ajudar outros que passam por desafios similares.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-8">
                  <div className="w-16 h-16 bg-[#2D1B69] rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#2D1B69] mb-4">Formação Acadêmica</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Graduação em Psicologia e múltiplas especializações em Neuropsicologia, Psicanálise e Psicopedagogia. 
                      Cada formação foi escolhida estrategicamente para construir uma base sólida de conhecimento científico 
                      aplicado à prática clínica.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-8">
                  <div className="w-16 h-16 bg-[#2D1B69] rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#2D1B69] mb-4">Especialização</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Foco em TDAH e Autismo no adulto, combinando experiência pessoal com rigor científico. 
                      Desenvolvi uma abordagem única que integra diferentes correntes teóricas para resultados mais efetivos.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-8">
                  <div className="w-16 h-16 bg-[#9D8DF1] rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#2D1B69] mb-4">Hoje</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Atendimento online especializado, ajudando adultos a transformarem suas vidas através da neuropsicologia. 
                      Minha missão é clara: oferecer um caminho científico e humano para quem busca mudança real e duradoura.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nova Seção - Destaque Avaliação Neuropsicológica */}
      <section className="py-20 bg-gradient-to-br from-[#2D1B69] via-[#3B2F7A] to-[#4A3C8C] text-white relative overflow-hidden">
        {/* Elementos tecnológicos de fundo com brilho aumentado */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-28 h-28 border border-white/40 rounded-full shadow-[0_0_35px_rgba(255,255,255,0.4)]"></div>
          <div className="absolute bottom-32 left-16 w-36 h-36 border border-white/40 rounded-full shadow-[0_0_45px_rgba(255,255,255,0.4)]"></div>
          <div className="absolute top-1/2 left-1/2 w-20 h-20 border border-white/40 rounded-full shadow-[0_0_25px_rgba(255,255,255,0.4)]"></div>
          
          {/* Grid pattern com brilho */}
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px"
          }}></div>
        </div>

        <div className="relative container mx-auto px-6 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Meu Foco Principal
              </h2>
              <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                <strong className="text-[#9D8DF1]">Avaliação Neuropsicológica</strong> especializada para 
                <strong className="text-white"> TDAH e Autismo</strong> em crianças, adolescentes e adultos
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Imagem com brilho aumentado */}
              <div className="flex justify-center">
                <div className="relative">
                  <img 
                    src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/a5f5667c-0716-4ac5-ac13-f3f2783b3920.jpg" 
                    alt="Dr. João Pedro - Avaliação Neuropsicológica" 
                    className="w-full h-auto max-w-md object-contain rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -inset-6 bg-gradient-to-r from-[#9D8DF1]/30 to-transparent rounded-3xl blur-2xl shadow-[0_0_60px_rgba(157,141,241,0.5)]"></div>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#9D8DF1] rounded-full flex items-center justify-center flex-shrink-0">
                      <Baby className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Crianças (6-12 anos)</h3>
                      <p className="text-gray-200">
                        Identificação precoce de TDAH e TEA com protocolos adaptados para a idade. 
                        Avaliação lúdica e acolhedora que respeita o tempo da criança.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#9D8DF1] rounded-full flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Adolescentes (13-17 anos)</h3>
                      <p className="text-gray-200">
                        Avaliação especializada considerando as mudanças neurobiológicas da adolescência. 
                        Foco em funcionamento executivo e adaptação social.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#9D8DF1] rounded-full flex items-center justify-center flex-shrink-0">
                      <UserCheck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Adultos (18+ anos)</h3>
                      <p className="text-gray-200">
                        Diagnóstico tardio de TDAH e Autismo com impacto na vida profissional, 
                        relacionamentos e autoestima. Abordagem compreensiva e sem julgamentos.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                  <h4 className="text-lg font-bold mb-4 text-[#9D8DF1]">Por que escolher minha avaliação?</h4>
                  <ul className="space-y-2 text-gray-200">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#9D8DF1] flex-shrink-0" />
                      <span>Experiência pessoal com neurodivergência</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#9D8DF1] flex-shrink-0" />
                      <span>Protocolos científicos atualizados</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#9D8DF1] flex-shrink-0" />
                      <span>Relatórios detalhados e práticos</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#9D8DF1] flex-shrink-0" />
                      <span>Atendimento online humanizado</span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <a 
                    href="https://wa.me/5519995264250?text=Gostaria de saber mais sobre avaliação neuropsicológica para TDAH e Autismo"
                    className="bg-[#9D8DF1] hover:bg-[#8B7AE8] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl inline-flex items-center space-x-2"
                  >
                    <Stethoscope className="w-5 h-5" />
                    <span>Agendar Avaliação</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formação Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
              Formação e Especializações
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {formations.map((formation, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm">
                  <CheckCircle className="w-6 h-6 text-[#2D1B69] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 font-medium">{formation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section - Melhorada */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Como Posso Ajudar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Atendimento online especializado com planos individuais focados em resultados mensuráveis
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Imagem do Card */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Conteúdo do Card */}
                <div className="p-6">
                  <div className="text-[#2D1B69] mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  {/* Botão para expandir */}
                  <button
                    onClick={() => toggleCard(index)}
                    className="flex items-center justify-between w-full bg-[#2D1B69] hover:bg-[#3B2F7A] text-white px-4 py-2 rounded-lg transition-all duration-300 mb-4"
                  >
                    <span className="font-semibold">
                      {expandedCard === index ? 'Ver Menos' : 'Ver Mais Detalhes'}
                    </span>
                    {expandedCard === index ? 
                      <ChevronUp className="w-5 h-5" /> : 
                      <ChevronDown className="w-5 h-5" />
                    }
                  </button>
                  
                  {/* Botões de Ação */}
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a 
                      href={`https://wa.me/5519995264250?text=Gostaria de saber mais sobre: ${service.title}`}
                      className="bg-[#9D8DF1] hover:bg-[#8B7AE8] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center justify-center space-x-2 flex-1"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>
                    <a 
                      href={`https://wa.me/5519995264250?text=Gostaria de agendar uma consulta sobre: ${service.title}`}
                      className="bg-[#2D1B69] hover:bg-[#3B2F7A] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center justify-center space-x-2 flex-1"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Agendar</span>
                    </a>
                  </div>
                  
                  {/* Conteúdo Expandido */}
                  {expandedCard === index && (
                    <div className="mt-6 space-y-4 animate-in slide-in-from-top duration-300">
                      <div className="border-t pt-4">
                        <h4 className="font-bold text-[#2D1B69] mb-3">Descrição Completa:</h4>
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">
                          {service.fullDescription}
                        </p>
                        
                        <h4 className="font-bold text-[#2D1B69] mb-3">Benefícios:</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start space-x-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-[#9D8DF1] flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          

        </div>
      </section>

      {/* Vídeos Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Assista Antes de Decidir
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja como o Dr. João Pedro explica temas como TDAH e Autismo em adultos de forma prática e direta
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {videos.map((video, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="relative">
                  {isVideoPlaying === video.id ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                      title={video.title}
                      className="w-full h-48 md:h-56"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div 
                      className="relative cursor-pointer group"
                      onClick={() => setIsVideoPlaying(video.id)}
                    >
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-48 md:h-56 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                        <div className="bg-[#2D1B69] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-white fill-current" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://youtube.com/@prof.joaopedrodocarmo1829"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2D1B69] hover:bg-[#3B2F7A] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center space-x-2"
            >
              <Youtube className="w-5 h-5" />
              <span>Ver Mais Vídeos</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2D1B69] to-[#4A3C8C] text-white relative overflow-hidden">
        {/* Elementos tecnológicos de fundo com brilho aumentado */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-1/4 w-32 h-32 border border-white/40 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.4)]"></div>
          <div className="absolute bottom-10 right-1/4 w-24 h-24 border border-white/40 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.4)]"></div>
          <Sparkles className="absolute top-20 right-20 w-12 h-12 text-white/30 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
          <Sparkles className="absolute bottom-20 left-20 w-8 h-8 text-white/30 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
        </div>

        <div className="relative container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">
            Você já perdeu tempo demais.<br />
            <span className="text-[#9D8DF1]">Agora é hora de mudar.</span>
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
            Atendimento online especializado. Resultados que você pode sentir no seu dia a dia.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://wa.me/5519995264250?text=Olá! Gostaria de agendar uma consulta online com o Dr. João Pedro"
              className="bg-[#9D8DF1] hover:bg-[#8B7AE8] text-white px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 hover:scale-105 shadow-2xl inline-flex items-center justify-center space-x-2"
            >
              <Phone className="w-6 h-6" />
              <span>Agendar com a Assessora</span>
            </a>
            <a 
              href="https://wa.me/5519994594550?text=Dr. João Pedro, gostaria de falar sobre atendimento online"
              className="border-2 border-white text-white hover:bg-white hover:text-[#2D1B69] px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <Phone className="w-6 h-6" />
              <span>Falar Direto no WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Redes Sociais Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Conecte-se Comigo
            </h2>
            <p className="text-xl text-gray-600">
              Acompanhe conteúdos sobre saúde mental e neuropsicologia
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center max-w-2xl mx-auto">
            <a 
              href="https://youtube.com/@prof.joaopedrodocarmo1829"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 bg-[#2D1B69] hover:bg-[#3B2F7A] text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
            >
              <Youtube className="w-6 h-6" />
              <span className="font-semibold">YouTube</span>
            </a>
            
            <a 
              href="https://www.facebook.com/share/19TBTfFrGT/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 bg-[#2D1B69] hover:bg-[#3B2F7A] text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
            >
              <Facebook className="w-6 h-6" />
              <span className="font-semibold">Facebook</span>
            </a>
            
            <a 
              href="https://www.instagram.com/psicologo.joaopdocarmo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 bg-[#2D1B69] hover:bg-[#3B2F7A] text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
            >
              <Instagram className="w-6 h-6" />
              <span className="font-semibold">Instagram</span>
            </a>
          </div>

          <div className="text-center mt-12 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+5519995264250"
                className="flex items-center space-x-2 text-[#2D1B69] hover:text-[#3B2F7A] font-semibold"
              >
                <Phone className="w-5 h-5" />
                <span>Assessora: (19) 99526-4250</span>
              </a>
              <a 
                href="tel:+5519994594550"
                className="flex items-center space-x-2 text-[#2D1B69] hover:text-[#3B2F7A] font-semibold"
              >
                <Phone className="w-5 h-5" />
                <span>Dr. João Pedro: (19) 99459-4550</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-[#2D1B69] text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg font-semibold mb-2">
            Dr. João Pedro do Carmo Dutra
          </p>
          <p className="text-[#9D8DF1] mb-4">
            CRP 06175783 | Neuropsicólogo | Especialista em TDAH e Autismo no Adulto
          </p>
          <p className="text-gray-300 text-sm">
            Atendimento online especializado • Consultas por videoconferência
          </p>
        </div>
      </footer>

      {/* CTA Fixo Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#2D1B69] p-4 shadow-2xl lg:hidden z-50">
        <a 
          href="https://wa.me/5519995264250?text=Olá! Gostaria de agendar uma consulta online com o Dr. João Pedro"
          className="bg-[#9D8DF1] hover:bg-[#8B7AE8] text-white px-6 py-3 rounded-full font-bold transition-all duration-300 w-full text-center block"
        >
          Agendar Consulta Online
        </a>
      </div>
    </div>
  );
}