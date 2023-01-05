import React, { useState } from 'react';
import { BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { BiMessageSquareEdit, BiMessageSquareDetail } from 'react-icons/bi';
import Button from './Button';
// import { sendEmail } from '../services/email';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();

        const body = `<div> <p>Nome: ${name}</p> <p>E-mail: ${email}</p> <p>Mensagem: ${message}</p> </div>`

        const req = {
            from: {
                name: 'Laisla Stephanie',
                email: 'stephenielaisla@gmail.com'
            },
            to: {
                name: 'Laisla Stephanie',
                email: 'stephenielaisla@gmail.com'
            },
            subject: '',
            body: body
        }

        // sendEmail(req);

        // const sendMailController = new MailtrapMailProvider()
        // await sendMailController.sendEmail(req);
    }

    return (
        <div className='mt-16' >
            <div className="h-3 w-full animate-bg-color "></div>

            <div className="flex flex-col lg:flex-row items-center justify-center p-5 md:p-10  gap-3">

                <div className="flex-1 lg:self-start max-md:w-5/6 font-poppins dark:text-slate-200 p-5">
                    <h1 className="font-poppins font-medium dark:text-slate-200 text-3xl flex items-center gap-3 mb-4">Mande uma mensagem pelo <BiMessageSquareDetail /></h1>
                    <a href="" className='w-max'>
                        <h1 className='flex items-center w-max gap-3 font-light text-3xl text-orange-500 mb-5 dark:hover:text-slate-200 hover:text-slate-900 delay-100 duration-300 ease-in-out '> <BsInstagram /> Insta</h1>
                    </a>
                    <a href="" className='w-max'>
                        <h1 className='flex items-center w-max gap-3 font-light text-3xl text-pink mb-5 dark:hover:text-slate-200 hover:text-slate-900 delay-100 duration-300 ease-in-out '> <BsLinkedin /> LinkedIn</h1>
                    </a>
                    <a href="" className='w-max'>
                        <h1 className='flex items-center w-max gap-3 font-light text-3xl text-violet mb-5 dark:hover:text-slate-200 hover:text-slate-900 delay-100 duration-300 ease-in-out '> <BsWhatsapp /> Whatsapp</h1>
                    </a>
                </div>

                <div className="flex-1  max-md:w-5/6 p-5">
                    <h1 className="font-poppins font-medium dark:text-slate-200 text-3xl flex items-center gap-3 mb-4">Mande um E-mail <BiMessageSquareEdit className=' max-[420px]:hidden ' /></h1>
                    <form onSubmit={handleSubmit} className="flex flex-col items-start gap-3 max-md:w-full md:w-4/6 ">
                        <input
                            type="text"
                            placeholder='Seu Nome'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className=' w-full rounded-3xl bg-transparent border-2 border-orange-500 p-3 dark:text-slate-200 font-montserrat'
                        />

                        <input
                            type="text"
                            placeholder='Seu E-mail'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className=' w-full rounded-3xl bg-transparent border-2 border-pink p-3 dark:text-slate-200 font-montserrat'
                        />

                        <textarea
                            placeholder='Sua Mensagem'
                            cols={30}
                            rows={10}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className='w-full bg-transparent border-2 border-violet rounded-3xl p-3 dark:text-slate-200 font-montserrat caret-pink-500 ' >
                        </textarea>

                        <Button
                            text='Enviar'
                            type='submit'
                            classname='w-3/6 rounded-3xl bg-transparent border-sky-500 self-start p-2 dark:text-slate-200 hover:bg-violet'
                        />
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact