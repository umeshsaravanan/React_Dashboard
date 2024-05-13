import React from 'react'
import profile from '../images/compressed.jpg'
import { IonIcon } from '@ionic/react'
import { keyOutline, cardOutline, locationOutline, logOutOutline, settingsOutline, cameraOutline, pencilOutline } from 'ionicons/icons'

const UserDetails = () => {
  return (
    <div className='bg-black w-[300px] h-[480px] rounded-lg absolute top-16 right-2 flex flex-col'>
        <div className='bg-[#1e477e] h-28 rounded-t-lg flex justify-evenly items-end flex-col text-white'>
            <h1 className='text-center text-xl font-medium mr-[100px]'>Guru able</h1>
            <IonIcon icon={pencilOutline} className='w-6 h-6 text-xl mr-4 cursor-pointer hover:scale-[1.1] rounded-full'/>
        </div>
        <div className='flex flex-col items-center justify-center text-white gap-2 relative bottom-10'>
            <img srcSet={profile} alt='profile' className='w-24 h-24 object-cover rounded-full border-2 border-black'/>
            <h1>John Doe</h1>
            <p>johndue1995@gmail.com</p>
            <div className="flex gap-[1rem] *:bg-[#1e477e] *:p-2 *:rounded-full text-2xl">
                <IonIcon icon={keyOutline}/>
                <IonIcon icon={cardOutline}/>
                <IonIcon icon={locationOutline}/>
            </div>
        </div>
        <div className='flex flex-col justify-start text-white *:p-1 *:ml-4 *:flex *:items-center *:text-sm'>
            <p className='hover:bg-gray-800 p-2'><IonIcon className='mr-2 text-xl' icon={logOutOutline}/> Log Out</p>
            <p className='hover:bg-gray-800 p-2'><IonIcon className='mr-2 text-xl' icon={cameraOutline}/> Change Profile</p>
            <p className='hover:bg-gray-800 p-2'><IonIcon className='mr-2 text-xl' icon={keyOutline}/> Change Password</p>
            <p className='hover:bg-gray-800 p-2'><IonIcon className='mr-2 text-xl' icon={settingsOutline}/> Settings</p>
        </div>
    </div>
  )
}

export default UserDetails
