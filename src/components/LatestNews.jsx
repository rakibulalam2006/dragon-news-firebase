import React, { useEffect, useState } from 'react';


const LatestNews = () => {
  const [news,setNews] = useState([]);
  useEffect(()=>{
    fetch("/news.json")
    .then((res)=>res.json())
    .then(data =>{
      console.log(data);
      setNews(data);
    })
    .catch(e =>console.log(e));
  },[]);

  const breakingNews = news.filter(
    (item) => item.rating?.badge === "trending");
    return (
      <div className="flex items-center gap-5 bg-base-200 p-3">
        <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
        <marquee>
          <div className="flex gap-5">
            {breakingNews.map((item) => item.title)}
          </div>
        </marquee>
      </div>
    );
};

export default LatestNews;