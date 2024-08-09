import { useNavigate } from "react-router"
import logo from "../assets/levelUp.png"

export default function Navbar({ openModal }) {
const navigate = useNavigate()


    function handleLogout() {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <>
            <>
                {/* ========== HEADER ========== */}
                <header style={{ fontFamily: 'Geist Sans, sans-serif' }} className="fixed flex flex-wrap md:justify-start md:flex-nowrap backdrop-filter backdrop-blur-xl bg-opacity-50 bg-black z-50 w-full py-2">
                    <nav className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center md:px-8 mx-auto">
                        <div className="md:col-span-3">
                            {/* Logo */}
                            <img className="h-10" src={logo} alt="" />
                            {/* End Logo */}
                        </div>
                        {/* Button Group */}
                        <div className="flex items-center gap-x-1 md:gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">

                            {localStorage.isMember === "false" && (
                                <button type="button" class="z-50 font-geist  py-2  px-5 inline-flex items-center gap-x-2 text-md font-medium rounded-lg border bg-white border-gray-200 text-gray-950 ">
                                    Member
                                </button>
                            )}

                            {localStorage.isMember === "true" && (
                                <button onClick={() => {navigate("/my-dashboard")}} type="button" class="z-50 font-geist  py-2  px-5 inline-flex items-center gap-x-2 text-md font-medium rounded-lg border bg-white border-gray-200 text-gray-950 ">
                                    My Dashboard
                                </button>
                            )}

                            {!localStorage.access_token && (
                                <button onClick={openModal} type="button" class="z-50 font-geist  py-2  px-5 inline-flex items-center gap-x-2 text-md font-medium rounded-lg border bg-black border-gray-200 text-white ">
                                    Login
                                </button>
                            )}
                            {localStorage.access_token && (
                                <button onClick={handleLogout} type="button" class="z-50 font-geist  py-2  px-5 inline-flex items-center gap-x-2 text-md font-medium rounded-lg border bg-black border-gray-200 text-white ">
                                    Log Out
                                </button>
                            )}
                        </div>
                        {/* End Button Group */}
                        {/* Collapse */}
                        <div
                            id="hs-navbar-hcail"
                            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"
                            aria-labelledby="hs-navbar-hcail-collapse"
                        >
                            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
                                <div>
                                    <a
                                        className="text-white "
                                        href="#"
                                        aria-current="page"
                                    >
                                        Work
                                    </a>
                                </div>
                                <div>
                                    <a
                                        className="text-white"
                                        href="#"
                                    >
                                        Services
                                    </a>
                                </div>
                                <div>
                                    <a
                                        className="text-white"
                                        href="#"
                                    >
                                        About
                                    </a>
                                </div>
                                <div>
                                    <a
                                        className="text-white"
                                        href="#"
                                    >
                                        Careers
                                    </a>
                                </div>
                                <div>
                                    <a
                                        className="text-white"
                                        href="#"
                                    >
                                        Blog
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* End Collapse */}
                    </nav>
                    <>

                    </>
                </header>
                {/* ========== END HEADER ========== */}
            </>



        </>
    )
}