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
        <div
        className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 
        sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
          {Data.map((item:ArtType) => (
            <Card item={item} key={item.id}/>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Gallery