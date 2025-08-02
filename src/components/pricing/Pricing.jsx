import React from "react";
import './pricing.css';
import SectionIntro from "../sectionIntro/SectionIntro";
import Package from "../package/Package";

const Pricing = () => {
    return (
        <>
            <SectionIntro
                title="Our Pricing"
                heading={
                    <>
                        Pricing packages for <br /> every budget
                    </>
                }
            />
            <section id="pricing">
                <section id="pricing-packages">
                    <Package
                        heading="Monthly"
                        price="150"
                        price_subheading="Per Month"
                    />
                    <Package
                        heading="Lump Sum"
                        price="3750"
                        price_subheading="Per Month"
                        featured="true"
                    />
                    <Package
                        heading="Ecommerce"
                        price="7950"
                        price_subheading="Starting"
                    />
                    <Package
                        heading="Mobile App"
                        price="14999"
                        price_subheading="Starting"
                    />
                    <Package
                        heading="SEO"
                        price="6999"
                        price_subheading="Monthly Plan"
                    />
                    <Package
                        heading="Digital Marketing"
                        price="9999"
                        price_subheading="Starting"
                    />
                </section>
            </section>
        </>
    );
};

export default Pricing;
