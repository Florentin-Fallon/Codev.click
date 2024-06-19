import React from 'react';
import FooterComponent from './component/Footer/FooterComponent.jsx';
import ContactForms from './component/Cards/ContactForms.jsx';

function Contact() {
  return (
    <div>
        <div>
          <ContactForms />
        </div>
      <div>
        <FooterComponent />
      </div>
    </div>
  );
}

export default Contact;