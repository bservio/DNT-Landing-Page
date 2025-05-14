const talkAbertura = {
  id: 1,
  title: "Talk de Abertura",
  speaker: {
    name: "Samuel Nascimento",
    desc: "Secretário de Estado da Administração do Piauí",
    image:"/img/palestrantes/4dnt/samuel-nascimento-secretario-adm-piaui.webp"
  },
  date: "2025-05-28",
  start: "19:45",
  finish:"20:00",
  location: "Espaço CEV",
   
}

const firstDay = [
  {
    id: 1,
    title: "Talk de Abertura",
    speakers: [{
      name: "Samuel Nascimento",
      desc: "Secretário de Estado da Administração do Piauí",
      image:"/img/palestrantes/4dnt/samuel-nascimento-secretario-adm-piaui.webp"
    }],
    date: "28/05/2025",
    start: "19:45",
    finish:"20:00",
    location: "Espaço CEV",
    
  },
  {
    id: 2,
    title: "Palestra - Desigualdade de gênero no âmbito do Poder Judiciário: desafios da atuação no direito de família",
    speakers: [{
      name: "Miriane Ferreira",
      desc: "Advogada, mestre em Direito e Tecnologia",
      image:"/img/palestrantes/4dnt/Miriane_Ferreira.webp"
    }],
    date: "28/05/2025",
    start: "20:00",
    finish:"21:00",
    location: "Espaço CEV",
    
  },
]

const secondDayMainStage = [
  {
    id: 1,
    title: "Palestra - O que Trump quer? E como isso afeta o Brasil?",
    speakers: [{
      name: "Joel Pinheiro",
      desc: "Economista, mestre em filosofia pela USP",
      image:"/img/palestrantes/4dnt/Joel_Pinheiro2.webp"
    }],
    date: "29/05/2025",
    start: "16:00",
    finish:"17:00",
    location: "Espaço CEV",
    
  },
  {
    id: 2,
    title: "Batalha de Startups 6,28",
    date: "29/05/2025",
    start: "17:30",
    finish:"18:30",
    location: "Espaço CEV",
    eventImg: "/img/Batalha_Startups.webp"
  },
  {
    id: 3,
    title: "Palestra - O ontem, o hoje e o amanhã do mercado de tecnologia",
    speakers: [{
      name: "Gustavo Guanabara",
      desc: "CEO do Curso em Vídeo",
      image:"/img/palestrantes/4dnt/Gustavo_Guanabara2.webp"
    }],
    date: "29/05/2025",
    start: "20:30",
    finish:"21:30",
    location: "Espaço CEV",
    
  },

] 

const secondDayWorkshops = [
  {
    id: 1,
    title: "Desenvolvimento de uma experiência UX",
    speakers: [
      {
        name: "Kaielly Vitória",
        desc: "iCEV",
        
      },
      {
        name: "Millena Ribeiro",
        desc: "iCEV",
        
      },
    ],
    date: "29/05/2025",
    start: "14:15",
    finish:"15:30",
    location: "Sala 03",
    enucompi: false,
    type: "Oficina"
  },
  {
    id: 2,
    title: "Palestra - Aplicações de Aprendizagem de Máquina na Área de Saúde.",
    speakers: [
      {
        name: "Vinicius Machado",
        desc: "iCEV",
        
      },
      
    ],
    date: "29/05/2025",
    start: "14:15",
    finish:"15:30",
    location: "Sala 10",
    enucompi: true,
    type: "Palestra"
  },
  {
    id: 2,
    title: "Introdução aos Smart Contracts",
    speakers: [
      {
        name: "James Sousa",
        desc: "UFPI", 
      },
      {
        name: "Frank César",
        desc: "UFPI", 
      },
      
    ],
    date: "29/05/2025",
    start: "17:30",
    finish:"20:00",
    location: "Sala 03",
    enucompi: true,
    type: "Minicurso"
  },
  {
    id: 3,
    title: "Inteligência Artificial e o Poder Judiciário: mapeamento e regulamentação",
    speakers: [
      {
        name: "Berto Igor Caballero",
        image: "/img/palestrantes/4dnt/Berto_Igor.webp" 
      },
      
    ],
    date: "29/05/2025",
    start: "17:30",
    finish:"18:45",
    location: "Sala 10",
    enucompi: false,
    type: "Oficina"
  },
  {
    id: 4,
    title: "Ferramentas tecnológicas para crescimento empresarial organizado",
    speakers: [
      {
        name: "Júnior Santana",
        image: "/img/palestrantes/4dnt/Santana.webp" 
      },
      
    ],
    date: "29/05/2025",
    start: "17:30",
    finish:"18:45",
    location: "Sala 1",
    enucompi: false,
    type: "Oficina"
  },
  {
    id: 5,
    title: "Desenvolvimento de Experiência Digital Imersiva Através do Mapeamento de Vídeo em tempo real com Redes Neurais",
    speakers: [
      {
        name: "Héder Rodrigues",
        desc: "UFPI"
      },
      {
        name: "Iallen Gabio",
        desc: "IFPI"
      },
      
    ],
    date: "29/05/2025",
    start: "17:30",
    finish:"20:00",
    location: "Sala 11",
    enucompi: true,
    type: "Minicurso"
  },
  {
    id: 6,
    title: "Como Criar seu Próprio Assistente de Pesquisa Científica com LangGraph",
    speakers: [
      {
        name: "Larissa Nascimento",
        desc: "IFPI"
      },
      {
        name: "Ricardo Sekeff",
        desc: "IFPI"
      },
      
    ],
    date: "29/05/2025",
    start: "17:30",
    finish:"20:00",
    location: "Sala 04",
    enucompi: true,
    type: "Minicurso"
  },
  {
    id: 7,
    title: "Advocacia de Impacto: como transformar vidas através do Direito da Saúde e da Inclusão",
    speakers: [
      {
        name: "Laura Nascimento",
        image: "/img/palestrantes/4dnt/Laura_Nascimento.webp"
      },
      
    ],
    date: "29/05/2025",
    start: "17:30",
    finish:"18:45",
    location: "Sala 02",
    enucompi: false,
    type: "Oficina"
  },
  {
    id: 8,
    title: "JOB FAIR",
    eventImg: "/img/Job_fair_blog.webp",
    date: "29/05/2025",
    start: "17:30",
    finish:"20:00",
    location: "Sala 05",
    enucompi: false,
  },
  {
    id: 9,
    title: "Direito do trabalhador à desconexão",
    speakers: [
      {
        name: "Liana Chaib",
        image: "/img/palestrantes/4dnt/Liana_Chaib.webp"
      },
      
    ],
    date: "29/05/2025",
    start: "19:00",
    finish:"20:00",
    location: "Sala 10",
    enucompi: false,
    type: "Oficina"
  },
  {
    id: 10,
    title: "Como construir um perfil global a partir do Brasil: oportunidades de mercado intercâmbio e parcerias além da sala de aula",
    speakers: [
      {
        name: "Lara Ferreira",
        image: "/img/palestrantes/4dnt/Lara_Fernanda.webp"
      },
      
    ],
    date: "29/05/2025",
    start: "19:00",
    finish:"20:00",
    location: "Sala 1",
    enucompi: false,
    type: "Oficina"
  },
  {
    id: 11,
    title: "Inovação e coragem: como construir um negócio inovador num mercado cheio de tabus",
    speakers: [
      {
        name: "Laís Bezerra",
      },
      
    ],
    date: "29/05/2025",
    start: "19:00",
    finish:"20:00",
    location: "Sala 2",
    enucompi: false,
    type: "Oficina"
  },
  
]

const thirdDayMainStage = [
  {
    id: 1,
    title: "LinkedIn de A - Z: Estratégias para Geração de Conteúdo, Autoridade e Negócios",
    speakers: [{
      name: "Cristiano Santos",
      desc: "LinkedIn Top Voice",
      image:"/img/palestrantes/4dnt/Cristiano_Santos.webp"
    }],
    date: "30/05/2025",
    start: "16:00",
    finish:"17:00",
    location: "Espaço CEV",
    
  },
  {
    id: 2,
    title: "Batalha de Startups 6,28 - Final",
    date: "30/05/2025",
    start: "17:30",
    finish:"18:30",
    location: "Espaço CEV",
    eventImg: "/img/Batalha_Startups.webp"
  },
  {
    id: 3,
    title: "NeuroHacks: decodificando a mente para uma inovação centrada em pessoas.",
    speakers: [{
      name: "Perla Amabile",
      desc: "Co-fundadora da Be Intelligence",
      image:"/img/palestrantes/4dnt/Perla.webp"
    }],
    date: "30/05/2025",
    start: "20:30",
    finish:"21:30",
    location: "Espaço CEV",
    
  },
]

const thirdDayWorkshops = [
  {
    id: 1,
    title: "Palestra - Oportunidades Geradas pelas Novas Tecnologias",
    speakers: [
      {
        name: "Gildário Lima",
        desc: "UFDPar",
        
      },
    ],
    date: "30/05/2025",
    start: "14:15",
    finish:"15:30",
    location: "Sala 03",
    enucompi: true,
    type: "Palestra"
  },
  {
    id: 2,
    title: "Deep Learning na Prática: Classificando Imagens Faciais com Redes Neurais Convolucionais",
    speakers: [
      {
        name: "Rodrigo Veras",
        desc: "UFPI",
        
      },
      {
        name: "Nazareno Rodrigues",
        desc: "IFPI",
        
      },
      {
        name: "Caio Pereira",
        desc: "UFPI",
        
      },
    ],
    date: "30/05/2025",
    start: "17:30",
    finish:"20:00",
    location: "Sala 03",
    enucompi: true,
    type: "Minicurso"
  },
  {
    id: 3,
    title: "Automação de Tarefas com APIs: Integração entre Google Calendar e WhatsApp para Otimização de Processos",
    speakers: [
      {
        name: "Vanessa Cunha",
        desc: "IFPI",
        
      },
      {
        name: "Ricardo Sekeff",
        desc: "IFPI",
        
      },
      {
        name: "Luis Guilherme",
        desc: "IFPI",
        
      },
      {
        name: "Francusnilto Santos",
        desc: "IFPI",
        
      },
    ],
    date: "30/05/2025",
    start: "17:30",
    finish:"20:00",
    location: "Sala 04",
    enucompi: true,
    type: "Minicurso"
  },
  {
    id: 4,
    title: "Carreira, comunicação e atuação na área tributária.",
    speakers: [
      {
        name: "Fernanda Nogueira",
        image: "/img/palestrantes/4dnt/Fernanda_Nogueira.webp"
        
      },
    ],
    date: "30/05/2025",
    start: "17:30",
    finish:"18:30",
    location: "Sala 10",
    enucompi: false,
    type: "Oficina"
  },
  {
    id: 5,
    title: "Aplicação das técnicas de Rigging e Normal Map na Unity para criar animações 2D com profundidade e iluminação dinâmica a partir de uma única imagem",
    speakers: [
      {
        name: "Iallen Gabio",
        desc: "IFPI"
        
      },
      {
        name: "Isabele Sousa",
        desc: "IFPI"
        
      },
      {
        name: "Héder Rodrigues",
        desc: "IFPI"
        
      },
    ],
    date: "30/05/2025",
    start: "17:30",
    finish:"20:00",
    location: "Sala 11",
    enucompi: true,
    type: "Minicurso"
  },
  {
    id: 6,
    title: "Comunicar não é dom, é técnica",
    speakers: [
      {
        name: "Lídia Brito",
        
      },
    ],
    date: "30/05/2025",
    start: "17:30",
    finish:"18:30",
    location: "Sala 1",
    enucompi: false,
    type: "Oficina"
  },
  {
    id: 7,
    title: "Lançamento Livro IV DNT",
    
    date: "30/05/2025",
    start: "17:30",
    finish:"18:30",
    location: "Sala 2",
    enucompi: false,
    type: "Oficina"
  },

  {
    id: 9,
    title: "Escrita jurídica e IA",
    speakers: [
      {
        name: "Adonias Ribeiro",
        
      },
      {
        name: "Nazareno Reis",
        
      },
    ],
    date: "30/05/2025",
    start: "19:00",
    finish:"20:00",
    location: "Sala 10",
    enucompi: false,
    type: "Oficina"
  },
  {
    id: 10,
    title: "IA e Tomada de Decisão Estratégica",
    speakers: [
      {
        name: "Rebeca Nepomuceno",
        image: "/img/palestrantes/4dnt/Rebeca_Nepomuceno.webp"
        
      },
    ],
    date: "30/05/2025",
    start: "19:00",
    finish:"20:00",
    location: "Sala 1",
    enucompi: false,
    type: "Oficina"
  },
  {
    id: 11,
    title: "Como se destacar no mercado digital com estratégias de conteúdo, marca pessoal e inteligência artificial",
    speakers: [
      {
        name: "Neto Ribeiro",
        image: "/img/palestrantes/4dnt/Neto_Ribeiro.webp"
        
      },
    ],
    date: "30/05/2025",
    start: "19:00",
    finish:"20:00",
    location: "Sala 2",
    enucompi: false,
    type: "Oficina"
  },
  {
    id: 12,
    title: "Milionários planejam. Amadores apostam.",
    speakers: [
      {
        name: "Bruno Agrélio",
        image: "/img/palestrantes/4dnt/Bruno.webp"
        
      },
    ],
    date: "30/05/2025",
    start: "19:00",
    finish:"20:00",
    location: "Sala 6",
    enucompi: false,
    type: "Oficina"
  },
]

export {
  talkAbertura,
  firstDay,
  secondDayMainStage,
  secondDayWorkshops,
  thirdDayMainStage,
  thirdDayWorkshops
}