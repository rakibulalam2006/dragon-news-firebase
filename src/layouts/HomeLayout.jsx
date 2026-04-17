import React from 'react';
import Header from '../components/Header';
import { Outlet, useNavigate } from 'react-router';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homeLayout/LeftAside';
import RightAside from '../components/homeLayout/RightAside';
import Loading from '../pages/Loading';

const HomeLayout = () => {
  const {state} = useNavigate(); 
    return (
      <div>
        <header>
          <Header></Header>
          {/* {import.meta.env.VITE_name} */}
          <section className="w-11/12 mx-auto my-3">
            <LatestNews />
          </section>
          <nav className="w-11/12 mx-auto my-3">
            <Navbar></Navbar>
          </nav>
        </header>
        <main className="w-11/12 mx-auto my-3  grid grid-cols-12">
          <aside className="col-span-3 sticky top-0 h-fit">
            <LeftAside></LeftAside>
          </aside>
          <section className="main col-span-6 mx-5">
            {state == "loading" ? <Loading /> : <Outlet></Outlet>}
          </section>
          <aside className="col-span-3 sticky top-0 h-fit">
            <RightAside></RightAside>
          </aside>
        </main>
      </div>
    );
};

export default HomeLayout;