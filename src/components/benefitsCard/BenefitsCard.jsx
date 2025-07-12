import React from "react";
import './benefitsCard.css';

const BenefitsCard = (props) => {
    return (
        <div className="benefits-card">
            <div className="benefits-card-heading-wrapper">
                <i className="fa-solid fa-square-check"></i>
                <h3 className="benefits-card-heading">{props.heading}</h3>
            </div>
            <p className="benefits-card-description">{props.description}</p>
        </div>
    )
};

export default BenefitsCard;