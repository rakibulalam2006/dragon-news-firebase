import React from 'react';

const LatestNews = () => {
    return (
      <div className="flex items-center gap-5 bg-base-200 p-3">
        <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
        <marquee pauseOnHover={true} speed={600}>
          <div className="flex gap-5">
            <p className="font-bold">
              Match Highlights: Germany vs Spain — as it happened ! Match
              Highlights: Germany vs Spain as...
            </p>
            <p className="font-bold">
              Match Highlights: Germany vs Spain — as it happened ! Match
              Highlights: Germany vs Spain as...
            </p>
            <p className="font-bold">
              Match Highlights: Germany vs Spain — as it happened ! Match
              Highlights: Germany vs Spain as...
            </p>
          </div>
        </marquee>
      </div>
    );
};

export default LatestNews;