import { Star } from 'lucide-react';

export function TestimonialsSection() {
    const testimonials = [
        {
          name: "Carlos Mendes", age: 34, city: "São Paulo, SP", profile: "Iniciante",
          text: "Nunca imaginei que conseguiria tocar violão aos 34 anos. O método do Gezo é incrível! Em 3 meses já estava tocando na minha igreja. Recomendo demais!",
          rating: 5
        },
        {
          name: "Ana Paula Silva", age: 28, city: "Belo Horizonte, MG", profile: "Música de Igreja",
          text: "Como líder de louvor, precisava aperfeiçoar minha técnica. O curso me deu a base que faltava. Agora toco com muito mais confiança e variedade.",
          rating: 5
        },
        {
          name: "Roberto Santos", age: 45, city: "Rio de Janeiro, RJ", profile: "Intermediário",
          text: "Já tocava um pouco, mas estava estagnado. O Gezo me ensinou técnicas que eu nunca tinha visto. Hoje consigo tocar de ouvido qualquer música!",
          rating: 5
        },
        {
          name: "Júlia Oliveira", age: 22, city: "Brasília, DF", profile: "Jovem Iniciante",
          text: "Sempre quis tocar violão mas achava difícil. O curso é muito didático e o professor explica de forma simples. Já estou tocando minhas músicas favoritas!",
          rating: 5
        }
    ];

  return (
    <section id="depoimentos" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            O Que Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Alunos Dizem</span>
          </h2>
          <p className="text-xl text-gray-400">Histórias reais de transformação musical</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-black/50 backdrop-blur-sm border border-gray-800 hover:border-orange-500/30 p-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange-500 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-300 mb-6 text-lg italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                <div className="border-t border-gray-700 pt-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-bold text-orange-500">{testimonial.name}, {testimonial.age} anos</p>
                    <p className="text-sm text-gray-400">{testimonial.profile} • {testimonial.city}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}