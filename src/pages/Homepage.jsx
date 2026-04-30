import FriendsSection from "../components/HeroSection/FriendsSection.jsx";
import HeroSection from "../components/HeroSection/HeroSection.jsx";
import FriendSummery from "../components/HeroSection/FriendSummery.jsx";

const frndsjsonData = async () => {
  const response = await fetch("/friends.json");
  return response.json();
};

const frndsData = frndsjsonData();

const Homepage = () => {
  return (
    <div>
      <FriendSummery />
      <HeroSection />
      <FriendsSection frndsData={frndsData} />
    </div>
  );
};

export default Homepage;
