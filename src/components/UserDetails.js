import React from 'react'
import { IonIcon } from '@ionic/react'
import { keyOutline, cardOutline, locationOutline, logOutOutline, settingsOutline, cameraOutline, pencilOutline, close } from 'ionicons/icons'
import { useDispatch, useSelector } from 'react-redux'
import { toggleVisible } from '../counterSlice'


const UserDetails = () => {
    const profile = useSelector(state => state.counter.profile)
    const dispatch = useDispatch();
    return (
        <div className='bg-gray-900 w-[300px] h-[480px] rounded-lg fixed top-16 right-2 flex flex-col z-30'>
            <div className='bg-[#1e477e] h-28 rounded-t-lg flex justify-evenly items-end flex-col text-white'>
                <IonIcon icon={close} className='w-6 h-6 mr-4 cursor-pointer hover:scale-[1.2]' onClick={() => dispatch(toggleVisible())} />
                <h1 className='text-center text-xl font-medium mr-[100px]'>GURU able</h1>
                <IonIcon icon={pencilOutline} className='w-6 h-6 mr-4 cursor-pointer hover:scale-[1.2]' />
            </div>
            <div className='flex flex-col items-center justify-center text-white gap-2 relative bottom-10'>
                <img srcSet={profile} alt='profile' className='w-24 h-24 object-cover rounded-full border-4 border-gray-900' />
                <h1 className='font-medium'>John Doe</h1>
                <p>johndue1995@gmail.com</p>
                <div className="flex gap-[1rem] *:bg-[#1e477e] *:p-2 *:rounded-full text-2xl *:cursor-pointer">
                    <IonIcon icon={keyOutline} />
                    <IonIcon icon={cardOutline} />
                    <IonIcon icon={locationOutline} />
                </div>
            </div>
            <div className='flex flex-col justify-start text-white *:p-1 *:ml-4 *:flex *:items-center *:text-sm *:cursor-pointer'>
                <p className='hover:bg-gray-800 p-2'><IonIcon className='mr-2 text-xl' icon={logOutOutline} /> Log Out</p>
                <p className='hover:bg-gray-800 p-2'><IonIcon className='mr-2 text-xl' icon={cameraOutline} /> Change Profile</p>
                <p className='hover:bg-gray-800 p-2'><IonIcon className='mr-2 text-xl' icon={keyOutline} /> Change Password</p>
                <p className='hover:bg-gray-800 p-2'><IonIcon className='mr-2 text-xl' icon={settingsOutline} /> Settings</p>
            </div>
        </div>
    )
}

export default UserDetails
