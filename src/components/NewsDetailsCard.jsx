import React from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    // console.log(news);
    const { title, image_url, details,category_id } = news;
    return (
      <div className="p-5">
        <img
          className="w-full max-h-[450px] rounded-xl"
          src={image_url}
          alt=""
        />
        <h2 className="text-2xl">{title}</h2>
        <p>{details}</p>
        <Link to={`/category/${category_id}`} className="btn bg-secondary text-white">
          <span className="flex items-center">
            <GoArrowLeft />
            All news in this category
          </span>
        </Link>
      </div>
    );
};

export default NewsDetailsCard;