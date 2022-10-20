import { useState } from "react";

const Card = ({ data, setData, onDelete, setEditStatus }) => {
  const [hasHovered, setHasHovered] = useState(false);

  return (
    <div
      className="px-6"
      onMouseEnter={() => setHasHovered(true)}
      onMouseLeave={() => setHasHovered(false)}
    >
      <div className="py-4 border-b flex items-center justify-between border-gray-300">
        <div className="flex gap-4">
          <div className="rounded-full border mt-[0.35rem] border-gray-400 w-4 h-4"></div>
          <div className="">
            <h1 className="text-lg font-medium mb-1">{data.title}</h1>
            {data.description && (
              <p className="text-md text-gray-500">{data.description}</p>
            )}
          </div>
        </div>
        <div
          className={`${
            hasHovered ? "opacity-1" : "opacity-0"
          } flex border border-gray-300 rounded-lg transition duration-300 overflow-hidden`}
        >
          <button
            onClick={() => onDelete(data._id)}
            className="px-4 py-2 border-r border-gray-300 hover:bg-red-500 text-gray-600 hover:text-gray-50 transition duration-150"
          >
            <i className="uil uil-trash-alt text-xl" />
          </button>

          <button
            onClick={() => {
              setEditStatus(data._id);
              setData(data);
            }}
            className="px-4 py-2 hover:bg-blue-500 text-gray-600 hover:text-gray-50 transition duration-150"
          >
            <i className="uil uil-edit text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
