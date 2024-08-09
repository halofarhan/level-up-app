import React, { useState } from 'react';

function Task ({ title }){
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    if (progress < 100) {
      setProgress(progress + 20); // Menambahkan progress sebesar 20% setiap kali tombol "Done" ditekan
    }
  };

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <p className="text-xl font-semibold">{title}</p>
        <p className="text-sm text-gray-500">{progress}%</p>
      </div>
      <div className="bg-gray-200 rounded-lg h-4">
        <div
          className={`bg-blue-500 rounded-lg h-4 transition-width duration-500 ease-in-out`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <button
        className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
        onClick={increaseProgress}
        disabled={progress >= 100}
      >
        Done
      </button>
    </div>
  );
};

export default Task;