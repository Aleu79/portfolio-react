import React from 'react';

function Loading({ darkMode }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`animate-spin rounded-full h-16 w-16 border-t-4 ${
          darkMode ? 'border-blue-500' : 'border-indigo-500'
        }`}
      ></div>
      <p
        className={`mt-4 text-lg font-medium ${
          darkMode ? 'text-gray-300' : 'text-gray-800'
        }`}
      >
        Loading, please wait...
      </p>
    </div>
  );
}

export default Loading;
