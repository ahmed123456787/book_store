import React, { useEffect, useState } from "react";
import BookCard from "../books/BookCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

// import required modules
import { Pagination } from "swiper/modules";

const categories = [
  "Choose a category",
  "Business",
  "Fiction",
  "Horror",
  "Adventure",
];

const TopSellers = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(
    "Choose a category",
  );

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data); // Fix: Use fetched data to set state
      });
  }, []);

  const filterBooks =
    selectedCategory === "Choose a category"
      ? books
      : books.filter(
          (book) =>
            book.category.toLowerCase() ===
            selectedCategory.toLowerCase(), // Fix: Use `selectedCategory`
        );

  return (
    <div className="py-10 px-4">
      <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>
      {/* Category filtering */}
      <div className="mb-8 flex items-center">
        <select
          name="category"
          onChange={(e) => setSelectedCategory(e.target.value)}
          id="category"
          className="border bg-[#EAEAEA] border-gray-300 px-4 py-2 focus:outline-none"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {filterBooks.map((book, index) => (
          <div key={book.id}>
            <SwiperSlide key={index}>
              <BookCard book={book} />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default TopSellers;
