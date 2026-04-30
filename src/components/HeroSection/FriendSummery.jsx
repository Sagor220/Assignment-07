const FriendSummery = () => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 max-w-275 mx-auto">
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
