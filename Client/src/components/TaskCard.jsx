import axios from "axios";
import { useEffect, useState } from "react";

export default function TaskCard({ data, handleTaskCompletion, completedTasks, index }) {
    const [isModalOpen, setIsModalOpen] = useState(false);


    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="h-32 w-48 mb-11 ">
                <div className="rounded-md">
                    <img className="rounded-xl" src={data.gifUrl} alt="" />
                </div>
                <div className="text-white font-poppins text-md mt-3 flex truncate">
                    {data.name}
                </div>
                <div className="text-neutral-500 font-poppins text-sm mt-1 flex">
                    5 min
                </div>
                <button onClick={openModal} className="text-white font-poppins flex justify-center w-full mt-3 bg-neutral-700 p-2 rounded-xl">
                    Detail
                </button>
                <button onClick={handleTaskCompletion} disabled={completedTasks > index} className="text-white font-poppins flex justify-center w-full mt-3 bg-neutral-700 p-2 rounded-xl">
                    Done
                </button>
            </div>

            {isModalOpen && (
                <div
                    tabIndex={-1}
                    className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex"
                >
                    <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                        <div className="relative bg-white   rounded-lg shadow">
                            <div className="p-5">
                                <h3 className="text-2xl mb-0.5 font-medium" />
                                <p className="mb-4 text-sm font-normal text-gray-800" />
                                <div className="text-center">
                                    <p className="mb-3 text-2xl font-semibold leading-5 text-slate-900">
                                        {data.name}
                                    </p>
                                    <img className="w-80 ml-10" src={data.gifUrl} alt="" />
                                    <p className="text-xl font-semibold leading-5 text-slate-900"> instructions </p>
                                    <p className="text-md mt-5 font-thin leading-5 text-slate-800">
                                        {data.instructions.map ( el => {
                                            return (
                                               el
                                            )
                                        }) }
                                    </p>
                                </div>

                                
                                <button
                                    onClick={closeModal}
                                    className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-white p-2 py-3 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}