import { Button } from "@/components/ui/button";
import { LinkedinIcon, Mail, Github, MessageCircle } from "lucide-react";


import { useState } from "react";
import emailjs from "@emailjs/browser";

export function ContactPage() {

  



   const [name, setName] = useState('') 
   const [email, setEmail] = useState('')
   const [message, setMessage] = useState('')

    function sendEmail(e: React.FormEvent) {
      e.preventDefault();
      
      if(name === '' || email === '' || message === ''){
        alert("Preencha todos os campos")
      }

      const templateParams ={
        from_name: name,
        message: message,
        email: email
      }
      emailjs.send("service_vayb9a4", "template_ry8uqu6", templateParams, "DW-kGTdaPGoXjT3ki", )
      .then((response) => {
        console.log("email enviado", response.status, response.text)
        setName('')
        setEmail('')
        setMessage('')
      }, (err) => {
        console.log('ERRO', err)
      })
    }
  return(
    <>
      <main className="px-40 pb-40">
      <h1 className="text-cyan-300">// Contatos disponiveis.</h1>
        <section className="flex justify-center items-center mt-12 flex-col">
       
          
          <div className='bg-zinc-900 w-7/12 rounded-md p-4'>

        <div className='flex justify-center items-center text-gray-500 w-full'>Algumas opções para meu contato.</div>

    
        <div 

      className='flex justify-center items-center w-full h-auto'
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
        
          <form  onSubmit={sendEmail} className="mt-10 p-4 py-16 text-white bg-zinc-900 w-7/12 flex justify-center items-center flex-col mb-10 rounded-md" action="">
          <div className="flex justify-center w-9/12 text-left flex-col gap-3"> 
          <h3 className="text-gray-500 text-center">Fique a vontade para mandar um email para mim!</h3>
          <label className="text-white" htmlFor="name">Nome <span>(obrigatório)</span></label>
              <input placeholder="Nome completo." type="text" id="name" className="bg-transparent border p-2 " name="name" value={name} onChange={(e) => setName(e.target.value)} required/>
          <label>Email <span>(obrigatório)</span></label>
          <input className="bg-transparent border p-2 " placeholder="Insira seu melhor email."  type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label>Mensagem <span>(obrigatório)</span></label>
          <textarea className="bg-transparent border p-2 " placeholder="Conte para mim sobre o que está precisando." id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required> </textarea>
          <button className="bg-transparent border p-2 " type="submit" value="Enviar">Enviar</button>
          </div>
          </form>
        </section>
          
      </main>
    </>
  )
}