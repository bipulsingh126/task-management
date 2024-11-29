import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
        </div>
      </header>

      {/* Main content */}
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* About section */}
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                At TaskMaster Pro, we believe that effective task management is
                the key to unlocking productivity and achieving your goals. Our
                mission is to empower individuals and teams to organize,
                prioritize, and execute their tasks seamlessly.
              </p>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 mb-4">
                To transform the way people manage their tasks and projects,
                fostering collaboration and efficiency in every endeavor.
              </p>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p>
                {" "}
                We aim to provide intuitive, user-friendly tools that simplify
                task management, helping users to:
                <p>
                  {" "}
                  <span className="font-bold"> Stay Organized:</span> Easily
                  track tasks and deadlines.{" "}
                </p>
                <p>
                  <span className="font-bold">Boost Productivity:</span> Focus
                  on what matters most with prioritized task lists.
                </p>
                <p>
                  <span className="font-bold">Foster Collaboration:</span> Work
                  together seamlessly with shared projects and teamwork
                  features.
                </p>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
