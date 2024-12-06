import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { GoHeart } from "react-icons/go";
import { IoPersonSharp } from "react-icons/io5";
import avatarImg from "../assets/avatar.png";
import { useSelector } from "react-redux";

const navigations = [
  {
    name: "Dashbord",
    href: "/dashbord",
  },
  {
    name: "Orders",
    href: "/orders",
  },
  {
    name: "Cart",
    href: "/cart",
  },
  {
    name: "Checkuts",
    href: "/checkout",
  },
];

const Navbar = () => {
  const currentuser = false;
  const [isDropDownOpened, setisDropDownOpened] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <>
      <header className="max-w-screen-2xl mx-auto px-4 py-6 ">
        <nav className="flex justify-between items-center">
          {/* Left side */}
          <div className="flex items-center md:gap-16 gap-4">
            <Link to="/">
              <HiMiniBars3CenterLeft className="size-6" />
            </Link>
            {/* search input */}
            <div className="relative sm:w-72 w-40 space-x-2 ">
              <FaSearch className="absolute inline-block left-3 my-2" />
              <input
                type="text"
                placeholder="Search here"
                className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
              />
            </div>
          </div>

          {/* right side */}
          <div className="flex justify-between items-center space-x-4">
            <div>
              {currentuser ? (
                <>
                  <button
                    onClick={() =>
                      setisDropDownOpened(!isDropDownOpened)
                    }
                  >
                    <img
                      src={avatarImg}
                      className={`size-7 rounded-full ${currentuser ? `ring-2 ring-blue-500` : ""}`}
                    ></img>
                  </button>
                  {/* show dropdown */}
                  {isDropDownOpened && (
                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md ">
                      <ul className="py-2">
                        {navigations.map((item) => (
                          <li key={item.name}>
                            <Link
                              to={item.href}
                              className="block px-4 py-2 text-sm hover:bg-gray-100"
                              onClick={() =>
                                setisDropDownOpened(false)
                              }
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <Link to="/login">
                  <IoPersonSharp className="size-6" />
                </Link>
              )}
            </div>

            <GoHeart className="hidden sm:block size-6" />
            <Link
              className=" flex items-center bg-primary space-x-2 rounded-md sm:px-6 px-2 py-1"
              to="/cart"
            >
              <SlBasket className="size-6 text-black" />

              {cartItems.length > 0 ? (
                <span className="text-black">{cartItems.length}</span>
              ) : (
                <span className="text-black">0</span>
              )}
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
