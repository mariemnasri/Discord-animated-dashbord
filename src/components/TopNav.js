import React from "react";
import {
  FaSearch,
  FaHashtag,
  FaRegBell,
  FaUserCircle,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import useDarkMode from "../DarkMode/useDarMode";

const TopNav = () => {
  return (
    <div className="top-navigation">
      <HashTagIcon />
      <Title />
      <ThemeIcon />
      <Search />
      <BellIcon />
      <UserCircle />
    </div>
  );
};

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun size="24" className="top-navigation-icon" />
      ) : (
        <FaMoon size="24" className="top-navigation-icon" />
      )}
    </span>
  );
};
const Search = () => (
  <div className="search">
    <input className="search-input" type="text" placeholder="Search.." />
    <FaSearch size="18" className="text-sencondary my-auto" />
  </div>
);

const BellIcon = () => <FaRegBell size="24" className="top-navigation-icon" />;
const UserCircle = () => (
  <FaUserCircle size="24" className="top-navigation-icon" />
);
const HashTagIcon = () => <FaHashtag size="20" className="title-hashtag" />;
const Title = () => <h5 className="title-text">Discord 🤨 </h5>;

export default TopNav;
