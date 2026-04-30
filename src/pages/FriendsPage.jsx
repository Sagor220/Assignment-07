import { useLoaderData } from "react-router";
import { FaPhoneVolume } from "react-icons/fa6";
import { BiMessageDots } from "react-icons/bi";
import { GoDeviceCameraVideo } from "react-icons/go";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FaArchive } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

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
  return (
    <div className="max-w-275 mx-auto">
      <div className="grid grid-cols-[220px_1fr] gap-3 p-4">
        {/* 1. Left column */}
        <div className="flex flex-col gap-2">
          {/* 1.1 Profile card */}
          <div className="bg-white  rounded-xl p-4 flex flex-col items-center gap-2 text-center shadow">
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
            <p className=" text-gray-500 italic font-medium">{bio}</p>
            <p className="text-xs text-gray-400">Email: {email}</p>
          </div>

          {/* 1.2 Snooze */}
          <button className=" rounded-lg py-2 text-sm w-full shadow">
            <RiNotificationSnoozeLine className="mx-auto" />
            Snooze 2 weeks
          </button>

          {/* 1.3 Archive */}
          <button className="rounded-lg py-2 text-sm w-full shadow">
            <FaArchive className="mx-auto" /> Archive
          </button>

          {/* 1.4 Delete */}
          <button className="border border-red-200 rounded-lg py-2 text-sm w-full text-red-500">
            <MdDelete className="mx-auto" />
            Delete
          </button>
        </div>

        {/* 2. Right column */}
        <div className="flex flex-col gap-3">
          {/* 2.1 Stats row */}
          <div className="grid grid-cols-3 gap-3">
            {/* 2.1.1 Days Since Contact */}
            <div className="bg-white shadow rounded-xl p-4 text-center">
              <p className="text-2xl font-medium">{days_since_contact}</p>
              <p className="text-xs text-gray-500">Days since contact</p>
            </div>

            {/* 2.1.2 Goal (Days) */}
            <div className="bg-white shadow rounded-xl p-4 text-center">
              <p className="text-2xl font-medium">{goal}</p>
              <p className="text-xs text-gray-500">Goal (days)</p>
            </div>

            {/* 2.1.3 Next Due */}
            <div className="bg-white shadow rounded-xl p-4 text-center">
              <p className="text-base font-medium">{next_due_date}</p>
              <p className="text-xs text-gray-500">Next due</p>
            </div>
          </div>

          {/* 2.2 Relationship Goal card */}
          <div className="bg-white shadow rounded-xl p-4 flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold text-[#244d3f]">
                Relationship goal
              </p>
              <p className="text-sm mt-1">
                Connect every <strong>30 days</strong>
              </p>
            </div>
            <button className="border rounded-lg px-3 py-1 text-xs">
              Edit
            </button>
          </div>

          {/* 2.3 Quick Check-In card */}
          <div className="bg-white shadow rounded-xl p-6">
            <p className="text-lg font-semibold text-[#244d3f] mb-3">
              Quick check-in
            </p>
            <div className="grid grid-cols-3 gap-2">
              <button className="shadow rounded-lg py-8 text-sm bg-gray-100 ">
                <div className="space-y-2">
                  <div>
                    <FaPhoneVolume className="mx-auto" />
                  </div>
                  <div>Call</div>
                </div>
              </button>

              <button className="shadow rounded-lg py-4 text-sm bg-gray-100">
                <div className="space-y-2">
                  <div>
                    <BiMessageDots className="mx-auto" />
                  </div>
                  <div>Text</div>
                </div>
              </button>

              <button className="shadow rounded-lg py-4 text-sm bg-gray-100">
                <div className="space-y-2">
                  <div>
                    <GoDeviceCameraVideo className="mx-auto " />
                  </div>
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
