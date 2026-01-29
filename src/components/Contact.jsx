import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          alert('Message sent successfully!');
          e.target.reset();
      }, (error) => {
          alert('Failed to send message. Please try again.');
      });
  };

  return (
    <section className="section reveal" id="contact">
      <div className="contact-container">
        <div className="contact-card">
          <h2>Get In Touch</h2>
          <form ref={form} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="user_name" 
                required
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="user_email" 
                required
                placeholder="your@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                required
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;