
import styles from "./page.module.css";
import Landing from './components/landing';
import Projects from './components/projects';
import Aboutus from './components/aboutus';
import Fourthcomponent from './components/fourthcomponent';
import Oursponser_footer from './components/oursponser_footer';
export default function Home() {
  return (
    <main className={styles.main}>
      <Landing />
      {/* <Projects />
      <Aboutus />
      <Fourthcomponent />
      <Oursponser_footer /> */}
    </main>
  );
}
