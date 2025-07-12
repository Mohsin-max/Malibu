import React from "react";
import './reviewsCard.css';

const ReviewsCard = (props) => {
    return (
        <div className="reviews-card">
            <i className="fa-solid fa-star reviews-card-icon"></i>
            <p className="reviews-card-description">{props.description}</p>
            <h3 className="reviews-card-name">{props.name}</h3>
            <p className="reviews-card-location">{props.location}</p>
        </div>
    )
};

export default ReviewsCard;