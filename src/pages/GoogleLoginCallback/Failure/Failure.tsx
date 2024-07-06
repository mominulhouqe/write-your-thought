import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchLoginFailureQuery } from "../../../redux/features/user/userApi";

const Failure = () => {
  const { data } = useFetchLoginFailureQuery({});
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          const errorMessage = data?.message || data?.data?.message;
          if (errorMessage === "User already exists with this email") {
            navigate("/login?error=duplicate_email");
          } else {
            navigate("/login");
          }
          clearInterval(timer);
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate, data]);

  return (
    <div className="flex items-center justify-center h-screen w-full bg-gray-100">
      <div className="w-[320px] p-6 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Login Failed</h2>
        {data?.message || data?.data?.message ? (
          <p className="text-red-500 text-center mb-4">
            {data?.message || data?.data?.message}
          </p>
        ) : (
          <p className="text-red-500 text-center mb-4">
            An unknown error occurred.
          </p>
        )}
        <p className="text-gray-600 text-center">
          Redirecting to the login page in{" "}
          <span className="font-semibold">{countdown}</span> second
          {countdown !== 1 ? "s" : ""}...
        </p>
      </div>
    </div>
  );
};

export default Failure;
