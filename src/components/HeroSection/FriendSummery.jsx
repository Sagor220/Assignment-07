const FriendSummery = () => {
  return (
    <div className="max-w-275 mx-auto grid grid-cols-4 gap-4 p-4">
      <div className="shadow text-center px-7 py-5 rounded-lg">
        <p className="text-2xl font-semibold text-[#244d3f] ">30</p>
        <p className="text-sm text-gray-700">Total Friends</p>
      </div>
      <div className="shadow text-center px-7 py-5 rounded-lg">
        <p className="text-2xl font-semibold text-[#244d3f]">5</p>
        <p className="text-sm text-gray-700">On Track</p>
      </div>
      <div className="shadow text-center px-7 py-5 rounded-lg">
        <p className="text-2xl font-semibold text-[#244d3f]">6</p>
        <p className="text-sm text-gray-700">Need Attention</p>
      </div>
      <div className="shadow text-center px-7 py-5 rounded-lg">
        <p className="text-2xl font-semibold text-[#244d3f]">12</p>
        <p className="text-sm text-gray-700">Interactions This Month</p>
      </div>
    </div>
  );
};

export default FriendSummery;
