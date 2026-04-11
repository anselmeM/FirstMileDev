import Hero from '@/components/sections/Hero';
import Intro from '@/components/sections/Intro';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Intro />
      <About />
      <Testimonials />
      <FAQ />
    </>
  );
}
