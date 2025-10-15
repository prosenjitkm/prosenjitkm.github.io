import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Resume from "../components/Resume";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}
