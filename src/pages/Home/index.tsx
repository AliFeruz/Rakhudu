import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import hero from '@/assets/hero/hero.jpg';


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
 
  return (
    <section id="aboutme" className="mx-auto mt-32 h-auto w-5/6 py-20">
      <motion.div className="md:flex mx-auto w-5/6 items-center justify-center"
                      onViewportEnter={() => setSelectedPage(SelectedPage.AboutMe)}>
            <div className="justify-between items-center gap-20 mt-16 md:mt-16 md:flex">
                <img src={hero} alt="image" 
                className="h-[400px] w-[400px] md:h-[250px] md:w-[250px] object-cover border-2 border-zinc-400 rounded-full"/>
                <div className="md:mt-10">
                    <motion.div
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.5 }}
                     transition={{ duration: 0.5 }}
                     variants={{
                       hidden: { opacity: 0, x: 50 },
                       visible: { opacity: 1, x: 0 },}}>
                        <h1 className="basis-3/5 font-montserrat text-3xl font-bold">I'm Sebastian Margraff</h1>
                    </motion.div>
                    <motion.div
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.5 }}
                     transition={{ delay: 0.2, duration: 0.5 }}
                     variants={{
                       hidden: { opacity: 0, x: -50 },
                       visible: { opacity: 1, x: 0 },}}
                       className="object-contain">
                        <p className="my-5 text-2xl">
                        I'm a young artist from Germany. I studied psychology,
                        African studies and philosophy. I am currently interested in environmental 
                        protection and the reuse of industrial products to reduce the 
                        damage to nature as much as possible. 
                        In my works I use both natural materials and human waste. 
                        With my works I try to show my feelings about the world around me.</p>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Home