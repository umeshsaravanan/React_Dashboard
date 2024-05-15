import React, { useRef, useEffect } from 'react';
import { IonIcon } from '@ionic/react';
import { caretDownOutline, notificationsOutline, close } from 'ionicons/icons';
import Sidebar from './Sidebar';
import UserDetails from './UserDetails';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar, toggleDarkMode, toggleVisible } from '../counterSlice';

const Navbar = () => {
    const redux = useSelector(state => state.counter)
    const dispatch = useDispatch();
    const cardRef = useRef(null);
    const profileRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cardRef.current && !cardRef.current.contains(event.target) && profileRef.current && !profileRef.current.contains(event.target)) {
                console.log(cardRef.current.contains(event.target))
                if (redux.visible) {
                    dispatch(toggleVisible());
                }
            }
        };

        if (redux.visible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [redux.visible, dispatch]);

    return (
        <div>
            <div className={`fixed top-0 z-10 h-16 w-full shadow-lg flex gap-[1rem] ${redux.darkMode ? 'bg-gray-900 text-white' : 'bg-white'}`}>
                <Sidebar />
                <div className='mx-2 flex-grow flex justify-between items-center max-w-screen-xl'>
                    <div className='z-20 relative'>
                        <IonIcon
                            icon={redux.icon}
                            className={`absolute top-[-15px] text-4xl duration-500 rounded-md cursor-pointer transform ${redux.icon === close ? 'rotate-[450deg] text-white translate-x-[250px]' : ''} ease-in-out`}
                            onClick={() => dispatch(toggleSidebar())}
                        />
                    </div>

                    <div className='flex gap-4 items-center'>
                        <IonIcon icon={redux.mode} className='text-2xl cursor-pointer' onClick={() => dispatch(toggleDarkMode())} />
                        <div className="relative flex items-center cursor-pointer">
                            <IonIcon icon={notificationsOutline} className='text-3xl' />
                            <span className="absolute left-6 bottom-8 h-2 w-2 bg-red-500 rounded-full"></span>
                        </div>
                        <div className='flex items-center cursor-pointer' onClick={() => dispatch(toggleVisible())}>
                            <img srcSet={redux.profile} ref={profileRef} alt='profile' className='w-12 h-12 object-cover rounded-full' />
                            <IonIcon icon={caretDownOutline} />
                        </div>
                    </div>
                </div>
            </div>
            {redux.visible ? <div ref={cardRef}><UserDetails /></div> : null}
        </div>
    );
}

export default Navbar;
