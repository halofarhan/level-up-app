export default function Pricing() {

    return (
        <>
            <section className="bg-black">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                        {/* Pricing Card */}
                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-[#111111] rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 className="mb-4 text-2xl text-white font-semibold">Starter</h3>
                            <p className="font-light text-gray-100 sm:text-lg dark:text-gray-400">
                                Best option for personal use &amp; for your next project.
                            </p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl text-white font-extrabold">$29</span>
                                <span className="text-gray-500 dark:text-gray-400">/month</span>
                            </div>
                            {/* List */}
                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex text-white items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>Individual configuration</span>
                                </li>
                                <li className="flex text-white items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>No setup, or hidden fees</span>
                                </li>
                                <li className="flex text-white items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        Team size: <span className="font-semibold">1 developer</span>
                                    </span>
                                </li>
                                <li className="flex text-white items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        Premium support: <span className="font-semibold">6 months</span>
                                    </span>
                                </li>
                                <li className="flex text-white items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        Free updates: <span className="font-semibold">6 months</span>
                                    </span>
                                </li>
                            </ul>
                            <a
                                href="#"
                                className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                            >
                                Get started
                            </a>
                        </div>
                        {/* Pricing Card */}
                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-[#111111] rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 className="mb-4 text-2xl text-white font-semibold">Starter</h3>
                            <p className="font-light text-gray-100 sm:text-lg dark:text-gray-400">
                                Best option for personal use &amp; for your next project.
                            </p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl text-white font-extrabold">$29</span>
                                <span className="text-gray-500 dark:text-gray-400">/month</span>
                            </div>
                            {/* List */}
                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex text-white items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>Individual configuration</span>
                                </li>
                                <li className="flex text-white items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>No setup, or hidden fees</span>
                                </li>
                                <li className="flex text-white items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        Team size: <span className="font-semibold">1 developer</span>
                                    </span>
                                </li>
                                <li className="flex text-white items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        Premium support: <span className="font-semibold">6 months</span>
                                    </span>
                                </li>
                                <li className="flex text-white items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        Free updates: <span className="font-semibold">6 months</span>
                                    </span>
                                </li>
                            </ul>
                            <a
                                href="#"
                                className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                            >
                                Get started
                            </a>
                        </div>
                        {/* Pricing Card */}
                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-[#111111] rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 className="mb-4 text-2xl text-white font-semibold">Starter</h3>
                            <p className="font-light text-gray-100 sm:text-lg dark:text-gray-400">
                                Best option for personal use &amp; for your next project.
                            </p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl text-white font-extrabold">$29</span>
                                <span className="text-gray-500 dark:text-gray-400">/month</span>
                            </div>
                            {/* List */}
                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex text-white items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>Individual configuration</span>
                                </li>
                                <li className="flex text-white items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>No setup, or hidden fees</span>
                                </li>
                                <li className="flex text-white items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        Team size: <span className="font-semibold">1 developer</span>
                                    </span>
                                </li>
                                <li className="flex text-white items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        Premium support: <span className="font-semibold">6 months</span>
                                    </span>
                                </li>
                                <li className="flex text-white items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        Free updates: <span className="font-semibold">6 months</span>
                                    </span>
                                </li>
                            </ul>
                            <a
                                href="#"
                                className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                            >
                                Get started
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}