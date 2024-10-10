

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function AboutHome() {
  const [scrollY, setScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  // Variantes de animação
const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

useEffect(() => {
  const timeout = setTimeout(() => {
    window.scrollTo(0, 0);
  }, 1); // Atraso de 100ms

  return () => clearTimeout(timeout); // Limpa o timeout ao desmontar o componente
}, []);
  return(
    <motion.section  
    id='about'
      initial="hidden"
      animate={scrollY > 1500 ? 'visible' : 'hidden'} 
      variants={variants}
      transition={{ duration: 1.0, ease: 'easeInOut' }} 
    className='flex flex-col pt-40'>
    <div className='flex justify-between mb-4 mt-4'>
    <h2 className='text-cyan-700'>// About-me</h2> 
    </div>
      <motion.div 
     
      className='flex gap-4'>
    <p className='w-10/12 h-64 overflow-y-scroll text-justify text-white bg-zinc-900 pl-4 pr-4 pt-4 rounded-md'>
Olá! Eu sou o Almir Júnior, <br /> <br/> um apaixonado por tecnologia desde os meus 5 anos de idade. Minha jornada no desenvolvimento começou oficialmente em 2021, e desde então, tenho me dedicado a me especializar na área de front-end, onde encontrei minha verdadeira paixão. Utilizo principalmente TypeScript e React no meu dia a dia, tecnologias que me permitem criar aplicações web robustas e modernas <br /> Além disso, tenho um bom conhecimento em Next.js e React Native, o que amplia minha capacidade de trabalhar em diferentes projetos, tanto para web quanto para mobile.
<br /><br />
Atualmente, tenho 20 anos e moro em Hortolândia-SP. Trabalho como desenvolvedor front-end na Grancoffe, uma empresa localizada em Campinas-SP, onde aplico minhas habilidades para criar interfaces de usuário funcionais e esteticamente agradáveis. Ao longo da minha carreira, busco constantemente aprimorar minhas habilidades, mantendo-me atualizado com as últimas tendências do desenvolvimento web e sempre focando em entregar soluções inovadoras.
<br /><br />
Para mim, desenvolvimento é muito mais do que código: é sobre resolver problemas, criar experiências e fazer a diferença no dia a dia das pessoas por meio da tecnologia.
<br /><br />
Se você está procurando alguém com paixão, dedicação e sede de aprendizado, podemos estar no caminho certo para realizar grandes projetos juntos!
</p>



    <img className='size-64 rounded-md' src="https:github.com/almirjrdev.png" alt="" />
    </motion.div>
    <Link to="/about" className='bg-black h-10 rounded-md text-center flex justify-center items-center text-white w-40 mt-4'>Ler mais {'->'}</Link>
    </motion.section>

  )
}