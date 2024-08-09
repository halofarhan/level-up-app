import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"

export default function NewProfilePage() {
    const token = localStorage.access_token;
    const [username, setUsername] = useState("")
    const [age, setAge] = useState(0)
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [gender, setGender] = useState("")
    const [program, setProgram] = useState("")
    const navigate = useNavigate()

    async function newProfile(e) {
        e.preventDefault()
        try {
            const addedData = {
                username, age, height, weight, gender, program
            }

            console.log(addedData, "<<<<");

            const { data } = axios.post('http://localhost:3030/profile', addedData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })

            localStorage.setItem('isProfile', true)
            navigate('/my-dashboard')

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>

            {/* component */}
            <div className="flex h-screen bg-gradient-to-r from-neutral-900 to-neutral-800">
                <div className="m-auto">
                    <div>
                        <button
                            type="button"
                            className="relative w-full flex justify-center items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-900  focus:outline-none   transition duration-300 transform active:scale-95 ease-in-out"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                enableBackground="new 0 0 24 24"
                                height="24px"
                                viewBox="0 0 24 24"
                                width="24px"
                                fill="#FFFFFF"
                            >
                                <g>
                                    <rect fill="none" height={24} width={24} />
                                </g>
                                <g>
                                    <g>
                                        <path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z" />
                                    </g>
                                </g>
                            </svg>
                            <span className="pl-2 mx-1">Create A Profile for best exprience</span>
                        </button>
                        <form action="">
                            <div className="mt-5 bg-white rounded-lg shadow">
                                <div className="flex">
                                    <div className="flex-1 py-3 pt-5 pl-5 overflow-hidden">

                                        <h1 className="inline text-2xl font-semibold leading-none">
                                            Create A Profile
                                        </h1>
                                    </div>
                                </div>
                                <div className="px-5 pb-1">

                                    <input
                                        placeholder="Username"
                                        onChange={(e) => setUsername(e.target.value)}
                                        className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                                    />
                                    <input
                                        placeholder="Age"
                                        onChange={(e) => setAge(e.target.value)}
                                        className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                                    />
                                    <div className="flex">
                                        <div className="flex-grow w-1/2 pr-2">
                                            <input
                                                onChange={(e) => setWeight(e.target.value)}
                                                placeholder="Weight"
                                                className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                                            />
                                        </div>
                                        <div className="flex-grow">
                                            <input
                                                onChange={(e) => setHeight(e.target.value)}
                                                placeholder="height"
                                                className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="px-5 pb-5">
                                    <input
                                        placeholder="gender"
                                        onChange={(e) => setGender(e.target.value)}
                                        className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                                    />
                                    <input
                                        placeholder="program"
                                        onChange={(e) => setProgram(e.target.value)}
                                        className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                                    />
                                </div>
                                <hr className="mt-4" />
                                <div className="flex flex-row-reverse p-3">
                                    <div className="flex-initial pl-3">
                                        <button
                                            type="submit"
                                            className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out"
                                            onClick={newProfile}
                                        >

                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                width="24px"
                                                fill="#FFFFFF"
                                            >
                                                <path d="M0 0h24v24H0V0z" fill="none" />
                                                <path
                                                    d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z"
                                                    opacity=".3"
                                                />
                                                <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z" />
                                            </svg>
                                            <span className="pl-2 mx-1">Save</span>
                                        </button>
                                    </div>
                                    <div className="flex-initial">
                                        <button
                                            type="button"
                                            className="flex items-center px-5 py-2.5 font-medium tracking-wide text-black capitalize rounded-md  hover:bg-red-200 hover:fill-current hover:text-red-600  focus:outline-none  transition duration-300 transform active:scale-95 ease-in-out"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                width="24px"
                                            >
                                                <path d="M0 0h24v24H0V0z" fill="none" />
                                                <path d="M8 9h8v10H8z" opacity=".3" />
                                                <path d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z" />
                                            </svg>
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}