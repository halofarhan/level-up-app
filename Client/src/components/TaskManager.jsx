
import React, { useState } from 'react';

const TaskManager = () => {
    // State untuk melacak tugas yang telah selesai
    const [completedTasks, setCompletedTasks] = useState(0);

    // Total tugas yang ada
    const totalTasks = 5;

    // Fungsi untuk menambah jumlah tugas yang selesai
    const handleTaskCompletion = () => {
        if (completedTasks < totalTasks) {
            setCompletedTasks(completedTasks + 1);
        }
    };

    // Menghitung persentase progress
    const progressPercentage = (completedTasks / totalTasks) * 100;

    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-neutral-700 border-dashed rounded-lg dark:border-gray-900">
                <h2 className="text-2xl font-bold mb-4">Task Manager</h2>

                {/* Progress doughnut chart */}
                <div className="relative w-32 h-32">
                    <svg className="absolute top-0 left-0 transform -rotate-90" width="100%" height="100%" viewBox="0 0 32 32">
                        <circle
                            className="text-gray-200 stroke-current"
                            r="14"
                            cx="16"
                            cy="16"
                            fill="transparent"
                            strokeWidth="4"
                        />
                        <circle
                            className="text-blue-500 stroke-current"
                            r="14"
                            cx="16"
                            cy="16"
                            fill="transparent"
                            strokeWidth="4"
                            strokeDasharray={`${progressPercentage}, 100`}
                        />
                    </svg>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <p className="text-xl font-semibold text-blue-500">{Math.round(progressPercentage)}%</p>
                    </div>
                </div>

                {/* Daftar tugas */}
                <div className="grid grid-cols-1 gap-4 mt-6">
                    {['Chest Exercise', 'Back Exercise', 'Arm Exercise', 'Lower Body Exercise', 'Cardio'].map((task, index) => (
                        <div key={index} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <p className="text-xl font-semibold">{task}</p>
                            <button
                                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                                onClick={handleTaskCompletion}
                                disabled={completedTasks > index}
                            >
                                Done
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TaskManager;



