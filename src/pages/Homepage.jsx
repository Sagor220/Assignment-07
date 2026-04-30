import { Suspense } from "react";
import FriendsSection from "../components/HeroSection/FriendsSection.jsx";
import HeroSection from "../components/HeroSection/HeroSection.jsx";

const frndsjsonData = async () => {
  const response = await fetch("/friends.json");
  return response.json();
};

const frndsData = frndsjsonData();

const Homepage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
      </Suspense>

      <FriendsSection frndsData={frndsData} />
    </div>
  );
};

export default Homepage;
