import { motion } from "framer-motion";
import { LinkedinIcon, Mail, Github, MessageCircle } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useEffect, useState } from "react";

export function Contact() {

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
        id='contact'
          initial="hidden"
          animate={scrollY > 2000 ? 'visible' : 'hidden'} 
          variants={variants}
          transition={{ duration: 1.0, ease: 'easeInOut' }} 
        className='pt-40'>
        <div className='flex justify-between mb-4 mt-4'>
        <h2 className='text-cyan-700'>// Contact</h2> 
        </div>

        <div className='bg-zinc-900 rounded-md p-4'>

        <div className='flex justify-center items-center text-gray-500'>Algumas opções para meu contato.</div>

    
        <div 

      className='flex justify-center items-center w-auto h-auto'
    >
      <a target='_blank' className='flex flex-col justify-center items-center' href="https://www.linkedin.com/in/almirjrdev/"> 
        <Button variant="link" className='flex-col h-auto text-white '>
          <LinkedinIcon className='text-white'/>Linkedin
        </Button>
      </a>
      <a target='_blank' className='flex flex-col justify-center items-center' href="mailto:almirjrag@gmail.com"> 
        <Button variant="link" className='flex-col h-auto text-white '>
          <Mail className='text-white'/>E-mail
        </Button>
      </a>
      <a target='_blank' className='flex flex-col justify-center items-center' 
         href="https://github.com/AlmirJrDev"> 
        <Button variant="link" className='flex-col h-auto text-white '>
          <Github className='text-white'/>GitHub
        </Button>
      </a>
      <a target='_blank' className='flex flex-col justify-center items-center' 
         href="https://wa.me/5544999913452/"> 
        <Button variant="link" className='flex-col h-auto text-white '>
          <MessageCircle className='text-white'/> Whatsapp
        </Button>
      </a>
    </div>
<div className='flex justify-center items-center'>
  <span className='text-center text-gray-500'>
    fique há vontade para agendar um bate-papo
  </span>
 
</div>
</div>
        </motion.section>
  )
}