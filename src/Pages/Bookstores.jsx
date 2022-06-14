import React from "react";
import Bookstore from "../Components/Bookstore";
import ScrollAnimation from "react-animate-on-scroll";

import data from "../bookstore-data.json";

const parseUrl = (url) => url.split("www.")[1];

const Bookstores = () => {
  console.log(data.bookstores);
  return (
    <div>
      <h1 className="font-headings text-center text-3xl py-5 bg-offwhite font-bold uppercase">
        Indie Bookstores in NYC
      </h1>
      <ScrollAnimation animateIn="fadeInUp">
        <div className="flex flex-wrap justify-around bg-offwhite w-1/2 m-auto pb-10">
          {data.bookstores.map((bookstore) => (
            <Bookstore
              image={bookstore.imageUrl}
              storeName={bookstore.storeName}
              storeDescription={bookstore.storeDescription}
              address={bookstore.address}
              website={
                <a href={bookstore.website}>{parseUrl(bookstore.website)}</a>
              }
            />
          ))}
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Bookstores;
