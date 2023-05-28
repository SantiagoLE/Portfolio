import React from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import "./style/contact.css"

const Contact = () => {

  const { handleSubmit, register, reset } = useForm();

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
      message: data.text
    };

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
        <div className="form_item">
          <input id="name" type="text" {...register('name')} placeholder="Empresa / Nombre Completo" />
        </div>

        <div className="form_item">
          <input id="email" type="email" {...register('email')} placeholder="Correo Electrónico" />
        </div>

        <div className="form_item">
          <input id="subject" type="text" {...register('subject')} placeholder="Asunto" />
        </div>

        <div className="form_item">
          <input id="text" type="text" {...register('text')} placeholder="Mensaje" />
        </div>

        <button className='contact_btn' type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
