import React, { useState } from "react";
import TaskCard from "./TaskCard";

const Task = () => {
  const [input, setInput] = useState({
    title: "",
    body: "",
  });

  const [array, setArray] = useState([]);

  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const submit = () => {
    setArray([...array, input]);
    setInput({
      title: "",
      body: "",
    });
  };
  const del = (id) => {
    const newarray = array.filter((task, index) => index !== id);
    setArray(newarray);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-start p-4 gap-6 w-full max-w-7xl mx-auto">
      <div className="w-full md:w-[400px] lg:w-[450px]">
        <div className="max-w-full rounded-xl m-4 overflow-hidden shadow-md hover:shadow-xl bg-white border border-gray-100 transition-all duration-300 hover:-translate-y-0.5">
          <div className="px-6 py-5 space-y-4">
            <div className="relative">
              <label className="absolute -top-2.5 left-2 bg-white px-1 text-xs text-gray-500">
                Title
              </label>
              <input
                type="text"
                value={input.title}
                name="title"
                onChange={change}
                placeholder="Enter task title"
                className="w-full font-medium text-lg border-2 border-gray-200 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none px-3 py-2 transition-all duration-200"
              />
            </div>
            <div className="relative">
              <label className="absolute -top-2.5 left-2 bg-white px-1 text-xs text-gray-500">
                Description
              </label>
              <textarea
                type="text"
                name="body"
                value={input.body}
                onChange={change}
                placeholder="Enter task description"
                className="w-full text-gray-600 border-2 border-gray-200 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none px-3 py-2 transition-all duration-200"
              />
            </div>
          </div>
          <div className="px-6 pb-5">
            <button
              onClick={submit}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200 active:scale-[0.98] shadow-sm hover:shadow flex items-center justify-center space-x-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[600px] lg:w-[700px]">
        <div className="grid grid-cols-1 gap-4">
          {array &&
            array.map((item, index) => (
              <TaskCard
                key={index}
                title={item.title}
                body={item.body}
                id={index}
                delid={del}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Task;
