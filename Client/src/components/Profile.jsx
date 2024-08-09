import avatar from "../assets/avatar.png"

export default function ProfileCard() {

    return (
        <>
            <div style={{ fontFamily: 'Geist Sans, sans-serif' }}>
                <div className="rounded-xl bg-gradient-to-r from-slate-50 to-gray-300 pb-4">
                    <div className="flex justify-between ">
                       
                        <div className="flex-col m-7 ml-5 mb-0">
                        <div>
                            Bulking
                        </div>
                            <p className="text-black text-3xl flex-col">
                                 Hello,
                                
                            </p>
                            <span className="text-6xl">
                                    Farhan
                                </span>
                        </div>
                        <div className="n w-36 h-44">
                            <img className="w-full h-full object-cover" src={avatar} alt="" />
                        </div>
                    </div>
                    <div className="mx-4 rounded-lg p-2 px-4 bg-[#0F0F0F] flex justify-between">
                        <div className="text-white">
                            Height
                            <p>
                                175 cm
                            </p>
                        </div>
                        <div className="text-white">
                            Weight
                            <p>
                                70 kg
                            </p>
                        </div >
                        <div className="text-white">
                            Age
                            <p>
                                22
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}