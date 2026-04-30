import { use } from "react";
import FriendCard from "./FriendCard";

const FriendsSection = ({ frndsData }) => {
  const friends = use(frndsData);

  console.log(friends);
  return (
    <div className="max-w-275 mx-auto">
      <h2 className="text-2xl font-bold">Your Friends</h2>
      <div className="grid grid-cols-4 gap-4">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default FriendsSection;
