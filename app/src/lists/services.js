const SERVICES = [
  {
    id: 1,
    type: "Projeto",
    projectType: "Design de Interiores",
    href: "#design",
    imgURL:
      "https://chalet-webapp.s3.amazonaws.com/sections/bilal-mansuri-mGI8b4KFoFM-unsplash.jpg",
    description:
      "Projeto para um espaço novo (em fase de construção) ou a remodelar. Inclui:",
    detail1:
      "Desenhos tecnicos (layout, planta de tetos, localização de luminárias, mobiliário à medida, entre outros) para visualização do resultado final e Moodboard (conceito & inspiração do Projeto).",
    detail2:
      "Projeto em formato ConceptBoard ou Projeto 3D (mais aconselhado).",
    detail3: "Mobiliario desenhado a medida.",
    detail4:
      "Lista detalhada dos materiais e artigos selecionados (não inclui orçamento dos serviços de construção civil).",
    step1Title: "REUNIÃO",
    step1:
      "Após aprovação do orçamento, é marcada uma Reunião com o cliente para definir gostos, necessidades e funcionalidade do(s) espaço(s).",
    step2Title: "DESENHOS TÉCNICOS",
    step2:
      " Tendo em conta o planeamento, organização e disposição do espaço novo ou a reabilitar, sao elaborados os desenhos técnicos finais",
    step3Title: "ESCOLHA DE CORES & TEXTURA & ACABAMENTOS",
    step3:
      "Após aprovação, avançamos para a escolha de todas as cores, texturas e materiais de acabamentos (revestimentos, tetos, pavimentos), iluminacão, desenho  e selecção de mobiliário à medida, entre outros.",
    step4Title: "ACOMPANHAMENTO DE OBRA",
    step4:
      "Caso seja do seu interesse, o serviço de acompanhamento e assistência à obra pode ser incluído.",
  },
  {
    id: 2,
    type: "Projeto",
    projectType: "Decoração de Interiores",
    href: "#decor",
    imgURL:
      "https://chalet-webapp.s3.amazonaws.com/sections/alona-gross--1ZOkqWiI98-unsplash.jpg",
    description:
      "Projeto focado numa melhoria estética e funcional do espaço, com reduzida ou sem necessidade de execução de obra. Inclui:",
    detail1:
      "Desenhos técnicos - plantas e cortes em 2D e de mobiliário (caso haja mobiliário desenhado à medida) para visualização do resultado final. Moodboard (conceito & inspiração do Projeto).",
    detail2: "Projeto em formato ConceptBoard ou Projeto 3D",
    detail3: "Proposta de Layout.",
    detail4: "Lista detalhada dos materiais e artigos selecionados",
    step1Title: "REUNIÃO",
    step1:
      "Após aprovação do orçamento, é marcada uma reunião com o cliente para definir gostos, necessidades e funcionalidade do espaço.",
    step2Title: "ELABORACÃO E ENVIO DE LAYOUT",
    step2:
      "Envio de layout tendo em conta a organização e disposição do espaço e respetivo mobiliário.",
    step3Title: "ESCOLHA DE CORES & TEXTURA & ACABAMENTOS",
    step3:
      "Após aprovação do layout e moodboard, avançamos para a escolha das cores, texturas (estofos, cortinas, tapetes), mobiliário (que pode ou não ser desenhado à medida), peças decorativas, iluminação, entre outros.",
    step4Title: "MONTAGEM FINAL DO ESPAÇO (opcional)",
    step4:
      "Caso o cliente opte por não usufruir do serviço de montagem final, ficará com toda a lista de artigos, ficando responsável pela sua aquisição e montagem.",
  },
  {
    id: 3,
    type: "CONSULTORIA ONLINE",
    projectType: "Decoração de Interiores",
    href: "#online",
    imgURL:
      "https://chalet-webapp.s3.amazonaws.com/sections/hannah-busing-f0iHba5bSlQ-unsplash.jpg",
    description:
      "Melhoria ao nível funcional e/ou estético de um ou mais espaços da sua casa, não incluindo assim um projeto técnico detalhado. Não estão incluídos projetos de cozinhas e instalações sanitárias.",
    detail1:
      "Planta Simples com a disposição das principais peças de mobiliário (layout).",
    detail2: "Projeto em formato ConceptBoard.",
    detail3:
      "Lista detalhada dos materiais e artigos selecionados (artigos de lojas físicas de fácil acesso ou de lojas com venda online).",
    detail4: "Paleta de cores, Texturas e Materiais escolhida.",
    step1Title: "QUESTIONARIO",
    step1:
      "Após aprovação do orçamento, entramos em contacto com o cliente e é enviado um questionário para perceber principais gostos, necessidades e funcionalidades pretendidas para o espaço a decorar (o cliente pode e deve enviar fotografias de inspiração).",
    step2Title: "IMPLEMENTACÃO",
    step2:
      "Após receber o projeto, o cliente só tem de o implementar, ao seu ritmo.",
  },

  {
    id: 4,
    type: "Consultoria Complementar",
    projectType: "Decoração de Interiores",
    href: "#complementar",
    imgURL:
      "https://chalet-webapp.s3.amazonaws.com/sections/stephanie-harvey-aK53f8eAzck-unsplash.jpg",
    description:
      "Projeto com o objetivo de dar um toque especial ao espaço. Projetos em que existe a maioria da mobília (ex. sofá, mesa, cadeiras) mas é necessário um suporte na escolha ou conjugação de objetos decorativos.",
    detail1:
      "Paleta de cores (totalmente nova ou a partir de uma cor já existente no espaço e que o cliente pretenda mesmo manter)",
    detail2:
      "Sugestão de todo o tipo de artigos decorativos ou ate mobiliário (ex. almofadas, tapetes);",
    detail3:
      "Conselhos sobre como integrar estes elementos na decoração (ex. forma correta de colocar os tapetes ou cortinados, conjugação de almofadas)",
    detail4: "Lista detalhada dos artigos propostos a adquirir.",
    step1Title: "COM APOIO OU SEM APOIO",
    step1:
      "A Consultoria Complementar é um serviço maioritariamente online mas há duas formas de o finalizar: Sem apoio do Chalet - o cliente fica responsável pela compra de todas as peças e pela colocação das mesmas no espaço OU Com apoio do CHALET - Inclui gestão das compras, encomendas e montagem final do espaço - poupança de tempo e dinheiro! (Válido apenas para a região da Grande Lisboa).",
  },

  {
    id: 5,
    type: "Home",
    projectType: "Staging",
    href: "#staging",
    imgURL:
      "https://chalet-webapp.s3.amazonaws.com/sections/minh-pham-OtXADkUh3-I-unsplash.jpg",
    description:
      "Destinado a imóveis para vender ou arrendar (longa duração ou temporário). Este serviço permite uma valorização do seu imóvel.",
    detail1: "Imóvel mais atractivo",
    detail2: "Imóvel mais funcional",
    detail3: "Ajuda o cliente a visualizar todo o potencial do espaço.",
    detail4: "Imovel com maior potencial de negocio",
    step1:
      "Contacte-nos para saber como podemos ajudá-lo, consoante as suas necessidades e orçamento.",
  },
];

export default SERVICES;
