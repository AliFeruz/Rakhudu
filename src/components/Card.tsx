import { motion } from 'framer-motion';
import { ArtType } from '../shared/types'


type Props = {
    item: ArtType;
}

const Card = ({item}: Props) => {
  console.log(item)
  
  return (
    <motion.div
    className='flex flex-col cursor-pointer p-5 gap-9'
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    variants={{
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },}}>
      <div>
        <img src={item.image} alt="image" 
        className="h-[400px] w-[400px] border-2 border-zinc-400 rounded-[2rem]"/>
      </div>
    
    <h3 className='font-semibold text-zinc-100'>{item.title}</h3>
    </motion.div>
  )
}

export default Card