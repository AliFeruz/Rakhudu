import { motion } from 'framer-motion';
import { ArtType } from '../shared/types'


type Props = {
    item: ArtType;
}

const Card = ({item}: Props) => {
  
  
  return (
    <motion.div
    className='flex flex-col cursor-pointer p-4 items-center justify-center border-4 border-emerald-300 rounded-[1.5rem] bg-emerald-50 gap-6'
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    variants={{
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },}}>
      <div className=' '>
        <img src={item.image} alt="image" 
        className="md:h-[400px] md:w-[400px] mt-2 h-[250px] w-[250px] object-cover rounded-[1.5rem]"/>
      </div>
    
    <h3 className='font-bold text-emerald-900 text-2xl text-center'>{item.title}</h3>
    </motion.div>
  )
}

export default Card