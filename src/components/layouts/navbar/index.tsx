import React from "react";
import SearchBar from "../../ui/Input";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";

const NavBar = () => {
  const user = useAppSelector((state) => state.orders.user);
  const navigate = useNavigate();

  const reddirectToHomepage = () => {
    navigate("/");
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
  };

  return (
    <div className="navbar">
      <h1 onClick={reddirectToHomepage}>Fast React Pizza Co.</h1>
      <SearchBar
        onChange={handleSearch}
        placeholder="Search order #"
        className="default-input"
      />
      <h2>{user}</h2>
    </div>
  );
};
export default NavBar;
