import React, { useEffect, useState } from 'react';

import TaskManager from './TaskManager';
import TaskCard from './TaskCard';
import axios from 'axios';
import FirstRowDash from './FirstRowDash';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsync } from '../features/profile/profile-slicer';
import NavbarDashboard from './NavbarDashboard';

export default function CardDashboar() {
    const token = localStorage.access_token;
    const [completedTasks, setCompletedTasks] = useState(0);
    const [nutrient, setNutrient] = useState([])
    const [profile, setProfile] = useState([])
    const [bodyPart, setBodyPart] = useState("")
    const [exercise, setExercise] = useState("")
    const totalTasks = 5;

    const { profiles, loading, error } = useSelector((state) => state.profiles)
    const dispatch = useDispatch()

    const handleTaskCompletion = () => {
        if (completedTasks < totalTasks) {
            setCompletedTasks(completedTasks + 1);
        }
    };

    const progressPercentage = (completedTasks / totalTasks) * 100;

    async function fetchNutrient(params) {
        try {
            const { data } = await axios.get('http://localhost:3030/nutrient', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            setNutrient(data.data)

        } catch (error) {
            console.log(error);

        }
    }

    async function fetchProfile(params) {
        try {
            const { data } = await axios.get('http://localhost:3030/profile', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })

            setProfile(data.data)

        } catch (error) {
            console.log(error);
        }
    }

    async function fetchExcersice(params) {
        try {
            const { data } = await axios.get(`http://localhost:3030/exercise/${nutrient.day}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })

            setBodyPart(data.data.bodyPart)

        } catch (error) {
            console.log(error);
        }

    }


    async function fetchAPI(params) {

        const options = {
            method: 'GET',
            url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
            params: {
                limit: '5',
                offset: '0'
            },
            headers: {
                'x-rapidapi-key': '6afa0c2706msh04ea61ba8085b81p1fd693jsnb183b8f2350f',
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);

            setExercise(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    console.log(exercise, "<<<<<<<<<<,");

    useEffect(() => {
        fetchNutrient()
        fetchProfile()
        dispatch(fetchAsync())
    }, [])

    useEffect(() => {
        fetchExcersice()
    }, [nutrient.day])

    useEffect(() => {
        fetchAPI()
    }, [bodyPart])




    return (
        <>
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-neutral-700 border-dashed rounded-lg dark:border-gray-900">
                    <NavbarDashboard profile={profile}/>
                    <FirstRowDash nutrient={nutrient} bodyPart={bodyPart} fetchNutrient={fetchNutrient} />
                    <div className="grid grid-cols-4 gap-5 mb-4">
                        <div>
                            <div className="h-64 rounded-xl bg-[#282828] dark:bg-gray-800 flex flex-col item-center justify-center items-center">
                                {/* Progress doughnut chart */}
                                <p className="font-inter text-white font-semibold text-xl mb-5">Task Progress</p>
                                <div className="relative w-40 h-40 mb-5">
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
                                            className="text-neutral-500 stroke-current"
                                            r="14"
                                            cx="16"
                                            cy="16"
                                            fill="transparent"
                                            strokeWidth="4"
                                            strokeDasharray={`${progressPercentage}, 100`}
                                        />
                                    </svg>
                                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                        <p className="text-xl font-semibold font-inter text-white">{Math.round(progressPercentage)}%</p>
                                    </div>
                                </div>
                            </div>

                            <div className="h-[10.7rem] cursor-pointer bg-neutral-900 hover:bg-neutral-950 font-poppins rounded-xl text-white  mt-5 flex justify-center pl-10 overflow-hidden">
                                <div className="pt-14">
                                    <p className="text-neutral-400">
                                        Ask,
                                    </p>

                                    <p className="text-3xl font-semibold">
                                        Gym Bro!
                                    </p>
                                </div>
                                <div className="w-24 mt-24">
                                    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/cute-robot-say-hello-5665790-4721951.png?f=webp" alt="" />
                                </div>


                            </div>

                        </div>

                        <div className="col-span-3 h-[28rem] rounded-xl bg-[#282828] dark:bg-gray-800 flex flex-col  overflow-auto">
                            <p className="mb-1 ml-7 font-inter text-xl font-semibold text-white mt-5">
                                Task List
                            </p>


                            <div className="flex h-full ml-7 gap-8 pt-3 carousel rounded-box">
                                {exercise.length > 0 ? (
                                    exercise.map((el, index) => (
                                        <div className="carousel-item" key={el.id}>
                                            <TaskCard data={el} handleTaskCompletion={handleTaskCompletion} completedTasks={completedTasks} index={index}/>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-white ml-7">No exercises available</p>
                                )}
                            </div>

                        </div>

                    </div>



                </div>
            </div>


        </>
    )
}