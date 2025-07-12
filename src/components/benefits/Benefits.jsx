import React from "react";
import './benefits.css';
import BenefitsCard from "../benefitsCard/benefitsCard";
import SectionIntro from "../sectionIntro/SectionIntro";
import Btn from "../btn/Btn";

const Benefits = () => {
    return (
        <section id="benefits">
            <SectionIntro
                title="What we offer"
                heading={
                    <>
                        Websites starting at $0 down<br /> and $150 per month
                    </>
                } description={
                    <>
                        We offer $0 down for a standard 5 page small business website. If you need more than that then we have to do custom pricing based on the scope of work, number of additional pages, and time involved.<b> 12 month minimum contract</b>. Includes design, development, hosting, unlimited edits, 24/7 support, and lifetime updates.
                    </>
                }
            />
            <div id="benefits-card-wrapper">
                <BenefitsCard
                    heading="100% Secure"
                    description="Our websites are built with secure, static HTML and CSS by default—minimizing vulnerabilities since there's no backend or database to target. For more advanced functionality, we also offer robust solutions using Java and other modern technologies to meet your specific needs."
                />
                <BenefitsCard
                    heading="Tailored to Your Brand"
                    description="Get a custom-built website that reflects your brand, style, and goals."
                />
                <BenefitsCard
                    heading="Lightning-Fast Performance"
                    description="Optimized code ensures your site loads quickly and keeps visitors engaged."
                />
                <BenefitsCard
                    heading="Built with SEO in Mind"
                    description="Structured to help your business rank higher and get found online."
                />
                <BenefitsCard
                    heading="Support That Cares"
                    description="Enjoy responsive, friendly support from a team that’s always ready to help."
                />
                <BenefitsCard
                    heading="Honest, Upfront Pricing"
                    description="No hidden fees—just clear, competitive pricing that fits your budget."
                />
            </div>
            <Btn label="schedule a call"></Btn>
        </section>
    )
};

export default Benefits;