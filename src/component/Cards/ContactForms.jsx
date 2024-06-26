import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForms() {
  const [state, handleSubmit] = useForm("xkgwwwwg");

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Soumet les données du formulaire via Formspree
    await handleSubmit(e);
  };

  if (state.succeeded) {
    return <div className='flex justify-center items-center pb-56 pt-36'>
              <div className='bg-transparent text-center p-16 rounded-xl w-[70%] shadow-2xl'>
                <p className='text-white text-4xl mb-4' id='contact'>Merci pour votre message !</p>
                <p className='text-white text-lg text-center'>Nous vous répondrons dès que possible.</p>
              </div>
            </div>;
  }

  return (
    <div className='flex justify-center pb-20 pt-20'>
      <div className='rounded-xl w-[50%] bg-white shadow-2xl p-8'>
        <h1 className='text-5xl text-center text-black mb-16' id='contact'>Contactez nous !</h1>
        <div className="max-w-md mx-auto">
          <form onSubmit={handleFormSubmit} className="mb-2">
            <div className="mb-4">
              <label htmlFor="email" className="block text-black text-sm font-semibold mb-2">Adresse e-mail:</label>
              <input
                id="email"
                type="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-black text-sm font-semibold mb-2">Message:</label>
              <textarea
                id="message"
                name="message"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button type="submit" disabled={state.submitting} className="bg-indigo-500 hover:bg-indigo-300 flex items-center justify-center text-white font-semibold py-2 px-4 rounded-lg w-full">
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForms;