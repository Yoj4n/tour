import React from "react";
import ReviewTable from "../components/Review/ReviewTable";
// import "../styles/Review/ReviewPage.css";

const ReviewPage = () => {
  return (
    <div className="review-page">
      <h2>Mis Reservas</h2>
      <ReviewTable />
    </div>
  );
};

export default ReviewPage;
