export function CourseModulesSection() {
    const modules = [
        { 
          number: "01",
          title: "Módulo 1 - Violão do Zero", 
          desc: [
            "Primeiros Acordes Parte 1 e Parte 2",
            "Aula inicial sobre solo (aquecimento e Ode Alegria)",
            "Afinação com afinador eletrônico e digital",
            "Afinação com método tradicional",
            "Primeira Música (popular)",
            "Primeira Música (Cristã)",
            "Asa Branca (solo no grave e no agudo)",
            "Oração Pela Família (Cristã)",
            "Afinação Tradicional e com afinador digital",
            "Violão iniciação e aperfeiçoamento"
          ], 
        },
        { 
          number: "02",
          title: "Módulo 2 - Batidas", 
          desc: [
            "Batida P Sequência Harmônica de Lá menor e Lá maior",
            "Batida 1", "Batida 2", "Batida 3", "Batida 4", "Batida 5"
          ], 
        },
        { 
          number: "03",
          title: "Módulo 3 - Escalas", 
          desc: [
            "Escala de Dó maior (1 oitava)",
            "Escala de Dó maior (Em duas oitavas na região 1)",
            "Escala de Dó Maior (Modelo 2)",
            "Escala de Dó maior (Modelo 3)",
            "Escala de Dó Maior (modelo 4)",
            "Escala de Ré Maior Modelo 1"
          ], 
        },
        { 
          number: "04",
          title: "Módulo 4 - Hinos", 
          desc: [
            "Grandioso És Tu Aula Nível 1 e Aula Nível 2",
            "A Mensagem da Cruz (Rude Cruz) Aula Nível 1 e Aula Nível 2",
            "Chuvas de Graça Aula Nível 1 e Aula Nível 2",
            "Os Guerreiros e Preparam Aula Nível 1 e Aula Nível 2",
            "Porque Ele Vive Aula Nível 1 e Nível 2"
          ], 
        },
        {
          number: "05",
          title: "Módulo 5 - Música Popular",
          desc: [
            "É Preciso Saber Viver (aula)",
            "Lanterna dos Afogados (Aula Nível 1) e (Aula Nível 2)",
            "O Sol (Aula Nível 1) (Aula Nível 2)"
          ],
        },
        { 
          number: "06",
          title: "Módulo 6 - Campo Harmônico", 
          desc: ["Campo Harmônico"], 
        },
        { 
          number: "07",
          title: "Módulo 7 - Sequências Harmônicas", 
          desc: [
            "Sequências Harmônicas Nível 1", "Sequências Harmônicas Nível 2",
            "Sequências Harmônicas Nível 3", "Sequências Harmônicas Nível 4",
            "Sequências Harmônicas Nível 5"
          ], 
        },
        { 
          number: "08",
          title: "Módulo 8 - Notação Musical", 
          desc: ["Notação Musical Parte 1", "Notação Musical Parte 2", "Notação Musical Parte 3"], 
        },
        { 
          number: "09",
          title: "Módulo 9 - Estrangeiras", 
          desc: ["Hey Jude", "Tudo Que Se Quer"], 
        },
        { 
          number: "10",
          title: "Módulo 10 - Acordes", 
          desc: ["Acordes Maiores"], 
        },
        { 
          number: "11",
          title: "Módulo 11 - Canções de Louvor Nível 1", 
          desc: [
            "Canções em Sol Maior, Ré Maior, Dó Maior", "Canções em Mi Maior, Lá Maior",
            "Canções em Lá Menor, Mi Menor, Si Menor", "Canções em Fá Maior"
          ], 
        },
        { 
          number: "12",
          title: "Módulo 12 - Canções de Louvor Nível 2", 
          desc: [
            "Canções de Louvor Nível 2 Dó Maior", "Canções de Louvor Nível 2 Ré Maior",
            "Canções de Louvor Nível 2 Mi Maior", "Canções de Louvor Nível 2 Fá Maior",
            "Canções de Louvor Nível 2 Sol Maior", "Canções de Louvor Nível 2 Lá Maior",
            "Canções de Louvor Nível 2 Si Maior"
          ], 
        },
        {
            number: "13",
            title: "Módulo 13 - Solos Harmonizados Hinos",
            desc: [
              "Dó Maior Solo Harmonizado de Alvo Mais Que a Neve", "Ré Maior Solo Harmonizado O Bondoso Amigo",
              "Mi Maior Se Tu Minha Alma Solo Harmonizado", "Fá Maior Lugar de Delícias Solo Harmonizado",
              "Sol Maior Rude Cruz Solo Harmonizado", "Lá Maior Grandioso És Tu Solo Harmonizado",
              "Lá Maior Foi Na Cruz Solo Harmonizado", "Lá Maior Deus Velará Por Ti Solo Harmonizado",
              "Mi Maior Manso e Suave Solo Harmonizado", "Sol Maior Saudosa Lembrança Solo Harmonizado",
              "Mi Maior Mais Perto Meu Deus de Ti Solo Harmonizado"
            ],
        },
        {
            number: "14",
            title: "Módulo 14 - Solos Harmonizados",
            desc: [
              "Vencendo Vem Jesus em Lá Maior Solo Harmonizado", "Chuvas de Graça Solo Harmonizado Sol Maior",
              "Última Hora Solo Harmonizado em Mi Maior", "Crer e Observar Solo Harmonizado em Mi Maior",
              "Deixa Penetrar a Luz Solo Harmonizado Mi Maior", "Eu Venho Como Estou Solo Harmonizado",
              "Firme Nas Promessas do Meu Salvador Solo Harmonizado", "Guarda o Contato Solo Harmonizado",
              "Da Linda Pátria Solo Harmonizado", "Sossegai Solo Harmonizado",
              "Tudo Entregarei Solo Harmonizado", "Eterna Graça de Jesus Solo Harmonizado",
              "Sou Feliz Com Jesus Solo Harmonizado", "Porque Ele Vive Solo Harmonizado",
              "Angelical Trombeta Solo Harmonizado"
            ],
        }
      ];

  return (
    <section id="curso" className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            O Que Você Vai <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Dominar</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Módulos completos do curso e o que será abordado em cada um
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {modules.map((item, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-orange-500/50 p-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">{item.number}</span>
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-orange-500 transition-colors flex-1">{item.title}</h3>
                </div>
                <ul className="text-gray-400 leading-relaxed space-y-2 text-sm">
                  {item.desc.map((descItem, descIndex) => (
                    <li key={descIndex} className="flex items-start space-x-2">
                      <span className="text-orange-500 text-xs mt-1">•</span>
                      <span>{descItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}