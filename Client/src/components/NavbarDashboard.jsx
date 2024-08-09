import logo from "../assets/avatar.png"
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsync } from "../features/profile/profile-slicer";
import { useEffect } from "react";


export default function NavbarDashboard({profile}) {
    console.log(profile);
    

    const { profiles, loading, error } = useSelector((state) => state.profiles)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAsync())
      }, []);

    return (
        <>
            <div className="flex w-full h-24 justify-between">
                <div className="item-center mt-1">
                    <p className="font font-poppins">Main Dashboard</p>
                    {!error  && (
                        <p className="text-white font-poppins font-semibold text-4xl mt-1">Hello, {profile.username}</p>
                    )}
                </div>
                <div>
                    <img className="w-auto h-full" src={logo} alt="" />
                </div>
            </div>
        </>
    )
}