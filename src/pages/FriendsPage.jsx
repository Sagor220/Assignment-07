import { useLoaderData } from "react-router";
import { FaPhoneVolume } from "react-icons/fa6";
import { BiMessageDots } from "react-icons/bi";
import { GoDeviceCameraVideo } from "react-icons/go";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FaArchive } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";

const FriendsPage = () => {
  const friendData = useLoaderData();
  const {
    name,
    bio,
    picture,
    status,
    category,
    email,
    days_since_contact,
    goal,
    next_due_date,
  } = friendData;

  const handleCheckIn = (type) => {
    const timeline = JSON.parse(localStorage.getItem("timeline") || "[]");
    const newEntry = {
      id: Date.now(),
      type,
      friendName: name,
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    };
    timeline.unshift(newEntry);
    localStorage.setItem("timeline", JSON.stringify(timeline));
    toast.success(`${type} with ${name} logged!`);
  };

  return (
    <div className="max-w-275 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-[180px_1fr] lg:grid-cols-[220px_1fr] gap-3 p-4">
        {/* Left column */}
        <div className="flex flex-col gap-2">
          <div className="bg-white rounded-xl p-4 flex flex-col items-center gap-2 text-center shadow">
            <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-lg font-medium text-gray-500">
              <img className="mx-auto rounded-full" src={picture} alt={name} />
            </div>
            <p className="text-sm font-medium">{name}</p>
            <div className="space-y-1">
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
              <div>
                <span className="bg-green-100 text-green-800 px-3 py-1.5 rounded-full text-xs">
                  {category.toUpperCase()}
                </span>
              </div>
            </div>
            <p className="text-gray-500 italic font-medium">{bio}</p>
            <p className="text-xs text-gray-400">Email: {email}</p>
          </div>

          <button className="rounded-lg py-2 text-sm w-full shadow">
            <RiNotificationSnoozeLine className="mx-auto" />
            Snooze 2 weeks
          </button>

          <button className="rounded-lg py-2 text-sm w-full shadow">
            <FaArchive className="mx-auto" /> Archive
          </button>

          <button className="border border-red-200 rounded-lg py-2 text-sm w-full text-red-500">
            <MdDelete className="mx-auto" />
            Delete
          </button>
        </div>
        {/* Right column */}
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white shadow rounded-xl p-4 text-center">
              <p className="text-2xl font-medium">{days_since_contact}</p>
              <p className="text-xs text-gray-500">Days since contact</p>
            </div>
            <div className="bg-white shadow rounded-xl p-4 text-center">
              <p className="text-2xl font-medium">{goal}</p>
              <p className="text-xs text-gray-500">Goal (days)</p>
            </div>
            <div className="bg-white shadow rounded-xl p-4 text-center">
              <p className="text-base font-medium">{next_due_date}</p>
              <p className="text-xs text-gray-500">Next due</p>
            </div>
          </div>

          <div className="bg-white shadow rounded-xl p-4 flex justify-between items-center">
            <p className="text-sm mt-1">
              Connect every <strong>30 days</strong>
            </p>
            <button className="border rounded-lg px-3 py-1 text-xs">
              Edit
            </button>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <p className="text-lg font-semibold text-[#244d3f] mb-3">
              Quick check-in
            </p>
            <div className="grid grid-cols-3 gap-2">
              {/* ✅ onClick added */}
              <button
                onClick={() => handleCheckIn("Call")}
                className="shadow rounded-lg py-8 text-sm bg-gray-100"
              >
                <div className="space-y-2">
                  <FaPhoneVolume className="mx-auto" />
                  <div>Call</div>
                </div>
              </button>

              <button
                onClick={() => handleCheckIn("Text")}
                className="shadow rounded-lg py-4 text-sm bg-gray-100"
              >
                <div className="space-y-2">
                  <BiMessageDots className="mx-auto" />
                  <div>Text</div>
                </div>
              </button>

              <button
                onClick={() => handleCheckIn("Video")}
                className="shadow rounded-lg py-4 text-sm bg-gray-100"
              >
                <div className="space-y-2">
                  <GoDeviceCameraVideo className="mx-auto" />
                  <div>Video</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsPage;
