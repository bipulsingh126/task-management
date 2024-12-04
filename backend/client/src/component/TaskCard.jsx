import React from "react";

const TaskCard = ({ title, body, onDelete, onEdit }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl mt-4 border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50">
      <div className="border-b border-gray-100 bg-gray-50/50 rounded-t-xl px-6 py-3">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Your Task
        </h1>
      </div>
      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-1 flex-grow">
            {title}
          </h3>
          <div className="flex space-x-1 sm:space-x-2 shrink-0">
            <button
              onClick={onEdit}
              className="p-1.5 hover:bg-blue-50 rounded-lg transition-colors duration-200 group"
            >
              <svg
                className="w-5 h-5 text-blue-500 group-hover:text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </button>
            <button
              onClick={onDelete}
              className="p-1.5 hover:bg-red-50 rounded-lg transition-colors duration-200 group"
            >
              <svg
                className="w-5 h-5 text-red-500 group-hover:text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg> 
            </button>
          </div>
        </div>
        <div className="mt-4 bg-gray-50/50 rounded-lg p-3 sm:p-4">
          <p className="text-gray-600 text-sm sm:text-base line-clamp-3">
            {body.split("", 100).join("")}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="whitespace-nowrap">Created just now</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              Active
            </span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Priority
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
