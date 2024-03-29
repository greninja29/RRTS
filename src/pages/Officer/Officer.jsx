import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/context";

const Officer = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4 bg-gray-300 h-screen">
      <h1 className="flex justify-center h-20 items-center font-bold text-3xl">
        Community Officer
      </h1>
      <div className="flex justify-center h-55 items-center">
        {user?.displayName ? (
          <div className="space-x-7">
            <button
              className="p-3 rounded-md font-bold text-3xl"
              onClick={handleSignOut}
            >
              LogOut
            </button>
            <button className="bg-emerald-500 rounded p-3 text-white font-bold text-3xl border border-emerald-500">
              <Link
                // className="bg-emerald-500 rounded p-3 text-white font-bold text-3xl"
                to="/officersignin"
              >
                Access
              </Link>
            </button>
          </div>
        ) : (
          <button className="bg-emerald-500 rounded p-3 text-white font-bold text-3xl border border-emerald-500">
            <Link
              // className="bg-emerald-500 rounded p-3 text-white font-bold text-3xl"
              to="/officersignin"
            >
              Access
            </Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Officer;
