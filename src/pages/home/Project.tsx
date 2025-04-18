import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "../../components/ui/card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


interface Owner {
  login: string;
  avatar_url: string; // Adicione esta propriedade
}


interface Repo {
id: number;
  name: string;
  description: string;
  homepage: string;
  html_url: string;
  stargazers_count: number; // para classificação
  owner: Owner;
}


export function Project() {

  const [scrollY, setScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  const [repos, setRepos] = useState<Repo[]>([]);


  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/search/repositories?q=user:AlmirJrDev&sort=stars&order=desc'
        );
        const data = await response.json();
        setRepos(data.items); // 'items' contém os repositórios retornados
      } catch (error) {
        console.error("Erro ao buscar repositórios: ", error);
      }
    };

    fetchRepos();
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
        <motion.section id='projetos'
          initial="hidden"
          animate={scrollY > 100 ? 'visible' : 'hidden'} 
          variants={variants}
          transition={{ duration: 1.0, ease: 'easeInOut' }} 

        className='pt-40 max-lg:p-0 max-lg:flex max-lg:justify-center max-lg:items-center max-lg:flex-col'>
              <div className='flex justify-between max-lg:gap-4'>
              <h2 className='text-cyan-700'>// Projects</h2><Link className='text-white' to="/project">{'->'} ver tudo</Link>
              </div>

              <div className='grid grid-cols-3 gap-2 mt-4 max-sm:flex max-sm:justify-center max-sm:items-center max-sm:flex-col'> 
          {repos.slice(0, 6).map(repo => ( // Pega os 6 primeiros repositórios
        <Card key={repo.id} className='bg-zinc-900 border-none flex flex-col h-full max-lg:w-[80%]'>
        <CardHeader className='flex-grow'>
        <img
  className='mb-4 w-full h-full object-contain'
  src={`https://raw.githubusercontent.com/${repo.owner.login}/${repo.name}/master/public/thumbnail.png`}
  
  alt={repo.name}
  onError={(e) => (e.currentTarget.src = "default.svg")} // Fallback para avatar do dono do repositório
/>


          <CardTitle className='text-white text-lg '>{repo.name}</CardTitle>
          <CardDescription>{repo.description || 'No description'}</CardDescription>
        </CardHeader>
      
        <CardFooter className='gap-4'>
  {repo.homepage ? (
    <>
      <a
        className='flex font-bold justify-center items-center h-10 rounded-md bg-green-500 transition-all w-[80%] hover:bg-green-700'
        href={repo.homepage}
        target="_blank"
        rel="noopener noreferrer"
      >
        Deploy
      </a>
      <a
        className='flex justify-center items-center group h-10 w-10 rounded-md bg-blue-600'
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="transition-all group-hover:rotate-12 group-hover:size-7" />
      </a>
    </>
  ) : (
    <a
      className='flex justify-center items-center h-10 w-full rounded-md bg-blue-600'
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Github className="transition-all hover:rotate-12 hover:size-7" />
    </a>
  )}
</CardFooter>



      </Card>
      ))}
  


                
        </div>
        </motion.section> 
    </>
  )
}