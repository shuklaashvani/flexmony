import React,{useState} from 'react'
import Payment from './Payment';

const Dashboard = () =>{

    const [Status,setStatus] = useState(false)
    // const [active,setActive] = useState(true)
    const date = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];

    return (
        <div className='relative '>
            
            <div className="flex flex-row ">

                <div className='flex flex-col w-full'>
                     <h1 className='mt-4 select-none px-6 capitalize text-4xl text-black font-semibold py-6 mx-auto'>
                            Dashboard
                     </h1>
                        <hr className="w-3/5 mx-auto h-2 mb-5" />
                        <div className="text-center mt-6">
                    
                    
                    {/* <button className="py-3 w-56 text-xl text-white bg-green-500 rounded-2xl hover:bg-green-600 active:bg-green-600">Payment</button> */}
                    
                    {/* <button className="ml-8 py-3 w-56 text-xl text-white bg-green-500 rounded-2xl hover:bg-green-600 active:bg-green-600">set Schedule</button> */}
                    
                    
                        <div>
                            <h1 className='mt-4 select-none px-6 capitalize text-4xl text-black font-semibold py-6 mx-auto'>
                                Status
                            </h1>
                            {Status?<h1 className='mt-4 select-none px-6 capitalize text-4xl text-black font-semibold py-6 mx-auto'>
                                Active for {monthNames[date.getMonth()]}
                            </h1>:<h1 className='mt-4 select-none px-6 capitalize text-4xl text-black font-semibold py-6 mx-auto'>
                                Inactive
                            </h1>}
                        </div>
                        <div>
                            <Payment disable={Status}/>
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;