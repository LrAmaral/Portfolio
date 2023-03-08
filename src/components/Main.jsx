import { motion } from "framer-motion";
import { Nav } from "./Nav";


export const Main = () => {
  // function main(){

  //   document.querySelector(".texto");
  //     const palavras = [
  //       '☕ Hello World!',
  //       `👋🏽 I'm Lucas Amaral`,
  //       '🚀 Welcome to my Portfolio'
  //     ]

  //     for(var i = 0; i < palavras.length; i++){
  //       texto.textContent = "palavras";
  //     }
  // }

  return (
    <div id="main" className="bg-fundo bg-cover">
      <Nav />
      <div className="flex flex-row h-screen">
        <div className="text-white not-italic flex flex-col justify-center xs:w-full lg:w-5/6 mx-auto">
          <div className="flex flex-col gap-24 xs:px-6 lg:px-0">
            <motion.h1
              id="texto"
              animate={{ x: 80 }}
              transition={{ type: "spring", stiffness: 20, mass: 0.4 }}
              className="text-2xl leading-[20px] font-extrabold"
            >
              <img src="./logo.svg" alt="logo" className="w-72"/>
            </motion.h1>
            <p className="indent-6 lg:w-2/4 xs:w-full font-normal leading-6 xs:text-base lg:text-xl">
              Bem-vindo ao meu website, aqui você vai conhecer um pouco das
              minhas skills que tenho para oferecer e agregar ao mercado.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};
