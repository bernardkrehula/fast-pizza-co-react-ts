import SearchBar from "../../ui/SearchBar";
import "./index.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <h1>Fast React Pizza Co.</h1>
      <SearchBar placeholder='Search order #'/>
      <h2>Bernard</h2>
    </div>
  );
};
export default NavBar;
