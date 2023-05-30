import React from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import "./style/contact.css"

const Contact = () => {

  const { handleSubmit, register, reset ,  formState:{errors}} = useForm();

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
        reset();
      })
      .catch((error) => {
        console.error('Error al enviar el correo electrónico', error);
      });
  };

  return (
    <section id="contact">
      <form className='contact_form' onSubmit={handleSubmit(submit)}>
        <input id="name" type="text" {...register('name', {required:true})}  placeholder={errors.name ? "Campo requerido" : "Empresa / Nombre Completo"} />
        

        <input id="email" type="email" {...register('email', {required:true})}  placeholder={errors.email ? "Campo requerido" : "Correo Electrónico"} />

        <input id="subject" type="text" {...register('subject', {required:true})}  placeholder={errors.subject ? "Campo requerido" :"Asunto"} />

        <textarea id='message' {...register('message', {required:true})} placeholder={errors.message ? "Campo requerido" :"Mensaje"}></textarea>

        <button className='contact_btn' type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
