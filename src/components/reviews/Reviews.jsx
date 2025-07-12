import React from "react";
import './reviews.css';

import ReviewsCard from "../reviewsCard/reviewsCard";
import SectionIntro from "../sectionIntro/SectionIntro";

const Reviews = () => {
    return (
        <>
            <SectionIntro 
                title="Our Reviews"
                heading="What our clients say"
            />
            <section id="reviews">
                <ReviewsCard
                    description="Shaheer and his team have been awesome to work with. The value they provide for the cost is unbeatable. They are talented and responsive. I highly recommend them for your website needs!"
                    name="Brandon Lewis"
                    location="Los Angeles, CA"
                />
                <ReviewsCard
                    description="Malibu Web Designs built us a beautiful, modern website and their team was incredibly responsive and helpful every step of the way—highly recommend if you want a smooth, professional experience."
                    name="Jason Brooks"
                    location="Macon, GA"
                />
                <ReviewsCard
                    description="Malibu Web Designs was a pleasure to work with—they nailed the design, were quick to respond, and made the whole process effortless"
                    name="Skyler Hayes"
                    location="Richmond, VA"
                />
            </section>
        </>

    );
};

export default Reviews;