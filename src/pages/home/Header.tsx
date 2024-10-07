

import { motion } from 'framer-motion'

import {
  NavigationMenu,
  NavigationMenuContent,

  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,

} from "@/components/ui/navigation-menu"
import { Switch } from '../../components/ui/switch'

import { useNavigate } from 'react-router-dom';

export function Header() {




  const navigate = useNavigate();

  const handleNavigation = (id: string) => {
    navigate(`/#${id}`);
  };

  return(
    <motion.header 
    className='flex items-center justify-center  mb-24 gap-2 border-y-2 p-4 '>
    <div id='/' className='flex items-center gap-32 '>
    <motion.div

    >
      <h1 className='text-white'>AlmirJrDev</h1>
    </motion.div>

 

    <NavigationMenu className='bg-transparent border text-white rounded-md'>
      <NavigationMenuList className='divide-x'>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='bg-transparent hover:bg-transparent hover:text-white'>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink  onClick={() => handleNavigation('projetos')}>
              <ul className="grid gap-3 p-6 md:w-[356px]  lg:grid-cols-[.75fr_1fr]">
                <li className='w-ful'>Projetos</li>
              </ul>
            </NavigationMenuLink>
            <NavigationMenuLink onClick={() => handleNavigation('skills')}>
              <ul className="grid gap-3 p-6">
                <li>Skills</li>
              </ul>
            </NavigationMenuLink>
            <NavigationMenuLink onClick={() => handleNavigation('about')} >
              <ul className="grid gap-3 p-6">
                <li>About</li>
              </ul>
            </NavigationMenuLink>
            <NavigationMenuLink onClick={() => handleNavigation('contact')} >
              <ul className="grid gap-3 p-6">
                <li>Contact</li>
              </ul>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuLink href='/about'>
              <ul className="text-sm font-medium px-4">
                <li>Sobre</li>
              </ul>
            </NavigationMenuLink>
        <NavigationMenuItem>

        <NavigationMenuLink href='/project'>
              <ul className="text-sm font-medium px-4">
                <li>Projetos</li>
              </ul>
            </NavigationMenuLink>

        </NavigationMenuItem>
        <NavigationMenuItem>
        <NavigationMenuLink>
              <ul className="text-sm font-medium px-4">
                <li>Contato</li>
              </ul>
            </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    <motion.div

    >
      <Switch />
    </motion.div>
  </div>

 </motion.header> 
  )
}''