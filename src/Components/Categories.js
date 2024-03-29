import React, { useState, useEffect } from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

import BestSellerSingle from "./BestSellerSingle";
import ScrollAnimation from "react-animate-on-scroll";
import { fetchCategories } from "../Actions/getCategoriesAction";
import { changeTopicTo } from "../Actions/setTopicAction";

const Categories = () => {
  const dispatch = useDispatch();

  const initialCategories = useSelector((state) => {
    return state.categories;
  });

  const initialTopics = useSelector((state) => {
    return state.topic;
  });

  const { categories } = initialCategories;

  const { topic } = initialTopics;

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  useEffect(() => {
    dispatch(changeTopicTo("paperback-books"));
  }, []);

  const handleDropdownChange = (event) => {
    const selectedTopic = event.target.value;
    dispatch(changeTopicTo(selectedTopic));
  };

  return (
    <ScrollAnimation duration={1} animateIn="fadeIn">
      <div className="flex flex-col justify-between bg-offwhite">
        <div className="flex justify-end">
          <select
            className="text-center mt-20 bg-gray-300 text-dark font-headings border-2 outline-none border-none mx-5 p-3 w-full lg:w-1/2 xl:w-1/4 cursor-pointer text-lg shadowed"
            onChange={handleDropdownChange}
          >
            <option selected="selected" disabled hidden>
              See all bestseller topics
            </option>
            {categories?.map((entry, index) => {
              return (
                <option
                  className="border-2 bg-dark m-10 cursor-pointer"
                  onClick={() => {
                    dispatch(changeTopicTo(entry.list_name_encoded));
                  }}
                  key={index}
                  className="text-base"
                >
                  {entry.list_name}
                </option>
              );
            })}
          </select>
        </div>
        <h1 className="bg-offwhite text-center py-20 text-2xl uppercase font-headings font-bold">
          {topic?.list_name
            ? topic?.list_name.replace(/-/g, " ")
            : "Select a topic"}
        </h1>
        <div className="bg-offwhite font-headings pb-20 flex justify-evenly">
          <ul className="px-20 grid-flow-row grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {topic?.books?.map((item) => {
              return <BestSellerSingle {...item} />;
            })}
          </ul>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default Categories;
