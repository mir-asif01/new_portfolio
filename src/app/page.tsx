import { GridBackgroundDemo } from "@/components/HeroSection";
import ProjectsComponent from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <section>
      <GridBackgroundDemo/>
      <ProjectsComponent/>
      <Skills/>      
    </section>
  );
}
