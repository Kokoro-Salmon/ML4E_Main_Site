"use client";
import React, { useRef } from "react";
import styles from "./page.module.css";
import Landing from './components/landing';
import Projects from './components/projects';
import Aboutus from './components/aboutus';
import Fourthcomponent from './components/fourthcomponent';
import Oursponser_footer from './components/oursponser_footer';
import Whatdowedo from "./components/whatdowedo";

export default function Home() {
  const projectRef = useRef(null);
  const aboutRef = useRef(null);
  const resourcesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case 'project':
        projectRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'about':
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'resources':
        resourcesRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <main className={styles.main}>
      <Landing scrollToSection={scrollToSection} />
      <div ref={aboutRef}>
        <Aboutus />
      </div>
      <div>
        <Whatdowedo />
      </div>
      <div ref={projectRef}>
        <Projects />
      </div>
      <div ref={resourcesRef}>
        <Fourthcomponent />
      </div>
      <div ref={contactRef}>
        <Oursponser_footer />
      </div>
    </main>
  );
}
