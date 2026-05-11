import SearchBar from "../../components/ui/SearchBar";
import "./index.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="text-content">
        <h1>The best pizza.</h1>
        <h2>Straight out of the oven, straight to you.</h2>
        <h4>👋 Welcome! Please start by telling us your name:</h4>
      </div>
      <SearchBar className="name-input" placeholder="Your full name" />
    </div>
  );
};
export default Homepage;
