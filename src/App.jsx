import { Footer } from "./components/Footer.jsx";
import { Main } from "./components/Main.jsx";
import { Project } from './components/Project';
import { Nav } from './components/Nav';
import { Tech } from "./components/Tech.jsx";

function App() {
  return (
    <>
      <Nav />
      <Main />
      <Tech />
      <Project />
      <Footer />
    </>
  );
}

export default App;
