import React from 'react';
import FooterComponent from './component/Footer/FooterComponent.jsx';
import ContactForms from './component/Cards/ContactForms.jsx';

function Contact() {
  return (
    <div>
        <div>
          <div className='bg-[url("./component/images/forme.png")] bg-cover bg-center'>
              <ContactForms />
          </div>
        </div>
      <div>
        <FooterComponent />
      </div>
    </div>
  );
}

export default Contact;