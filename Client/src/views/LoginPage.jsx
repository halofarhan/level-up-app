import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google';


export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()


    async function handleLogin(e) {
        e.preventDefault()
        try {
            const addedData = { email, password }
            const { data } = await axios.post(`http://localhost:3030/login`, addedData)

            console.log(data);


            localStorage.setItem("access_token", data.access_token)
            localStorage.setItem("isProfile", data.isProfile)
            localStorage.setItem("isMember", data.isMember)
            

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
            navigate('/')

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


    return (
        <>

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
                            <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
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
                                    autoComplete="email"
                                    required=""
                                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                                    placeholder="Email Address"
                                    defaultValue=""
                                onChange={emailOnChange}
                                />
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    autoComplete="current-password"
                                    required=""
                                    className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
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
            {/*             
            <div>
                
                <form action="" method="post" onSubmit={handleLogin}>
                    <div>
                        <label htmlFor=""> Email </label>
                        <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor=""> Password </label>
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button className='' type="submit">Login!</button>
                </form>

            </div> */}

        </>
    )
}