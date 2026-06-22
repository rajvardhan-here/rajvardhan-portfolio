import { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaHandshake, FaRocket, FaBriefcase, FaUsers, FaStar } from 'react-icons/fa';
import '../styles/Contact.css';

const floatingCards = [
  { icon: <FaEnvelope />, title: 'New Message', sub: 'Thanks for reaching out!', top: '2%', left: '35%', delay: '0s' },
  { icon: <FaHandshake />, title: 'Collaboration', sub: "Let's build together!", top: '8%', right: '5%', delay: '0.4s' },
  { icon: <FaRocket />, title: 'Project Inquiry', sub: 'Tell me about your idea!', top: '32%', left: '28%', delay: '0.8s' },
  { icon: <FaBriefcase />, title: 'Internship Opportunity', sub: "Let's grow together!", top: '42%', right: '2%', delay: '1.2s' },
  { icon: <FaUsers />, title: "Let's Build Together", sub: 'Great things start here!', top: '62%', left: '32%', delay: '0.6s' },
];

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:rajvardhansinghchouhan1@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-left">
        <div className="contact-label section-label">Contact Me</div>
        <h2 className="contact-heading">Let's <span className="heading-blue">Connect</span></h2>
        <p className="contact-sub">Have a project idea, collaboration opportunity, or just want to say hello? Feel free to reach out.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <div className="input-wrap">
              <FaUsers className="input-icon" />
              <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group">
            <label>Email</label>
            <div className="input-wrap">
              <FaEnvelope className="input-icon" />
              <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group">
            <label>Message</label>
            <div className="input-wrap textarea-wrap">
              <FaRocket className="input-icon" />
              <textarea name="message" placeholder="Write your message..." rows="5" value={form.message} onChange={handleChange} required></textarea>
            </div>
          </div>
          <button type="submit" className="btn-send">
            Send Message <FaRocket />
          </button>
        </form>
      </div>

      <div className="contact-right">
        <div className="floating-cards-area">
          {floatingCards.map((card, i) => (
            <div key={i} className="floating-card" style={{ top: card.top, left: card.left, right: card.right, animationDelay: card.delay }}>
              <div className="floating-card-icon">{card.icon}</div>
              <div>
                <p className="floating-card-title">{card.title}</p>
                <p className="floating-card-sub">{card.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="contact-info-cards">
          <div className="availability-card">
            <div className="avail-icon"><FaStar /></div>
            <div>
              <p className="avail-title">Available For Opportunities</p>
              <p className="avail-sub">Open to:</p>
              <div className="avail-tags">
                <span>● Internships</span>
                <span>● Freelance Projects</span>
                <span>● Collaborations</span>
              </div>
            </div>
            <FaStar className="avail-star" />
          </div>

          <div className="email-info-card">
            <div className="email-icon-wrap"><FaEnvelope /></div>
            <div>
              <p className="email-label">Email</p>
              <p className="email-val">rajvardhansinghchouhan1@gmail.com</p>
            </div>
          </div>

          <div className="connect-card">
            <p className="connect-label">Connect With Me</p>
            <div className="connect-socials">
              <a href="https://linkedin.com/in/rajvardhann" target="_blank" rel="noreferrer" className="social-circle linkedin"><FaLinkedin /></a>
              <a href="https://github.com/rajvardhan-here" target="_blank" rel="noreferrer" className="social-circle github"><FaGithub /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;