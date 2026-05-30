import { useState } from "react";
import Btn from "../../components/ui/btn";
import SearchBar from "../../components/ui/Input";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setUser } from "../../features/slices/user-slice";

const Homepage = () => {
  const [activeBtn, setActiveBtn] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value != "") return setActiveBtn(true);
    return setActiveBtn(false);
  };
  const handleSetUser = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setUser(inputValue));
    reddirectToMenu();
  };
  const reddirectToMenu = () => {
    navigate("/menu");
  };
  return (
    <form className="homepage" onSubmit={handleSetUser}>
      <div className="text-content">
        <h1>The best pizza.</h1>
        <h2>Straight out of the oven, straight to you.</h2>
        {user != "" ? (
          <Btn type="button" onClick={reddirectToMenu}>
            Continue ordering, {user}
          </Btn>
        ) : (
          <h4>👋 Welcome! Please start by telling us your name:</h4>
        )}
      </div>
      {/* Ispraviti className u varitaion size, width... */}
      {user === "" && (
        <div className="name-form">
          <SearchBar
            onChange={handleInputValue}
            className="name-input"
            placeholder="Your full name"
            type="text"
          />
          {activeBtn && <Btn type="submit">Start ordering</Btn>}
        </div>
      )}
    </form>
  );
};
export default Homepage;
