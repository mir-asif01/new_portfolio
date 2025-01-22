import Footer from "@/components/Footer";
import { GridBackgroundDemo } from "@/components/HeroSection";
import ProjectsComponent from "@/components/Projects";
import Skills from "@/components/Skills";
import WhatIDo from "@/components/WhatIDo";

export default function Home() {
  return (
    <section>
      <GridBackgroundDemo/>
      <ProjectsComponent/>
      <Skills/>
      <WhatIDo/>
      <Footer/>
    </section>
  );
}
