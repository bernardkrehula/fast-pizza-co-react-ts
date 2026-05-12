import { useState } from "react";
import SearchBar from "../../ui/SearchBar";
import "./index.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const navigate = useNavigate();
  
  const reddirectToHomepage = () => {
    navigate('/');
  }

  return (
    <div className="navbar">
      <h1 onClick={reddirectToHomepage}>Fast React Pizza Co.</h1>
      <SearchBar placeholder="Search order #" className="default-input" />
      <h2>Bernard</h2>
    </div>
  );
};
export default NavBar;
