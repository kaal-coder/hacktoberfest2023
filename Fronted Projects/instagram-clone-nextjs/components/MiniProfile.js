import React from "react";

import { useAuth } from "../context/useAuth";

const MiniProfile = () => {
  const { user, onSignin, onSignout } = useAuth();

  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src={
          user.photoURL ||
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
        }
        alt="avatar"
        className="cursor-pointer hover:scale-110 transition duration-150 ease-out rounded-full border p-[2px] w-16 h-16"
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">{user.displayName || ""}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button
        onClick={user ? onSignout : onSignin}
        className={`ml-2 text-sm font-semibold ${
          user ? "text-red-400" : "text-blue-400"
        }`}
      >
        {user ? "Sign Out" : "Sign In"}
      </button>
    </div>
  );
};

export default MiniProfile;
