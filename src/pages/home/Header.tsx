



import {
  NavigationMenu,
  NavigationMenuContent,

  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,

} from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom";


import { useNavigate } from 'react-router-dom';

export function Header() {




  const navigate = useNavigate();

  const handleNavigation = (id: string) => {
    navigate(`/#${id}`);
  };

  return(
    <header 
    className=' mb-24 gap-2 border-b p-4 px-12 '>
    <div id='/' className='flex justify-between items-center m-auto max-xl:justify-center '>
    <div

    >
      <h1 className='text-white max-xl:hidden'>AlmirJrDev</h1>
    </div>

  
  <div className=' '>

    <NavigationMenu className='bg-transparent border cursor-pointer text-white rounded-md'>
      <NavigationMenuList className='divide-x'>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='bg-transparent hover:bg-transparent hover:text-white'>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
          <NavigationMenuLink href="/">
              <ul className="grid gap-3 p-6 md:w-[356px]  lg:grid-cols-[.75fr_1fr]">
                <li className='w-ful'>Home</li>
              </ul>
            </NavigationMenuLink>
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
        <Link to='/about'>
              <ul className="text-sm font-medium px-4">
                <li>Sobre</li>
              </ul>
            </Link>
        <NavigationMenuItem>
        <Link to='/project'>
              <ul className="text-sm font-medium px-4">
                <li>Projetos</li>
              </ul>
            </Link>

        </NavigationMenuItem>
        <NavigationMenuItem>
        <Link to='/contact'>
              <ul className="text-sm font-medium px-4">
                <li>Contato</li>
              </ul>
            </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    </div>
  
  </div>

 </header> 
  )
}''