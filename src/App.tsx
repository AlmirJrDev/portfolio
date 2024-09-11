
import CartoonPhoto from './assets/almirdesenho.jpeg'

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

import { Button } from "@/components/ui/button"

import {
  NavigationMenu,
  NavigationMenuContent,

  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,

} from "@/components/ui/navigation-menu"
import { Github, LinkedinIcon, Mail, MessageCircle } from 'lucide-react'




function App() {


  return (
    <>
      <header className='flex items-center justify-center mb-24 gap-2'>
      <Switch />

      <NavigationMenu className='bg-white rounded-b-md'>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Teste</NavigationMenuTrigger>
      <NavigationMenuContent className=''> 
        <NavigationMenuLink className='' >
          <ul  className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          <li>Teste</li>
          </ul></NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Teste</NavigationMenuTrigger>
      <NavigationMenuContent className=''> 
        <NavigationMenuLink className='' >
          <ul  className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          <li>Teste</li>
          </ul></NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>




   </header> 
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
        <div><img src={CartoonPhoto} className='size-64' alt="" /></div>
      </div>
      <main className='p-60'>
        <div className='flex justify-between'>
        <h2 className='text-cyan-700'>// Projects</h2> <a className='text-white' href="">{'->'} ver tudo</a>
        </div>

        <div>
          
        </div>
      </main>
    </>
  )
}

export default App
