import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import hero from '@/assets/hero/hero.jpg';


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
 
  return (
    <section id="aboutme" className="mx-auto mt-16 h-auto w-5/6 py-20">
      <motion.div className="md:flex mx-auto w-5/6 items-center justify-center"
                      onViewportEnter={() => setSelectedPage(SelectedPage.AboutMe)}>
            <div className="justify-between items-center gap-20 mt-16 md:mt-38 md:flex">
                <img src={hero} alt="image" 
                className="h-[400px] w-[400px] object-cover border-2 border-zinc-400 rounded-[2rem]"/>
                <div className="mt-10">
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
                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                Felis orci diam odio.</p>
                        <p className="text-2xl">
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.</p>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Home