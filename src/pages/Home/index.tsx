import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import hero from '@/assets/hero/hero.jpg';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {

  return (
    <section id="aboutme" className="mx-auto min-h-screen md:mt-20 mt-32 w-5/6 flex items-center">
      <motion.div className="flex flex-col lg:flex-row mx-auto w-full items-center justify-center"
        onViewportEnter={() => setSelectedPage(SelectedPage.AboutMe)}>
        
        <div className="flex items-center justify-center lg:w-1/2">
          <img src={hero} alt="image"
            className="h-[250px] w-[250px] md:h-[400px] md:w-[400px] object-cover 
            border border-emerald-300 rounded-full" />
        </div>
        
        <div className="flex flex-col items-center justify-center lg:w-1/2 p-6 lg:p-0">
          <motion.div
            className="mt-10 lg:mt-0 border-b border-emerald-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}>
            <h1 className="font-montserrat uppercase p-2 text-3xl font-bold text-center lg:text-left">
              I'm Sebastian
            </h1>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex items-center justify-center lg:justify-start">
            <p className="my-5 text-xl text-slate-900 text-center lg:text-left">
              I'm a young artist from Germany. I studied psychology,
              African studies and philosophy. I am currently interested in environmental
              protection and the reuse of industrial products to reduce the
              damage to nature as much as possible.
              In my works I use both natural materials and human waste.
              With my works I try to show my feelings about the world around me.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Home;
