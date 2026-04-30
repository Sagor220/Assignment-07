import { Link } from "react-router";

const FriendCard = ({ friend }) => {
  const { picture, name, days_since_contact, category, status } = friend;
  return (
    <Link to={`/friends/${friend.id}`} className="block">
      <div className="p-3 rounded-lg text-center shadow cursor-pointer">
        <img className="mx-auto rounded-full" src={picture} alt={name} />
        <h3 className="font-bold">{name}</h3>
        <p className="text-[#1f2937]">{days_since_contact} days ago</p>
        <div className="my-2">
          <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs">
            {category.toUpperCase()}
          </span>
        </div>
        <div>
          <span
            className={`${
              status === "On_track"
                ? "text-white bg-green-600 px-2 py-0.5 rounded-full font-semibold text-xs"
                : status === "Almost Due"
                  ? "text-white bg-yellow-600 px-2 py-0.5 rounded-full font-semibold text-xs"
                  : "text-white bg-red-600 px-2 py-0.5 rounded-full font-semibold text-xs"
            }`}
          >
            {status}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;
