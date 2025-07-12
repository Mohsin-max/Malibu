import React, { useState, useEffect } from "react";
import './hero.css';
import Navbar from "../navbar/Navbar";

const Hero = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="landing-hero">
            <Navbar scrolled={scrolled} />

            <div id="landing-hero-container">
                <p id="landing-hero-subheading">Custom designs, custom coded</p>
                <p id="landing-hero-heading">Small business<br />Web Designer</p>
                <p id="landing-hero-description">
                    No page builders or WordPress. We offer 100% hand-coded websites with superior results starting at $175/mo as well as Google Ads and SEO services.
                </p>
                <a href="#" id="landing-hero-btn">Get Started</a>
                <p id="trust-badge">★ ★ ★ ★ ★ Rated 5 Stars on Google</p>
            </div>
            <div id="hero-image">
                <img src="/assets/picture2.svg" alt="Web Design Illustration" />
            </div>
        </section>

        // <section id="landing-hero">
        //     <Navbar scrolled={scrolled} />
        //     <div id="landing-hero-container">
        //         <p id="landing-hero-subheading">Custom designs, custom coded</p>
        //         <p id="landing-hero-heading">Small business<br />Web Designer</p>
        //         <p id="landing-hero-description">No page builders or WordPress. We offer 100% hand-coded websites with superior results starting at $175/mo as well as Google Ads and SEO services.</p>
        //         <a href="#" id="landing-hero-btn">Get Started</a>
        //     </div>
        // </section>
    )
};

export default Hero;