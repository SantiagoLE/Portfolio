import React from 'react';
import emailjs from "email-js"
import { useForm } from 'react-hook-form';
import resetHookForm from '../utils/resetHookForm';
import "./style/contact.css"

const Contact = () => {

    const { handleSubmit, register, reset, formState: { errors } } = useForm();

    const submit = (data) => {

        // Configurar los parámetros para enviar el correo electrónico
        const serviceId = 'service_xlxchmk';
        const templateId = 'template_3c0b6vd';
        const userId = 'Rewd3WOD6NpfFE5Mp';

        // Preparar los datos del formulario para enviar en el correo electrónico
        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            subject: data.subject,
            message: data.message
        };

        console.log(data)

        // Enviar el formulario utilizando EmailJS
        emailjs
            .send(serviceId, templateId, templateParams, userId)

            .then((response) => {
                console.log('Correo electrónico enviado con éxito', response.text);
                reset(resetHookForm);
            })
            .catch((error) => {
                console.error('Error al enviar el correo electrónico', error);
            });
    };

    return (
        <section id="contact">

            <h2 className='contac_title'>FORMULARIO DE CONTACTO</h2>

            <div className='contact_container'>

                <p className='contact_paragraph'>
                    Gracias por visitar mi portafolio. Me encantaría tener la oportunidad de trabajar contigo. Si estás interesado en mis servicios o tienes alguna pregunta, no dudes en ponerte en contacto conmigo. Estoy aquí para escuchar tus necesidades y brindarte soluciones personalizadas.
                </p>

                <form className='contact_form' onSubmit={handleSubmit(submit)}>

                    <div className='form_item-container'>
                        <h4 className='item_title'>Nombre</h4>
                        <input id="name" type="text" {...register('name', { required: true })} placeholder={errors.name && "Campo requerido"} autoComplete='off' />
                    </div>

                    <div className='form_item-container'>
                        <h4 className='item_title'>Email</h4>
                        <input id="email" type="email" {...register('email', { required: true })} placeholder={errors.email && "Campo requerido"} autoComplete='off' />

                    </div>

                    <div className='form_item-container'>
                        <h4 className='item_title'>Asunto</h4>
                        <input id="subject" type="text" {...register('subject', { required: true })} placeholder={errors.subject && "Campo requerido"} autoComplete='off' />
                    </div>

                    <div className='form_item-container'>
                        <h4 className='item_title'>Mensaje</h4>
                        <textarea id='message' {...register('message', { required: true })} placeholder={errors.message && "Campo requerido"} ></textarea>
                    </div>


<button className='contact_btn' type="submit">Enviar <i className='bx bxs-paper-plane'></i></button>


                   
                </form>

            </div>


        </section>
    );
};

export default Contact;
