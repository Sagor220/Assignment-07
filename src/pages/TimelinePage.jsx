import { MdOutlinePhoneInTalk } from "react-icons/md";
import { BiMessageDots } from "react-icons/bi";
import { GoDeviceCameraVideo } from "react-icons/go";

const icons = {
  Call: <MdOutlinePhoneInTalk className="text-green-500 text-xl" />,
  Text: <BiMessageDots className="text-blue-500 text-xl" />,
  Video: <GoDeviceCameraVideo className="text-purple-500 text-xl" />,
};

const TimelinePage = () => {
  const timeline = JSON.parse(localStorage.getItem("timeline") || "[]");

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Timeline</h1>

      {timeline.length === 0 ? (
        <p className="text-gray-400">No activity yet.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {timeline.map((entry) => (
            <div
              key={entry.id}
              className="flex items-center gap-4 bg-white border rounded-xl px-4 py-3 shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                {icons[entry.type]}
              </div>
              <div>
                <p className="text-sm">
                  <span className="font-semibold">{entry.type}</span>
                  <span className="text-gray-500">
                    {" "}
                    with {entry.friendName}
                  </span>
                </p>
                <p className="text-xs text-gray-400">{entry.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimelinePage;
