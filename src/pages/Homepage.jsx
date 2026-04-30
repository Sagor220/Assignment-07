import FriendsSection from "../components/HeroSection/FriendsSection.jsx";
import HeroSection from "../components/HeroSection/HeroSection.jsx";

const frndsjsonData = async () => {
  const response = await fetch("/friends.json");
  return response.json();
};

const frndsData = frndsjsonData();
console.log(frndsData);
const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <FriendsSection frndsData={frndsData} />
    </div>
  );
};

export default Homepage;
