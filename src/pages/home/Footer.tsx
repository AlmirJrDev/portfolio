import { motion } from "framer-motion";
import { Github, LinkedinIcon } from "lucide-react";

export function Footer() {
  return(
    <motion.footer
        
      
      className='border-t-2 border-white'>
        <div className='pl-60 pr-60 mt-20 mb-20 max-lg:p-5'>
          <div className='flex justify-between items-center max-lg:flex-col '>
            <div>
            <div className='flex gap-8 max-lg:flex-col max-lg:flex max-lg:justify-center max-lg:items-center'>   
              <h2 className='text-white'>AlmirJrDev</h2> <a className='text-gray-500' href="mailto:almirjrag@gmail.com">almirjrag@gmail.com</a>
            </div>
            <span className='text-gray-500 max-lg:mb-2'>Developer Front-end</span>
          </div>

          <div className='flex gap-4 max-lg:mt-4'>
            <a href="#"><Github className='size-5 text-white'/></a>
            <a href="#"><LinkedinIcon className='size-5 text-white'/></a>
          </div>
          </div>
        
        </div>
      
      </motion.footer>
  )
}
