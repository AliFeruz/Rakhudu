import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { SelectedPage } from '../../shared/types';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactMe = ({setSelectedPage}: Props) => {
    const { trigger, register, formState: {errors} } = useForm();


    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if(!isValid) {
            e.preventDefault();
        }
    }


  return (
    <section id='contactme' className='mx-auto w-5/6 pt-24 pb-32'>
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactMe)}>
            <motion.div className='md:w-3/5 common-container'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                          hidden: { opacity: 0, x: -50 },
                          visible: { opacity: 1, x: 0 },
                        }}>
            <h1 className="basis-3/5 font-montserrat text-3xl font-bold">
              <span className='text-emerald-50'>CONTACT ME </span>
              TO KNOW MORE OF MY WORK 
            </h1>
            <p className='my-5 text-2xl'>
            Write me an email and I will respond you as soon as posible
            </p>
            </motion.div>
            <div className='mt-5 justify-between gap-8 md:flex'>
                <motion.div className='mt-10 basis-3/5 md:-0'
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                              hidden: { opacity: 0, y: 50 },
                              visible: { opacity: 1, y: 0 },
                            }}>
                <form 
                    target='_blank'
                    onSubmit={onSubmit}
                    method='POST'
                    action='https://formsubmit.co/aliferuzcode@gmail.com'>
                <input type="text"
                       className='input'
                       placeholder='NAME'
                       {...register('name', {
                        required: true,
                        maxLength: 100,
                       })}/>
                {errors.name && (
                    <p className='mt-1 text-zinc-200'>
                        {errors.name.type === 'required' && 'This field is required.'}
                        {errors.name.type === 'maxLength' && 'Max length is 100 char.'}
                    </p>
                )}
                 <input type="text"
                       className='input'
                       placeholder='EMAIL'
                       {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                       })}/>
                {errors.email && (
                    <p className='mt-1 text-zinc-200'>
                        {errors.email.type === 'required' && 'This field is required.'}
                        {errors.email.type === 'pattern' && 'Invalid email address.'}
                    </p>
                )}
                 <textarea
                       rows={4}
                       cols={50}
                       className='input'
                       placeholder='MESSAGE'
                       {...register('message', {
                        required: true,
                        maxLength: 2000,
                       })}/>
                {errors.message && (
                    <p className='mt-1 text-zinc-200'>
                        {errors.message.type === 'required' && 'This field is required.'}
                        {errors.message.type === 'maxLength' && 'Max length is 2000 char.'}
                    </p>
                )}
                <button type='submit' className='submitbutton'>
                 SUBMIT
                </button>
                </form>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default ContactMe;