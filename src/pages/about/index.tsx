


export function AboutPage() {
  return(
    <>
        <main className="pr-40 pl-40 pb-40 max-lg:p-10 max-lg:flex max-lg:justify-center max-lg:items-center max-lg:flex-col ">
          <h1 className="text-white">// Sobre mim</h1>
          <div className="mt-12 flex justify-around max-lg:flex max-lg:justify-center max-lg:items-center max-lg:flex-col">
            <div><img className="w-96 mb-12 rounded-full max-lg:w-full" src="/almirdesenho.jpeg" alt="" /></div>
            <div>
            <p className='text-sm text-justify max-w-lg text-white max-lg:w-full'>
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
          <div className="flex mt-32  justify-between items-center max-lg:flex-col">
          <div className="mb-12">
            <h2 className="text-white">// Experiencias</h2>
            <div className="mt-6 mb-12 flex items-center gap-4 ">
              <img className="w-24 rounded-full object-cover" src="https://yt3.googleusercontent.com/ytc/AIdro_kIBnf1KcYxgJA9vvOBC8dQHV3OpBsnbtFA1mJtvOFVhw=s160-c-k-c0x00ffffff-no-rj" alt="" />
              <div className="flex flex-col">
                <h3 className="text-white">Gran Coffee</h3>
                <span className="text-gray-400 italic">Developer Front-end</span>
                <span className="text-gray-400">2024-Ago</span>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-4">
              <img className="w-24 rounded-full object-cover" src="https://media.licdn.com/dms/image/v2/D4D0BAQFWuY0nVSV7UA/company-logo_200_200/company-logo_200_200/0/1705518047331/jmocci_terraplanagem_logo?e=1749081600&v=beta&t=4xqLHVyjummP0dVhqs0wcAitLxKzFtrSvu-zWk3Do1E" alt="" />
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
              <img className="w-24 rounded-full object-cover" src="https://yt3.googleusercontent.com/SkyQrFYa4v7vVMpC4nqsdlOaIHWw1HvRUxf4940GcJfRWgGUxtMJ9WdTTJOCj0a1ddJYPKxe=s900-c-k-c0x00ffffff-no-rj" alt="" />
              <div className="flex flex-col">
                <h3 className="text-white">Rocketseat</h3>
                <span className="text-gray-400 italic">Developer Front-end & Mobile</span>
                <span className="text-gray-400">2022-Ago</span>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-4">
              <img className="w-24 rounded-full object-cover" src="https://yt3.googleusercontent.com/Xd8KszIxcsxeqsFYGVVfvzAn8d9n3ywevTT93-ZTUqh4qOR73kH8CGw8yRdzdKEAk_9O-v3P=s160-c-k-c0x00ffffff-no-rj" alt="" />
              <div className="flex flex-col">
                <h3 className="text-white">Unasp HT</h3>
                <span className="text-gray-400 italic">Sistema da Informação</span>
                <span className="text-gray-400">2025-Ago</span>
              </div>
            </div>
          </div>
         
          
          </div>
        </main>
    </>
  )
}