import './Contact.css'

const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <h1>Contact Me</h1>
          <form className='contact-form' action="https://getform.io/f/bkkyyzvb" method="POST">
            <input type="text" className='name' placeholder='Your Name' />
            <input type="Email" className='email' placeholder='Your Email' />
            <textarea className='msg' name='message' rows="S" placeholder='Your Message'></textarea>
            <button className='submitbtn' >Submit</button>
          </form>
    </section>
  )
}

export default Contact;
