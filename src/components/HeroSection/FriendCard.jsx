const FriendCard = ({ friend }) => {
  const { picture, name, days_since_contact, category, status } = friend;
  return (
    <div className=" p-3 rounded-lg text-center shadow">
      <img className="mx-auto rounded-full" src={picture} alt={name} />
      <h3 className="font-bold">{name}</h3>
      <p className="text-[#1f2937]">{days_since_contact} days ago</p>
      <div className="my-2">
        <span className="bg-green-100 text-green-800 px-3 py-1.5 rounded-full text-sm">
          {category.toUpperCase()}
        </span>
      </div>
      <div>
        <span
          className={`${
            status === "On_track"
              ? "text-white bg-green-600 px-2 py-1 rounded-full font-semibold text-sm"
              : status === "Almost Due"
                ? "text-white bg-yellow-600 px-2 py-1 rounded-full font-semibold text-sm"
                : "text-white bg-red-600 px-2 py-1 rounded-full font-semibold text-sm"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};

export default FriendCard;
