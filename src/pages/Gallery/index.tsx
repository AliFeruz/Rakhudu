import { ArtType, SelectedPage } from '../../shared/types';
import { motion } from 'framer-motion';
import { Data } from '../../utils/data';
import Card from '../../components/Card';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Gallery = ({setSelectedPage}: Props) => {
  return (
    <section id='gallery' className='mx-auto sm:block w-5/6'>
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Gallery)}>
        <div className='common-container'>
        <h2 className="font-bold text-3xl hover:text-emerald-200 underline underline-offset-8 w-full">Gallery</h2>
        <div
        className='mt-16 grid lg:grid-cols-3 md:grid-cols-2 
        sm:grid-cols-2 grid-cols-1 gap-6'>
          {Data.map((item:ArtType, index) => (
            <Card item={item} key={item.id}
            className={`${
              index % 2 === 0 ? 'row-span-2' : 'row-span-1'
            } ${index % 3 === 0 ? 'col-span-2' : 'col-span-1'}`}/>
          ))}
        </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Gallery