

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,

  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { motion } from "framer-motion"
import { LinkedinIcon, Mail, Github, MessageCircle } from "lucide-react"
import { Button } from "../../components/ui/button"
import { useEffect } from "react";


export function Container() {


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
    <motion.div 
    initial="hidden"
    animate="visible" 
    variants={variants}
    transition={{ duration: 1.0, ease: 'easeInOut' }} 
  className='flex justify-around items-center max-xl:flex-col max-md:text-sm max-sm:text-exs'>
    <div className="   "><pre className="h-auto w-auto p-4 rounded-md bg-zinc-900 text-lime-500 "> 
      <span className='text-cyan-700'>// Hell0 w0rld :D</span>
      <br />
      <span className="text-yellow-400">{"{"}</span>
    <br />
    &nbsp;&nbsp;"name": <span className='text-white'>"Almir Júnior Araújo Gomes"</span>,
    <br />
    &nbsp;&nbsp;"age": <span className='text-cyan-300 max-md:text-exs'>20</span>,
    <br />
    &nbsp;&nbsp;"occupation": <span className='text-white'>"Front-end Developer"</span>,
    <br />
    &nbsp;&nbsp;"skills": <span className='text-cyan-300'>[</span><span className='text-amber-400'>"TypeScript", "React", "Tailwind.css", "Shadcn/ui"</span><span className='text-cyan-300'>]</span>,
    <br />
    &nbsp;&nbsp;"github": <a target='_blank' href="https://github.com/AlmirJrDev" className='text-white ease-in-out transition-all hover:text-lg '>"https://github.com/AlmirJrDev"</a> <span className='text-cyan-700 animate-pulse '>// {'<-'} Click there :D</span>
    <br />
    <span className="text-yellow-400">{"}"}</span></pre>
    <Drawer >
<DrawerTrigger className='mt-4 bg-zinc-900 rounded-md p-2 w-auto transition-all ease-in-out text-white hover:bg-white hover:text-black max-lg:w-full'>Entrar em contato</DrawerTrigger>
<DrawerContent className='flex justify-center items-center w-96 m-auto border-none bg-zinc-900 h-[50%] '>
<DrawerHeader className='flex justify-center items-center flex-col'>
  <DrawerTitle className='text-white'>Contatos</DrawerTitle>
  <DrawerDescription>Algumas opções para meu contato.</DrawerDescription>


</DrawerHeader>
  <div className='flex justify-center items-center w-auto h-auto '>
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
<DrawerFooter className='flex justify-center items-center'>
  <span className='text-center text-gray-500'>
    fique há vontade para agendar um bate-papo
  </span>
  <DrawerClose>
    <Button variant="outline" 
    className='bg-red-700 hover:bg-red-500  hover:text-white border-none text-white'>
      Cancelar
    </Button>
  </DrawerClose>
</DrawerFooter>
</DrawerContent>
</Drawer>
    </div>
      <div className="bg-gradient-to-r from-red-500 to-orange-500  rounded-md max-xl:hidden">
      <motion.img   src="/almirdesenho.jpeg" className='w-64 rounded-md transition hover:rotate-0 rotate-12 ' alt="" />
</div>
  </motion.div >
  )
}