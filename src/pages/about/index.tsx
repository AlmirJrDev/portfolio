


export function About() {
  return(
    <>
        <main className="pr-40 pl-40 pb-40">
          <h1 className="text-white">// Sobre mim</h1>
          <div className="mt-12 flex justify-around">
            <div><img className="w-96 rounded-full" src="/almirdesenho.jpeg" alt="" /></div>
            <div>
            <p className='text-sm max-w-lg text-white'>
Olá! Eu sou o Almir Júnior, <br /> <br/> um apaixonado por tecnologia desde os meus 5 anos de idade. Minha jornada no desenvolvimento começou oficialmente em 2021, e desde então, tenho me dedicado a me especializar na área de front-end, onde encontrei minha verdadeira paixão. Utilizo principalmente TypeScript e React no meu dia a dia, tecnologias que me permitem criar aplicações web robustas e modernas <br /> Além disso, tenho um bom conhecimento em Next.js e React Native, o que amplia minha capacidade de trabalhar em diferentes projetos, tanto para web quanto para mobile.
<br /><br />
Atualmente, tenho 20 anos e moro em Hortolândia-SP. Trabalho como desenvolvedor front-end na Grancoffe, uma empresa localizada em Campinas-SP, onde aplico minhas habilidades para criar interfaces de usuário funcionais e esteticamente agradáveis. Ao longo da minha carreira, busco constantemente aprimorar minhas habilidades, mantendo-me atualizado com as últimas tendências do desenvolvimento web e sempre focando em entregar soluções inovadoras.
<br /><br />
Para mim, desenvolvimento é muito mais do que código: é sobre resolver problemas, criar experiências e fazer a diferença no dia a dia das pessoas por meio da tecnologia.
<br /><br />
Se você está procurando alguém com paixão, dedicação e sede de aprendizado, podemos estar no caminho certo para realizar grandes projetos juntos!
</p>
            </div>
          </div>
          <div className="flex mt-32 justify-around items-center">
          <div>
            <h2 className="text-white">// Experiencias</h2>
            <div className="mt-6 mb-12 flex items-center gap-4">
              <img className="w-24 rounded-full object-cover" src="https://media.licdn.com/dms/image/v2/C4E0BAQFuIkOtsvqC-A/company-logo_200_200/company-logo_200_200/0/1630643726740/grancoffeeoficial_logo?e=1735776000&v=beta&t=rixE8H8j3owNTLl763Ukn_hac4msfO6nHCu3cCU9YAM" alt="" />
              <div className="flex flex-col">
                <h3 className="text-white">Gran Coffee</h3>
                <span className="text-gray-400 italic">Developer Front-end</span>
                <span className="text-gray-400">2024-Ago</span>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-4">
              <img className="w-24 rounded-full object-cover" src="https://media.licdn.com/dms/image/v2/D4D0BAQFWuY0nVSV7UA/company-logo_200_200/company-logo_200_200/0/1705518047331/jmocci_terraplanagem_logo?e=1735776000&v=beta&t=7RcAjWGJmuMN9TwyPvgeS_YPe5X9bGCfrkbsCqWQUGY" alt="" />
              <div className="flex flex-col">
                <h3 className="text-white">J.MOCCI TERRAPLANAGEM</h3>
                <span className="text-gray-400 italic">Developer Front-end</span>
                <span className="text-gray-400">2023-2024</span>
              </div>
            </div>
          </div>
         
          <div>
            <h2 className="text-white">// Academy</h2>
            <div className="mt-6 mb-12 flex items-center gap-4">
              <img className="w-24 rounded-full object-cover" src="https://media.licdn.com/dms/image/v2/D4D0BAQGWWA3gGWJ3Sg/company-logo_200_200/company-logo_200_200/0/1701903187680/rocketseat_logo?e=1735776000&v=beta&t=py6x1Yeyk5cVzZQkMmFPXd78WEYbpB9zdojKYWF5BQ0" alt="" />
              <div className="flex flex-col">
                <h3 className="text-white">Rocketseat</h3>
                <span className="text-gray-400 italic">Front-end & Mobile</span>
                <span className="text-gray-400">2022-Ago</span>
              </div>
            </div>
         
          </div>
          </div>
        </main>
    </>
  )
}