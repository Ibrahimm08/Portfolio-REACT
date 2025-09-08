import AboutBrief from "./AboutBrief";
import FeaturedProject from "./FeaturedProject";
import Greeting from "./Greeting";

const HomePage = () => {
  return (
    <div className="home-page">
      <Greeting />
      <AboutBrief/>
      <FeaturedProject/>
    </div>
  );
};

export default HomePage;
