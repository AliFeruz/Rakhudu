import { ArtType, SelectedPage } from '../../shared/types';
import { motion } from 'framer-motion';
import { Data } from '../../utils/data';
import Card from '../../components/Card';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Gallery = ({setSelectedPage}: Props) => {
  return (
    <section id='gallery' className='mx-auto w-5/6'>
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Gallery)}>
        <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.5 }}
         transition={{ duration: 0.5 }}
         variants={{
           hidden: { opacity: 0, x: -50 },
           visible: { opacity: 1, x: 0 },
         }}
        className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 
        sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
          {Data.map((item:ArtType) => (
            <Card item={item} key={item.id}/>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Gallery