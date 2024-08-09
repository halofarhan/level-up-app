import axios from "axios";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import { useNavigate } from "react-router";
import { GoogleLogin } from '@react-oauth/google';

export default function HomePage() {
    const [token, setToken] = useState()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()


    async function member(params) {
        try {
            const { data } = await axios.post("http://localhost:3030/token-midtrans", {}, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ0ZXN0XzJAbWFpbC5jb20iLCJpYXQiOjE3MjMwMDYxNTh9.VOQRVCqa4NtMel2PfkedUuoELLUM4Bn1tEDncQvtKpk'
                }
            })

            setToken(data.transaction_token)


            window.snap.pay(`${token}`, {
                onSuccess: async function (result) {
                    /* You may add your own implementation here */
                    await axios.post('http://localhost:3030/change-status', {}, {
                        headers: {
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ0ZXN0XzJAbWFpbC5jb20iLCJpYXQiOjE3MjMwMDYxNTh9.VOQRVCqa4NtMel2PfkedUuoELLUM4Bn1tEDncQvtKpk'
                        }
                    })
                    alert("payment success!"); console.log(result);
                    windows.location.reload()
                    console.log("SUCCESS EDIT IS MEMBER");

                },
                onPending: function (result) {
                    /* You may add your own implementation here */
                    alert("wating your payment!"); console.log(result);
                },
                onError: function (result) {
                    /* You may add your own implementation here */
                    alert("payment failed!"); console.log(result);
                },
                onClose: function () {
                    /* You may add your own implementation here */
                    alert('you closed the popup without finishing the payment');
                }
            })
        } catch (error) {
            console.log(error);

        }


    }
    async function handleLogin(e) {
        e.preventDefault()
        try {
            const addedData = { email, password }
            const { data } = await axios.post(`http://localhost:3030/login`, addedData)

            console.log(data);


            localStorage.setItem("access_token", data.access_token)
            localStorage.setItem("isProfile", data.isProfile)
            localStorage.setItem("isMember", data.isMember)
            closeModal()

        } catch (error) {
            console.log(error);

            Swal.fire({
                icon: "error",
                title: error.response.data.message,
            });
        }


    }

    async function handleGoogleLogin(codeResponse) {
        try {
            console.log(codeResponse);
            const { data } = await axios.post(
                `http://localhost:3030/google-login`, null, {
                headers: {
                    token: codeResponse.credential
                }
            });
            console.log(data);

            localStorage.setItem("access_token", data.access_token)
            localStorage.setItem("isProfile", data.data.isProfile)
            localStorage.setItem("isMember", data.data.isMember)
            closeModal()

        } catch (error) {
            console.log(error);
        }
    }

    function emailOnChange(event) {
        setEmail(event.target.value);
    }

    function passwordOnChange(event) {
        setPassword(event.target.value);
    }


    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <> <div style={{ fontFamily: 'Geist Sans, sans-serif' }} className="bg-black">
            <Navbar openModal={openModal} />
            <div className=" flex flex-col items-center bg-black -z-50">
                <div className="absolute flex h-full w-full " style={{ width: '100%', height: '100%' }}>
                    <div className="h-3/6 w-2/5 translate-y-full opacity-70">
                        <div className="h-full w-full opacity-70 blur-2xl">
                            <div className="h-full w-full blur-2xl">
                                <div className="rotate-30 h-full w-full opacity-40 bg-gray-500 blur-2xl" style={{ clipPath: 'polygon(40% 0%, 100% 30%, 80% 100%, 20% 100%, 0% 30%)' }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="h-2/6 w-1/6 translate-y-1/4 opacity-80">
                        <div className="h-full w-full opacity-80 blur-2xl">
                            <div className="h-full w-full blur-2xl">
                                <div className="rotate-45 h-full w-full  opacity-30 bg-gray-500" style={{ clipPath: 'polygon(60% 0%, 100% 40%, 70% 100%, 30% 100%, 0% 40%)' }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="h-3/6 w-2/5 translate-y-full opacity-60">
                        <div className="h-full w-full opacity-60 blur-2xl">
                            <div className="h-full w-full blur-2xl">
                                <div className="rotate-12 h-full w-full opacity-30 bg-gray-500" style={{ clipPath: 'polygon(50% 0%, 100% 20%, 80% 100%, 20% 100%, 0% 20%)' }}></div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex justify-center flex-col mx-56  mt-20">
                    <div className="font-geist text-8xl font-bold leading-none mt-28 text-center text-white"> Your Path to Peak Performance </div>

                    <p style={{ fontFamily: 'Geist Sans reguler, sans-serif' }} className="mt-10 text-lg leading-loose font-geist text-gray-400 text-center font-bold">Level Up is a cutting-edge fitness app that uses <span className="text-white">AI to personalize</span>  and optimize your fitness journey. <br /> <span className="text-white">Elevate your fitness with Level Up</span> and reach new heights effortlessly.</p>

                </div>

                {localStorage.isMember === "false" && (
                    <button onClick={member} type="button" class=" font-geist mt-12 py-3 z-10 px-5 inline-flex items-center gap-x-2 text-md font-medium rounded-lg border bg-white border-gray-200 text-gray-950 ">
                        Be Better Now
                    </button>
                )}

                {localStorage.isMember === "true" && (
                    <button onClick={() => {navigate('/my-dashboard')}} type="button" class=" font-geist mt-12 py-3 z-10 px-5 inline-flex items-center gap-x-2 text-md font-medium rounded-lg border bg-white border-gray-200 text-gray-950 ">
                        My Dashboard
                    </button>
                )}


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
                                            Login to your account
                                        </p>
                                        <p className="mt-2 text-sm leading-4 text-slate-600">
                                            You must be logged in to perform this action.
                                        </p>
                                    </div>
                                    <div className="mt-7 flex flex-col gap-2">
                                        <div className="flex justify-center">
                                            <GoogleLogin onSuccess={handleGoogleLogin} />
                                        </div>
                                    </div>
                                    <div className="flex w-full items-center gap-2 py-6 text-sm text-neutral-400">
                                        <div className="h-px w-full bg-slate-200" />
                                        OR
                                        <div className="h-px w-full bg-slate-200" />
                                    </div>

                                    <form className="w-full" onSubmit={handleLogin}>
                                        <label htmlFor="email" className="sr-only">
                                            Email address
                                        </label>
                                        <input
                                            name="email"
                                            type="email"
                                            required=""
                                            className="block w-full rounded-lg border bg-white border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                                            placeholder="Email Address"
                                            defaultValue=""
                                            onChange={emailOnChange}
                                        />
                                        <label htmlFor="password" className="sr-only">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            required=""
                                            className="mt-2 block w-full rounded-lg border bg-white border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                                            placeholder="Password"
                                            defaultValue=""
                                            onChange={passwordOnChange}
                                        />

                                        <button
                                            type="submit"
                                            className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400"
                                        >
                                            Continue
                                        </button>
                                    </form>
                                    <div className="mt-6 text-center text-sm text-slate-600">
                                        Don't have an account?
                                        <a href="/signup" className="font-medium text-[#4285f4]">
                                            Sign up
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>

            <Pricing />
        </div>

        </>
    )
}