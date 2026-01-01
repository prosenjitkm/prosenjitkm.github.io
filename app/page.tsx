import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

