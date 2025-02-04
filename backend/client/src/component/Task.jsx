import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import { toast } from "react-toastify";
import Update from "./Update";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Task = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    title: "",
    body: "",
  });
  const token = sessionStorage.getItem("id");
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const [array, setArray] = useState([]);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [updateTaskIndex, setUpdateTaskIndex] = useState(null);

  useEffect(() => {
    if (!isLoggedIn || !token) {
      toast.error("Please login first");
      navigate("/login");
      return;
    }
  }, [isLoggedIn, token, navigate]);

  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        if (!isLoggedIn || !token) {
          return;
        }

        const res = await axios.get(
          `${window.location.origin}/api/v2/getalltasks/${token}`
        );

        if (res.data.success) {
          setArray(res.data.tasks);
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
        toast.error(error.response?.data?.message || "Failed to fetch tasks");
      }
    };

    fetchTasks();
  }, [token, isLoggedIn]);

  const submit = async () => {
    try {
      if (!isLoggedIn || !token) {
        toast.error("Please login first");
        navigate("/login");
        return;
      }

      if (input.title === "" || input.body === "") {
        toast.error("Title and description should not be empty");
        return;
      }

      const res = await axios.post(`${window.location.origin}/api/v2/addtask`, {
        title: input.title,
        body: input.body,
        email: token,
      });

      if (res.data.success) {
        setArray([res.data.task, ...array]);
        setInput({
          title: "",
          body: "",
        });
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error("Error adding task:", error);
      toast.error(error.response?.data?.message || "Failed to add task");
    }
  };

  const handleUpdateTask = async (taskId, updatedData) => {
    try {
      if (!isLoggedIn || !token) {
        toast.error("Please login first");
        navigate("/login");
        return;
      }

      const res = await axios.put(
        `${window.location.origin}/api/v2/updatetask/${taskId}`,
        {
          title: updatedData.title,
          body: updatedData.body,
          email: token,
        }
      );

      if (res.data.success) {
        setArray((prevArray) =>
          prevArray.map((task) => (task._id === taskId ? res.data.task : task))
        );
        setIsUpdateModalOpen(false);
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error("Error updating task:", error);
      toast.error(error.response?.data?.message || "Failed to update task");
    }
  };

  const deleteTask = async (taskId) => {
    try {
      if (!isLoggedIn || !token) {
        toast.error("Please login first");
        navigate("/login");
        return;
      }

      const res = await axios.delete(
        `${window.location.origin}/api/v2/deletetask/${taskId}`
      );

      if (res.data.success) {
        setArray((prevArray) => prevArray.filter((task) => task._id !== taskId));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error(error.response?.data?.message || "Failed to delete task");
    }
  };

  const handleEdit = (index) => {
    setUpdateTaskIndex(index);
    setIsUpdateModalOpen(true);
  };

  const openUpdateModal = (taskIndex) => {
    setUpdateTaskIndex(taskIndex);
    setIsUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setUpdateTaskIndex(null);
    setIsUpdateModalOpen(false);
  };

  const handleUpdate = (updatedTask) => {
    const newArray = [...array];
    newArray[updateTaskIndex] = updatedTask;
    setArray(newArray);
    setIsUpdateModalOpen(false);
    setUpdateTaskIndex(null);
    toast.success("Task Updated Successfully");
  };

  const handleCloseUpdateModal = () => {
    setIsUpdateModalOpen(false);
    setUpdateTaskIndex(null);
  };

  if (!isLoggedIn || !token) {
    return null; // Don't render anything if not logged in
  }

  return (
    <>
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
                  onDelete={() => deleteTask(item._id)}
                  onEdit={() => handleEdit(index)}
                />
              ))}
          </div>
        </div>
      </div>
      {/* Update Modal */}
      {isUpdateModalOpen && updateTaskIndex !== null && (
        <div className="relative z-50">
          <Update
            initialTask={array[updateTaskIndex]}
            onUpdate={(updatedTask) =>
              handleUpdateTask(array[updateTaskIndex]._id, updatedTask)
            }
            onClose={handleCloseUpdateModal}
          />
        </div>
      )}
    </>
  );
};

export default Task;
