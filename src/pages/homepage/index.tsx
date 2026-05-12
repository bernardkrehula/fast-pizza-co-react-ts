import { useState } from "react";
import Btn from "../../components/ui/btn";
import SearchBar from "../../components/ui/SearchBar";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [activeBtn, setActiveBtn] = useState(false);
  const navigate = useNavigate();

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value != "") return setActiveBtn(true);
    return setActiveBtn(false);
  };
  const reddirectToMenu = () => navigate("/menu");

  return (
    <div className="homepage">
      <div className="text-content">
        <h1>The best pizza.</h1>
        <h2>Straight out of the oven, straight to you.</h2>
        <h4>👋 Welcome! Please start by telling us your name:</h4>
      </div>
      <div className="name-form">
        <SearchBar
          onChange={handleInputValue}
          className="name-input"
          placeholder="Your full name"
        />
        {activeBtn && (
          <Btn onClick={reddirectToMenu} type="button">
            Start ordering
          </Btn>
        )}
      </div>
    </div>
  );
};
export default Homepage;
