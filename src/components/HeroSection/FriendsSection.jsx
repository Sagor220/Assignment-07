import { use } from "react";
import FriendCard from "./FriendCard";

const FriendsSection = ({ frndsData }) => {
  const friends = use(frndsData);

  return (
    <div className="max-w-275 mx-auto my-10 mb-20">
      <h2 className="text-2xl font-bold">Your Friends</h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 max-w-275 mx-auto">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default FriendsSection;
