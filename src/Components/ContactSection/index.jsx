import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("xeqyqele");

    if (state.succeeded) {
        return <p>Thanks for contacting me!</p>;
    }

    return (
        <section className='flex  flex-col  h-[600px] justify-center items-center  w-full shadow shadow-white/5 mt-8 '>
            <h2 className='text-4xl font-bold mb-8'>Contact Me!</h2>
            <form onSubmit={handleSubmit} className=' w-1/4 mx-auto '>
                <div className="flex flex-col m-4">
                    <div className="relative z-0 mb-5 group">
                        <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-indigo-400/60  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-400/60  focus:outline-none focus:ring-0 peer" placeholder=" " required />
                        <label htmlFor="floating_first_name" className="absolute text-sm text-gray-500 dark:text-gray-400 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] duration-300 peer-focus:font-medium peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-indigo-400/60  peer-focus:dark:text-indigo-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                    </div>
                    <div className="relative z-0 mb-5 group">
                        <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:indigo-400/60  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-400/60  focus:outline-none focus:ring-0 peer" placeholder=" " required />
                        <label htmlFor="floating_last_name" className="absolute text-sm text-gray-500 dark:text-gray-400 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] duration-300 peer-focus:font-medium peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-indigo-400/60  peer-focus:dark:text-indigo-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                    </div>
                    <div className="relative z-0 mb-5 group">
                        <input type="email" id="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-indigo-400/60  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-400/60  focus:outline-none focus:ring-0 peer" placeholder=" " required />
                        <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] duration-300 peer-focus:font-medium peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:indigo-400/60  peer-focus:dark:text-indigo-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                    <div className="relative z-0 mb-5 group">
                        <textarea id="message" name="message" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-indigo-400/60  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-400/60 focus:outline-none focus:ring-0 peer" placeholder=" " required />
                        <label htmlFor="message" className="absolute text-sm text-gray-500 dark:text-gray-400 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] duration-300 peer-focus:font-medium peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-indigo-400/60  peer-focus:dark:text-indigo-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>
                </div>
                <button type="submit" disabled={state.submitting} className='bg-indigo-400/80 ml-4 rounded-md p-2  px-4 w-30 font-semibold hover:bg-indigo-400'>
                    Submit
                </button>
            </form>
        </section>
    );
}

export { ContactForm };
