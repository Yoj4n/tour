import React, { useState } from "react";
import "../../styles/Review/ratingModal.css";

const RatingModal = ({ isOpen, onClose, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [hoverRating, setHoverRating] = useState(0);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>¡Tu opinión nos ayuda!</h2>
        <p>¿Cómo calificas tu experiencia?</p>

        <div className="rating-stars-review">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${star <= (hoverRating || rating) ? "filled" : ""}`}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
            >
              ★
            </span>
          ))}
        </div>

        <textarea
          placeholder="Cuéntanos en un breve mensaje"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button
          className="btn-submit"
          onClick={() => onSubmit(rating, comment)}
        >
          CALIFICAR
        </button>
        <button className="btn-close" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default RatingModal;
