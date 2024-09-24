
import CartoonPhoto from './assets/almirdesenho.jpeg'
import JS from './assets/javascript.svg'
import TS from './assets/typescript.svg'
import React from './assets/reactjs.svg'
import Next from './assets/next.svg'
import Visual from './assets/vsc.svg'

import { motion, useAnimation } from "framer-motion"



import { Switch } from './components/ui/switch'
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

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import { Button } from "@/components/ui/button"

import {
  NavigationMenu,
  NavigationMenuContent,

  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,

} from "@/components/ui/navigation-menu"
import { Figma, Github, LinkedinIcon, Mail, MessageCircle } from 'lucide-react'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,

} from "@/components/ui/command"
import { useEffect} from 'react'




function App() {

  const controls = useAnimation();

  useEffect(() => {
    // Força a página a rolar para o topo ao carregar
    window.scrollTo(0, 0);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        controls.start("hidden");
      } else {
        controls.start("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  const scrollVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: -20, transition: { duration: 0.5 } }
  };

  return (
    <>
      <motion.header  variants={scrollVariants}
  initial="visible"
  animate={controls} className='flex items-center justify-around mb-24 gap-2'>
      <div className='fixed flex items-center gap-32 mt-10'>
      <motion.div
        animate={controls} // Animação controlada pelo Framer Motion
      >
        <h1 className='text-white'>AlmirJrDev</h1>
      </motion.div>

   

      <NavigationMenu className='bg-white rounded-b-md'>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-23 lg:grid-cols-[.75fr_1fr]">
                  <li>Teste</li>
                </ul>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Sobre</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-23 lg:grid-cols-[.75fr_1fr]">
                  <li>Teste</li>
                </ul>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Projetos</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-23 lg:grid-cols-[.75fr_1fr]">
                  <li>Teste</li>
                </ul>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Conta</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-23 lg:grid-cols-[.75fr_1fr]">
                  <li>Teste</li>
                </ul>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <motion.div
        animate={controls} // Controle de animação aplicado também ao Switch
      >
        <Switch />
      </motion.div>
    </div>

   </motion.header> 
      <div className='flex justify-around items-center'>
        <div className="   "><pre className="h-auto p-4 rounded-md bg-zinc-900 text-lime-500"> 
          <span className='text-cyan-700'>// Hell0 w0rld :D</span>
          <br />
          <span className="text-yellow-400">{"{"}</span>
        <br />
        &nbsp;&nbsp;"name": <span className='text-white'>"Almir Júnior Araújo Gomes"</span>,
        <br />
        &nbsp;&nbsp;"age": <span className='text-cyan-300 text-sm'>24</span>,
        <br />
        &nbsp;&nbsp;"occupation": <span className='text-white'>"Front-end Developer"</span>,
        <br />
        &nbsp;&nbsp;"skills": <span className='text-cyan-300'>[</span><span className='text-amber-400'>"TypeScript", "React", "Tailwind.css", "Shadcn/ui"</span><span className='text-cyan-300'>]</span>,
        <br />
        &nbsp;&nbsp;"github": <a target='_blank' href="https://github.com/AlmirJrDev" className='text-white'>"https://github.com/AlmirJrDev"</a> <span className='text-cyan-700 animate-pulse '>// {'<-'} Click there :D</span>
        <br />
        <span className="text-yellow-400">{"}"}</span></pre>
        <Drawer >
  <DrawerTrigger className='mt-4 bg-zinc-900 rounded-md p-2 w-auto text-white'>Entrar em contato</DrawerTrigger>
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
          <div>
          <motion.img   src={CartoonPhoto} className='w-64' alt="" />
    </div>
      </div>
      <main className='p-60'>
        <motion.section 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }} // Mudei para 1 para que a opacidade aumente quando entrar em vista
         transition={{ duration: 1, ease: "easeInOut" }}
        className='wt-40'>
              <div className='flex justify-between'>
              <h2 className='text-cyan-700'>// Projects</h2> <a className='text-white' href="">{'->'} ver tudo</a>
              </div>

              <div className='grid grid-cols-3 gap-2 mt-4 '> 
              <Card className='bg-zinc-900 border-none'>
        <CardHeader>
          <img className='mb-4' src={CartoonPhoto} alt="" />
          <CardTitle className='text-white '>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>

        <CardFooter className='gap-4'>
          <Button className='bg-green-500 w-[80%]'>Deploy</Button> <Button className='bg-blue-600 '><Github/></Button>
        </CardFooter>
      </Card>
      <Card  className='bg-zinc-900 border-none'>
        <CardHeader>
        <img className='mb-4' src={CartoonPhoto} alt="" />
          <CardTitle className='text-white '>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>

        <CardFooter className='gap-4'>
          <Button className='bg-green-500 w-[80%]'>Deploy</Button> <Button className='bg-blue-600'><Github/></Button>
        </CardFooter>
      </Card>
      <Card  className='bg-zinc-900 border-none'>
        <CardHeader>
        <img className='mb-4' src={CartoonPhoto} alt="" />
          <CardTitle className='text-white '>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>

        <CardFooter className='gap-4'>
          <Button className='bg-green-500 w-[80%]'>Deploy</Button> <Button className='bg-blue-600'><Github/></Button> 
        </CardFooter>
      </Card>


                
        </div>
        </motion.section>

        <motion.section 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }} // Mudei para 1 para que a opacidade aumente quando entrar em vista
         transition={{ duration: 1, ease: "easeInOut" }}
        className='mt-40'>
        <div className='flex justify-between mb-4 mt-4'>
        <h2 className='text-cyan-700'>// Skills</h2> 
        </div>

        <Command className="rounded-lg border shadow-md ">
      <CommandInput placeholder="Search..." />
      <CommandList className='max-h-[100%]'>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Languages">
          <CommandItem>
          <img src={TS} className="mr-2 h-4 w-4" />
            <span>TypeScript</span>
          </CommandItem>
          <CommandItem>
            <img src={JS} className="mr-2 h-4 w-4" />
            <span>JavaScript</span>
          </CommandItem>
        
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Framework">
          <CommandItem>
          <img src={React} className="mr-2 h-4 w-4" />
            <span>React.js</span>
          
          </CommandItem>
          <CommandItem>
          <img src={Next} className="mr-2 h-4 w-4" />
            <span>Next.js</span>
          
          </CommandItem>
      
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Tools">
          <CommandItem>
            <Figma className="mr-2 h-4 w-4" />
            <span>Figma</span>
          
          </CommandItem>
          <CommandItem>
          <img src={Visual} className="mr-2 h-4 w-4" />
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

  
       

        <section className='flex flex-col mt-40'>
        <div className='flex justify-between mb-4 mt-4'>
        <h2 className='text-cyan-700'>// About-me</h2> 
        </div>
          <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }} // Mudei para 1 para que a opacidade aumente quando entrar em vista
           transition={{ duration: 1, ease: "easeInOut" }}
          className='flex gap-4'>
          <p className='w-10/12 line-clamp-6 text-justify text-white bg-zinc-900 pl-4 pr-4 pt-4  rounded-md'>Olá! Eu sou o Almir Júnior, <br /> um apaixonado por tecnologia desde os meus 5 anos de idade. Minha jornada no desenvolvimento começou oficialmente em 2021, e desde então, tenho me dedicado a me especializar na área de front-end, onde encontrei minha verdadeira paixão. Utilizo principalmente TypeScript e React no meu dia a dia, tecnologias que me permitem criar aplicações web robustas e modernas <br /> Além disso, tenho um bom conhecimento em Next.js e React Native, o que amplia minha capacidade de trabalhar em diferentes projetos, tanto para web quanto para mobile.

        Atualmente, tenho 20 anos e moro em Hortolândia-SP. Trabalho como desenvolvedor front-end na Grancoffe, uma empresa localizada em Campinas-SP, onde aplico minhas habilidades para criar interfaces de usuário funcionais e esteticamente agradáveis. Ao longo da minha carreira, busco constantemente aprimorar minhas habilidades, mantendo-me atualizado com as últimas tendências do desenvolvimento web e sempre focando em entregar soluções inovadoras.

        Para mim, desenvolvimento é muito mais do que código: é sobre resolver problemas, criar experiências e fazer a diferença no dia a dia das pessoas por meio da tecnologia.

        Se você está procurando alguém com paixão, dedicação e sede de aprendizado, podemos estar no caminho certo para realizar grandes projetos juntos!</p>


        <img className='size-64 rounded-md' src={CartoonPhoto} alt="" />
        </motion.div>
        <Button className='w-40 mt-4'>Ler mais {'->'}</Button>
        </section>

        <motion.section
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }} // Mudei para 1 para que a opacidade aumente quando entrar em vista
         transition={{ duration: 1, ease: "easeInOut" }}
        className='mt-40'>
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
      </main>

      <motion.footer
        
      
      className='border-t-2 border-white'>
        <div className='pl-60 pr-60 mt-20 mb-20'>
          <div className='flex justify-between items-center'>
            <div>
            <div className='flex gap-8'>   
              <h2 className='text-white'>AlmirJrDev</h2> <a className='text-gray-500' href="mailto:almirjrag@gmail.com">almirjrag@gmail.com</a>
            </div>
            <span className='text-gray-500'>Developer Front-end</span>
          </div>

          <div className='flex gap-4'>
            <a href="#"><Github className='size-5 text-white'/></a>
            <a href="#"><LinkedinIcon className='size-5 text-white'/></a>
          </div>
          </div>
        
        </div>
      
      </motion.footer>
    </>
  )
}

export default App
