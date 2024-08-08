import { Button, Rating } from "@mui/material";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

function Reviews() {
  const [reviewData, setReviewData] = useState({
    rating: 0,
    reviewText: "",
    name: "",
    email: "",
  });

  function submitReview(e) {
    e.preventDefault();
    console.log("submit", reviewData);
  }
  return (
    <div>
      <h2 className="text-xl font-semibold uppercase mb-3">
        <span>1</span> review for All Natural Italian-Style Chicken Meatballs
      </h2>

      {/* review */}
      <div className="space-y-5">
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <div
              key={`review_${index}`}
              className="flex items-center gap-4 border-t-[1.5px] pt-4"
            >
              <FaUserCircle className="text-6xl" />
              <div>
                <Rating
                  name="text-feedback"
                  value={4.5}
                  readOnly
                  precision={0.5}
                  style={{ fontSize: "18px" }}
                />
                <div>
                  <span className="font-semibold text-sm">Rajeev Kumar</span>
                  <span className="text-gray-500"> — August 1,2024</span>
                </div>
                <p className="pt-2">
                  Sed perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium.
                </p>
              </div>
            </div>
          ))}
      </div>

      {/* add new review */}

      <div className="mt-5">
        <h3 className="pb-5  border-b-2 text-xl">Add a review</h3>
        <p className="mt-10 mb-5">
          Your email address will not be published. Required fields are marked *
        </p>
        <p className="mb-3">Your rating*</p>
        <Rating
          name="simple-controlled"
          onChange={(e) =>
            setReviewData({ ...reviewData, rating: e.target.value })
          }
          required
          value={reviewData.rating}
        />

        <form onSubmit={submitReview} className="my-5 space-y-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="review">Your review*</label>
            <textarea
              className="bg-[#F3F4F7] px-5 py-[10px] rounded-sm text-base outline-none"
              rows={12}
              id="review"
              required
              onChange={(e) =>
                setReviewData({ ...reviewData, reviewText: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name*</label>
            <input
              className="bg-[#F3F4F7] px-5 py-[10px] text-base rounded-sm outline-none"
              type="text"
              name=""
              id="name"
              required
              onChange={(e) =>
                setReviewData({ ...reviewData, name: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email*</label>
            <input
              className="bg-[#F3F4F7] text-base px-5 py-[10px] rounded-sm outline-none"
              type="text"
              id="email"
              required
              onChange={(e) =>
                setReviewData({ ...reviewData, email: e.target.value })
              }
            />
          </div>

          <div className="space-x-2 ">
            <input type="checkbox" id="checkbox" required />
            <label htmlFor="checkbox">
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </div>

          <button className="bg-[#233A95] py-2 px-5 text-white font-semibold rounded-sm">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Reviews;
