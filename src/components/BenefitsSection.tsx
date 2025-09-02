import { Volume2, Heart, Award, Guitar } from 'lucide-react';

export function BenefitsSection() {
    const benefits = [
        {
          icon: Volume2,
          title: "Toque de Ouvido",
          desc: "Desenvolva sua percepção musical e toque qualquer música apenas ouvindo, sem depender de cifras ou partituras.",
          gradient: "from-blue-500/20 to-blue-600/20"
        },
        {
          icon: Heart,
          title: "Música Cristã",
          desc: "Repertório completo de hinos e louvores, ideal para quem quer tocar na igreja ou em momentos de adoração.",
          gradient: "from-purple-500/20 to-purple-600/20"
        },
        {
          icon: Guitar,
          title: "Música Popular",
          desc: "Aprenda a tocar os maiores sucessos da música popular brasileira e internacional, do rock ao sertanejo.",
          gradient: "from-green-500/20 to-green-600/20"
        },
        {
          icon: Award,
          title: "Independência Musical",
          desc: "Torne-se um violonista completo e independente, capaz de tocar, improvisar e ensinar outros.",
          gradient: "from-orange-500/20 to-orange-600/20"
        }
      ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Por Que Este Curso é <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Diferente</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative">
              <div className={`absolute -inset-4 bg-gradient-to-br ${benefit.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="relative text-center p-10 bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-800 hover:border-orange-500/30 transition-all duration-300 transform hover:-translate-y-4 h-full">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 group-hover:text-orange-500 transition-colors">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed text-lg">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}