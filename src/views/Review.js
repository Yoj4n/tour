import React from "react";
import ReviewTable from "../components/Review/ReviewTable";
// import "../styles/Review/ReviewPage.css";
import Banner from '../components/Review/Banner';

const ReviewPage = () => {
  return (
    <>
    <Banner/>
      <div className="review-page">
        <ReviewTable />
      </div>
    </>
  );
};

export default ReviewPage;
