// import './Contact.css'

// const Contact = () => {
//   return (
//     <section className='contact' id='contact'>
//       <h1>Contact Me</h1>
//           <form className='contact-form' action="https://getform.io/f/bkkyyzvb" method="POST">
//             <input type="text" className='name' placeholder='Your Name' />
//             <input type="Email" className='email' placeholder='Your Email' />
//             <textarea className='msg' name='message' rows="S" placeholder='Your Message'></textarea>
//             <button className='submitbtn' >Submit</button>
//           </form>
//     </section>
//   )
// }

// export default Contact;

import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // For submission feedback

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill out all fields.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus('Please enter a valid email.');
      return;
    }

    // Simulate form submission (since getform.io handles the actual sending)
    setStatus('Sending...');
    fetch('https://getform.io/f/bkkyyzvb', {
      method: 'POST',
      body: new FormData(e.target),
    })
      .then((response) => {
        if (response.ok) {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' }); // Reset form
        } else {
          setStatus('Failed to send message. Try again.');
        }
      })
      .catch(() => setStatus('Error occurred. Please try later.'));
  };

  return (
    <section className="contact" id="contact">
      <h1>Contact Me</h1>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="name"
          className="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          aria-label="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          className="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          aria-label="Your Email"
          required
        />
        <textarea
          name="message"
          className="msg"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          aria-label="Your Message"
          required
        ></textarea>
        <button className="submitbtn" type="submit">Submit</button>
      </form>
      {status && <p className="status">{status}</p>}
    </section>
  );
};

export default Contact;