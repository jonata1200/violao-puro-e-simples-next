// src/components/TestimonialsSection.tsx
"use client";

import { Section, Container, Grid } from '@/design-system/components/layout';
import { TestimonialCard } from '@/design-system/components/patterns';

export function TestimonialsSection() {
    const testimonials = [
        { videoSrc: "/videos/depoimento-3.mp4" },
        { videoSrc: "/videos/depoimento-2.mp4" },
        { videoSrc: "/videos/depoimento-1.mp4" }
    ];

  return (
    <Section id="depoimentos" className="bg-gray-900">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            O Que Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Alunos Dizem</span>
          </h2>
          <p className="text-xl text-gray-400">Histórias reais de transformação musical</p>
        </div>

        <Grid cols={1} colsMd={2} colsLg={3} gap={8} className="max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              videoSrc={testimonial.videoSrc}
              aspectRatio="vertical"
              showInitialPlayIcon={true}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}