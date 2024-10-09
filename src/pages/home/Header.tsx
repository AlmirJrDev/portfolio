



import {
  NavigationMenu,
  NavigationMenuContent,

  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,

} from "@/components/ui/navigation-menu"


import { useNavigate } from 'react-router-dom';

export function Header() {




  const navigate = useNavigate();

  const handleNavigation = (id: string) => {
    navigate(`/#${id}`);
  };

  return(
    <header 
    className=' mb-24 gap-2 border-b p-4 px-12 '>
    <div id='/' className='flex justify-between items-center m-auto  '>
    <div

    >
      <h1 className='text-white'>AlmirJrDev</h1>
    </div>

  
  <div className=' '>

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
        <NavigationMenuLink href='/contact'>
              <ul className="text-sm font-medium px-4">
                <li>Contato</li>
              </ul>
            </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    </div>
  
  </div>

 </header> 
  )
}''