import Footer from "@/components/Footer";
import { GridBackgroundDemo } from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsComponent from "@/components/Projects";
import Skills from "@/components/Skills";
import WhatIDo from "@/components/WhatIDo";

export default function Home() {
  return (
    <section>
      {/* <Navbar/> */}
      <GridBackgroundDemo/>
      <ProjectsComponent/>
      <Skills/>
      <WhatIDo/>
      <Footer/>
    </section>
  );
}
