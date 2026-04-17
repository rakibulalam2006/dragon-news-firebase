import React from "react";
import { FaEye, FaStar, FaShareAlt, FaBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { id,title, author, thumbnail_url, details, rating, total_view } = news;

  return (
    <div className="card bg-base-100 shadow-md mt-5 p-4 space-y-4">
      {/* Author Section */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt="author"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toDateString()}
            </p>
          </div>
        </div>

        {/* Icons */}
        <div className="flex gap-3 text-gray-500 cursor-pointer">
          <FaBookmark />
          <FaShareAlt />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold">{title}</h2>

      {/* Image */}
      <img
        src={thumbnail_url}
        alt="news"
        className="rounded-lg w-full h-52 object-cover"
      />

      {/* Details */}
      <p className="text-sm text-gray-600">
        {details.length > 150 ? (
          <>
            {details.slice(0, 150)}...
            <Link to={`/news-details/${id}`} className="text-orange-500 font-semibold cursor-pointer">
              {" "}
              Read More
            </Link>
          </>
        ) : (
          details
        )}
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center pt-2 border-t">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(rating.number)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-2 text-gray-700 font-medium">
            {rating.number}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
