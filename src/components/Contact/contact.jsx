import { useState } from "react";
import { FiUser, FiPhone, FiMail, FiPackage, FiMessageSquare } from "react-icons/fi";
import "./contact.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    package: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Submitted Data:", formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          package: "",
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-heading">Get In Touch</h2>
          <p className="contact-subheading">We'd love to hear from you. Fill out the form below and our team will get back to you shortly.</p>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="input-group">
              <div className="input-icon">
                <FiUser />
              </div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <span className="input-highlight"></span>
            </div>
            
            <div className="input-group">
              <div className="input-icon">
                <FiMail />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <span className="input-highlight"></span>
            </div>
            
            <div className="input-group">
              <div className="input-icon">
                <FiPhone />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
              <span className="input-highlight"></span>
            </div>
            
            <div className="input-group">
              <div className="input-icon">
                <FiUser />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <span className="input-highlight"></span>
            </div>
            
            <div className="input-group select-group">
              <div className="input-icon">
                <FiPackage />
              </div>
              <select
                name="package"
                value={formData.package}
                onChange={handleChange}
                required
              >
                <option value="">Select Package</option>
                <option value="Web Development"><span>Web Development</span></option>
                <option value="App Development">App Development</option>
                <option value="Wordpress">Wordpress</option>
                <option value="Seo">Seo</option>
                <option value="Custom">Digital Marketing</option>
              </select>
              <span className="input-highlight"></span>
            </div>
          </div>
          
          <div className="textarea-group">
            <div className="input-icon">
              <FiMessageSquare />
            </div>
            <textarea
              name="message"
              placeholder="Your message..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <span className="input-highlight"></span>
          </div>
          
          <button 
            type="submit" 
            className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="spinner"></span>
            ) : (
              'Send Message'
            )}
          </button>
          
          {submitSuccess && (
            <div className="success-message">
              <svg viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
              </svg>
              Message sent successfully!
            </div>
          )}
        </form>
      </div>
    </section>
  );
}