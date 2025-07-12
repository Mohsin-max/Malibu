// import React from "react";
// import './footer.css';

// const Footer = () => {
//     return (
//         <footer id="main-footer">
//             <div id="main-footer-wrapper">
//                 <div id="main-footer-branding">
//                     <h3 id="main-footer-heading">Malibu Web Designs</h3>
//                     <p id="main-footer-description">We believe small businesses deserve better. Just because you're small, doesn't mean your site needs to be. Let us make you something amazing.</p>
//                 </div>
//                 <div id="main-footer-contact">
//                     <p id="main-footer-contact-heading">Contact Information</p>
//                     <div className="main-footer-contact-item-wrapper">
//                         <i class="fa-solid fa-clock footer-icon" />
//                         <h4 className="main-footer-contact-item">24/7</h4>
//                     </div>
//                     <div className="main-footer-contact-item-wrapper">
//                         <i class="fa-solid fa-phone footer-icon" />
//                         <h4 className="main-footer-contact-item">(888) 123-344</h4>
//                     </div>
//                     <div className="main-footer-contact-item-wrapper">
//                         <i class="fa-solid fa-envelope footer-icon" />
//                         <h4 className="main-footer-contact-item">support@malibuwebdesigns.com</h4>
//                     </div>
//                     <div className="main-footer-contact-item-wrapper">
//                         <i class="fa-solid fa-location-dot footer-icon" />
//                         <h4 className="main-footer-contact-item">United States</h4>
//                     </div>
//                 </div>
//             </div>
//             <hr />
//             <p id="main-footer-copyright">© Copyright 2025 Malibu Web Designs</p>
//         </footer>
//     )
// };

// export default Footer;

import React from "react";
import './footer.css';

const Footer = () => {
  return (
    <footer id="main-footer" role="contentinfo">
      <div id="main-footer-wrapper">
        <div id="main-footer-branding" aria-label="Company branding">
          <h3 id="main-footer-heading">Malibu Web Designs</h3>
          <p id="main-footer-description">
            We believe small businesses deserve better. Just because you're small, doesn't mean your site needs to be. Let us make you something amazing.
          </p>
        </div>

        <div id="main-footer-contact" aria-label="Contact information">
          <p id="main-footer-contact-heading">Contact Information</p>
          <div className="main-footer-contact-item-wrapper">
            <i className="fa-solid fa-clock footer-icon" aria-hidden="true" />
            <span className="main-footer-contact-item">24/7 Support</span>
          </div>
          <div className="main-footer-contact-item-wrapper">
            <i className="fa-solid fa-phone footer-icon" aria-hidden="true" />
            <span className="main-footer-contact-item">(888) 123-344</span>
          </div>
          <div className="main-footer-contact-item-wrapper">
            <i className="fa-solid fa-envelope footer-icon" aria-hidden="true" />
            <span className="main-footer-contact-item">help@malibuwebdesigns.com</span>
          </div>
          <div className="main-footer-contact-item-wrapper">
            <i className="fa-solid fa-location-dot footer-icon" aria-hidden="true" />
            <span className="main-footer-contact-item">United States</span>
          </div>
        </div>
      </div>

      <hr />

      <p id="main-footer-copyright">
        © 2025 Malibu Web Designs. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
