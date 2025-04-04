

import { motion } from "framer-motion";
import { Figma, Github } from "lucide-react";
import { useEffect, useState } from "react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "../../components/ui/command";

export function Skills() {

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

    <>
       <motion.section 
        id='skills'
        initial="hidden"
        animate={scrollY > 1000 ? 'visible' : 'hidden'} 
        variants={variants}
        transition={{ duration: 1.0, ease: 'easeInOut' }} 
        className='mt-40'>
        <div className='flex justify-between pt-40'>
        <h2 className='text-cyan-700'>// Skills</h2> 
        </div>

        <Command className="rounded-lg border text-white bg-zinc-900 shadow-md ">
      <CommandInput placeholder="Search..." />
      <CommandList className='max-h-[100%]'>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Languages">
          <CommandItem>
          <img src="/typescript.svg" alt="TypeScript Logo" className="mr-2 h-4 w-4 invert" />
            <span>TypeScript</span>
          </CommandItem>
          <CommandItem>
            <img src="/javascript.svg"  alt="JavaScript Logo"  className="mr-2 h-4 w-4 invert" />
            <span>JavaScript</span>
          </CommandItem>
        
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Framework">
          <CommandItem>
          <img src="/reactjs.svg" alt="React Logo" className="mr-2 h-4 w-4 invert" />
            <span>React.js</span>
          
          </CommandItem>
          <CommandItem>
          <img src="/next.svg" alt="Next.js Logo" className="mr-2 h-4 invert w-4" />
            <span>Next.js</span>
          
          </CommandItem>
      
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Tools">
          <CommandItem>
            <Figma className="mr-2 text-white h-4 w-4" />
            <span>Figma</span>
          
          </CommandItem>
          <CommandItem>
          <img src="/vsc.svg" alt="VS Code Logo" className="mr-2 h-4 w-4 invert" />
            <span>Visual Studio Code</span>
          
          </CommandItem>
          <CommandItem>
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          
          </CommandItem>
        </CommandGroup>
        
      </CommandList>
    </Command>

    </motion.section>
    </>
  )
}