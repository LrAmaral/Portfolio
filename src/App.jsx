import { Footer } from "./components/Footer.jsx";
import { Main } from "./components/Main.jsx";
import { Project } from './components/Project';
import { Nav } from './components/Nav';
import { Tech } from "./components/Tech.jsx";

function App() {
  return (
    <div className="bg-fundo bg-cover bg-no-repeat bg-fixed bg-center">
      <Nav />
      <Main />
      <Tech />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
