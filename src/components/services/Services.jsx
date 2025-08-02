import React from "react";
import './services.css';
import ServiceCard from "../servicecard/ServiceCard";
import Btn from "../btn/Btn";

const Services = () => {
    return (
        <div id="landing-services-wrapper">
            <section id="landing-services">
                <p>What we do</p>
                <h2>Never worry about<br />your website again</h2>
                <p id="landing-services-subheading">At Malibu Web Designs, we specialize in small business web design and development for clients anywhere in the US and Canada. Every line of code is written by hand to ensure the best performance and make Google happy, which helps bring in more customers to your site and bring more revenue to your business. We also manage the edits for you and will never leave you high and dry. Our goal is to create long term relationships with our clients and see them grow over time.</p>
            </section>
            <div id="landing-services-cards-wrapper">
                <ServiceCard
                    icon="fa-solid fa-mobile-screen-button"
                    heading="Mobile First Design"
                    description="We start by designing your site for mobile devices first, ensuring the code is clean, efficient, and free of unnecessary bloat—making your site faster and more responsive." link="#"
                    link_title="Get Started" />
                 <ServiceCard
                    icon="fa-solid fa-expand"
                    heading="Fully Responsive"
                    description="Your website will adapt seamlessly to all mobile phones, tablets, and desktop screens, ensuring visitors can access it effortlessly from any device, wherever they are." 
                    link="#"
                    link_title="Get Started" />
                <ServiceCard
                    icon="fa-solid fa-gauge-high"
                    heading="SEO Services"
                    description="We provide expert SEO services that maximize your online presence, attract quality traffic, and help your business rank higher than the competition." 
                    link="#"
                    link_title="Get Started" />
                
                {/* Next 3 cards with different icons */}
                <ServiceCard
                    icon="fa-solid fa-rocket"
                    heading="Optimized Page Speed"
                    description="We expertly optimize your website's page speed to deliver lightning-fast load times, enhancing user experience and driving higher search engine rankings." 
                    link="#"
                    link_title="Get Started" />
                <ServiceCard
                    icon="fa-solid fa-bullseye"
                    heading="Google PPC Ads"
                    description="We create carefully managed Google PPC ad campaigns that connect you with the right customers, delivering measurable results and helping your business grow with confidence." 
                    link="#"
                    link_title="Get Started" />
                <ServiceCard
                    icon="fa-solid fa-flag-usa"
                    heading="Proudly American-Owned"
                    description="Based in the USA, we are passionate about delivering exceptional, high-quality services tailored to your needs—offering reasonable pricing, transparent communication, and dedicated support to build trust and ensure your success every step of the way." 
                    link="#"
                    link_title="Get Started" />
            </div>
            <div id="landing-services-btn-wrapper">
                <Btn label="Call Us Today" />
            </div>
        </div>
    )
};

export default Services;

