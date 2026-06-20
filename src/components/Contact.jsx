import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:rajvardhansinghchouhan1@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact">
      <p className="section-tag">Get In Touch</p>
      <h2 className="contact-heading">Let's Connect</h2>

      <div className="contact-wrapper">
        <div className="contact-info">
          <p className="contact-text">Open for internships and freelance full stack opportunities. Feel free to reach out — I usually reply within a day.</p>

          <div className="contact-detail">
            <FaEnvelope />
            <span>rajvardhansinghchouhan1@gmail.com</span>
          </div>
          <div className="contact-detail">
            <FaMapMarkerAlt />
            <span>Indore, India</span>
          </div>

          <div className="contact-socials">
            <a href="https://github.com/rajvardhan-here" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/rajvardhann" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://x.com/X_rajvardhann" target="_blank" rel="noreferrer"><FaTwitter /></a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" rows="5" value={form.message} onChange={handleChange} required></textarea>
          <button type="submit" className="contact-submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;