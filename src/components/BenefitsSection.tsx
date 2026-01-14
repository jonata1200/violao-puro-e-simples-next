import { Volume2, Heart, Award, Guitar } from 'lucide-react';
import { Section, Container, Grid } from '@/design-system/components/layout';
import { FeatureCard } from '@/design-system/components/patterns';

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
          gradient: "from-primary-500/20 to-primary-600/20"
        }
      ];

  return (
    <Section className="bg-gradient-to-b from-gray-900 to-black">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Por Que Este Curso é <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Diferente</span>
          </h2>
        </div>

        <Grid cols={1} colsMd={2} colsLg={4} gap={8} className="max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative">
              <div className={`absolute -inset-4 bg-gradient-to-br ${benefit.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <FeatureCard
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.desc}
                variant="gradient"
                className="relative"
              />
            </div>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}