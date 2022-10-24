import React from "react";

const Story = ({ username, img }) => {
  return (
    <div title={username} className="flex-col items-center justify-center">
      <img
        src={img}
        alt="avatar"
        className="hover:scale-110 transition transform duration-200 ease-out h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer"
      />
      <p className="text-xs w-14 truncate">{username}</p>
    </div>
  );
};

export default Story;
