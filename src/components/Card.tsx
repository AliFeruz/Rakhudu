import { motion } from 'framer-motion';
import { ArtType } from '../shared/types'


type Props = {
    item: ArtType;
    className: string;
}

const Card = ({item, className}: Props) => {
  
  
  return (
    <motion.div
    className={`relative flex flex-col cursor-pointer items-center 
    justify-center hover:shadow-lg transition-shadow duration-300 ${className}`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    variants={{
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },}}>
      <div className='relative w-full h-full rounded-2xl overflow-hidden'>
        <img src={item.image} alt="image" 
        className='object-cover w-full h-full transition-transform sm:h-[400] sm:w-[400]
        duration-300 transform hover:scale-110'/>
        <div className='absolute inset-0 bg-gradient-to-t from-black via-emerald-950 to-transparent flex 
        items-end justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 p-4'>
          <h3 className='font-bold text-emerald-50 text-2xl text-center'>{item.title}</h3>
        </div>
      </div>
    </motion.div>
  )
}

export default Card