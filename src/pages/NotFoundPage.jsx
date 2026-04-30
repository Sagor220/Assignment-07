import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-4">
      {/* Floating 404 */}
      <h1
        className="text-9xl font-bold text-gray-200 animate-bounce"
        style={{ animationDuration: "2s" }}
      >
        404
      </h1>

      {/* Fade in content */}
      <div
        className="flex flex-col items-center gap-3"
        style={{ animation: "fadeIn 1s ease forwards" }}
      >
        <h2 className="text-2xl font-semibold text-gray-700">Page Not Found</h2>
        <p className="text-gray-400 max-w-md">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Pulse button */}
        <Link
          to="/"
          className="mt-4 bg-green-600 hover:bg-[#244d3f] text-white px-6 py-2.5 rounded-full font-medium "
        >
          Back to Home
        </Link>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;
