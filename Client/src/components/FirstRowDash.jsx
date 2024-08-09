import axios from "axios";
import { useState } from "react";

export default function FirstRowDash({ nutrient, bodyPart, fetchNutrient }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenCalorie, setIsModalOpenCalorie] = useState(false);
    const [protein, setProtein] = useState()
    const [calorie, setCalorie] = useState()
    const token = localStorage.access_token;


    async function addProtein(e) {
        console.log(protein, "ini protein");
        e.preventDefault()
        const day = nutrient.day
        const addedData = {
            protein, day
        }

        try {
            const { data } = await axios.post(`http://localhost:3030/add-protein`, addedData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            closeModal()
            fetchNutrient();
        } catch (error) {
            console.log(error);
        }
    }

    async function addCalorie(e) {
        console.log(protein, "ini calorie");
        e.preventDefault()
        const day = nutrient.day
        const addedData = {
            calorie, day
        }

        try {
            const { data } = await axios.post(`http://localhost:3030/add-calorie`, addedData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            closeModalCalorie()
            fetchNutrient();
        } catch (error) {
            console.log(error);
        }
    }

    async function nextDay(params) {
        try {
            const { data } = await axios.put(`http://localhost:3030/next-day`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })

            console.log(data);

            fetchNutrient();
        } catch (error) {
            console.log(error);
        }
    }


    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openModalCalorie = () => {
        setIsModalOpenCalorie(true);
    };

    const closeModalCalorie = () => {
        setIsModalOpenCalorie(false);
    };


    return (
        <>

            <div className="grid grid-cols-4 gap-5 mb-4">
                <div className="h-28 rounded-xl bg-gray-50 dark:bg-gray-800 flex flex-col item-center justify-center">
                    <p className="mb-1 ml-7 font-inter font-semibold text-neutral-400">
                        Day {nutrient.day}
                    </p>
                    <p className="ml-7 text-2xl font-inter font-semibold text-neutral-800">
                        {bodyPart} day
                    </p>
                </div>
                <div className="h-28 rounded-xl bg-gray-50 dark:bg-gray-800 flex justify-between ">
                    <div className='flex flex-col item-center justify-center'>
                        <p className="mb-1 ml-7 font-inter font-semibold text-neutral-400">
                            Calorie
                        </p>
                        <p className="ml-7 text-xl font-inter font-semibold text-neutral-800">
                            {nutrient.calorie} / {nutrient?.calorieNeeds}
                        </p>
                    </div>
                    <div onClick={openModalCalorie} className='flex justify-center items-center  mr-6 '>
                        <img className='w-10 hover:bg-neutral-200 p-2 rounded-full' height={2} src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/plus-icon.png" alt="" />
                    </div>

                </div>
                <div className="h-28 rounded-xl bg-gray-50 dark:bg-gray-800 flex justify-between ">
                    <div className='flex flex-col item-center justify-center'>
                        <p className="mb-1 ml-7 font-inter font-semibold text-neutral-400">
                            Protein
                        </p>
                        <p className="ml-7 text-xl font-inter font-semibold text-neutral-800">
                            {nutrient.protein} / {nutrient?.proteinNeeds}
                        </p>
                    </div>
                    <div onClick={openModal} className='flex justify-center items-center  mr-6 '>
                        <img className='w-10 hover:bg-neutral-200 p-2 rounded-full' height={2} src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/plus-icon.png" alt="" />
                    </div>

                </div>
                <div onClick={nextDay} className="cursor-pointer h-28 rounded-2xl bg-gradient-to-l from-neutral-900 to-neutral-800  flex flex-col item-center justify-center">
                    <p className=" ml-7 font-inter font-semibold text-neutral-400">
                        Next
                    </p>
                    <p className="ml-7 text-3xl font-inter font-semibold text-white">
                        Day
                    </p>
                </div>
            </div>

            {/* Modal Protein */}

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
                                        Hows ur food?
                                    </p>
                                    <p className="mt-2 text-sm leading-4 text-slate-600">
                                        insert how much you eat the protein before
                                    </p>
                                </div>

                                <form className="w-full mt-4" onSubmit={addProtein} >

                                    <input
                                        className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                                        placeholder="Amount your protein in gram"
                                        defaultValue=""
                                        onChange={(e) => setProtein(e.target.value)}
                                    />


                                    <button
                                        type="submit"
                                        className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400"
                                    >
                                        Add
                                    </button>

                                </form>
                                <button
                                    onClick={closeModal}
                                    className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-white p-2 py-3 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {isModalOpenCalorie && (
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
                                        Hows ur food?
                                    </p>
                                    <p className="mt-2 text-sm leading-4 text-slate-600">
                                        insert how much you eat the calorie before
                                    </p>
                                </div>

                                <form className="w-full mt-4" onSubmit={addCalorie} >

                                    <input
                                        className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                                        placeholder="Amount your calorie in gram"
                                        defaultValue=""
                                        onChange={(e) => setCalorie(e.target.value)}
                                    />


                                    <button
                                        type="submit"
                                        className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400"
                                    >
                                        Add
                                    </button>

                                </form>
                                <button
                                    onClick={closeModalCalorie}
                                    className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-white p-2 py-3 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal Protein */}
        </>
    )
}