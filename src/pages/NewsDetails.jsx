import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RightAside from '../components/homeLayout/RightAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [news, setNews] = useState({});
    // console.log(data, id, news);
    useEffect(()=>{
        const newsDetails = data.find((singleNews)=> singleNews.id == id);
        setNews(newsDetails);
    },[])
    return (
      <div>
        <header className="py-3">
          <Header></Header>
        </header>
        <main className="w-11/12 mx-auto my-3 grid grid-cols-12 gpa-5 py-10">
          <section className="col-span-9">
            <h2 className="font-bold">News Details</h2>
            <NewsDetailsCard news={news}></NewsDetailsCard>
          </section>
          <aside className="col-span-3 sticky top-0 h-fit">
            <RightAside></RightAside>
          </aside>
        </main>
      </div>
    );
};

export default NewsDetails;