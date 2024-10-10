import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AboutHome } from "./About";
import { Contact } from "./Contact";
import { Container } from "./Container";

import { Project } from "./Project";
import { Skills } from "./Skills";


export function Home() {

  const location = useLocation();

  useEffect(() => {
    // Aguarda a renderização completa antes de fazer o scroll
    const scrollToElement = () => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Usamos setTimeout para garantir que a página esteja renderizada
    setTimeout(scrollToElement, 1);
  }, [location]);
  return(
    <>

       <Container />
       <main className='p-60 pt-0 max-lg:p-10'>
       <Project />
       <Skills />
       <AboutHome />
       <Contact />
       </main>
   
    </>
   
  )
}
