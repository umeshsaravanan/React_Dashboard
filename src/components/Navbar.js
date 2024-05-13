import React, { useContext, useReducer } from 'react';
import { IonIcon } from '@ionic/react';
import { caretDownOutline, menu, notificationsOutline, close, moon, sunny } from 'ionicons/icons';
import profilePic from '../images/compressed.jpg';
import Sidebar from './Sidebar';
import { Needs } from '../App';
import UserDetails from './UserDetails';

function reducer(state, action) {
    switch (action.type) {
        case "toggle": {
            action.toggleSidebar();
            return {
                ...state,
                isSidebarVisible: !state.isSidebarVisible,
                icon: state.isSidebarVisible ? menu : close
            };
        }
        case "mode": {
            action.toggleDarkMode();
            return {
                ...state,
                mode: state.mode === sunny ? moon : sunny
            }
        }
        case "profile": {
            action.toggleVisible();
            return {
                ...state,
                visible: !state.visible
            }
        }
        default: {
            throw Error("Undefined Action Type :(");
        }
    }
}

const Navbar = () => {
    const info = useContext(Needs)
    const initial = {
        isSidebarVisible: info.isSidebarVisible,
        icon: close,
        mode: sunny,
        visible: info.visible,
    };
    const [state, dispatch] = useReducer(reducer, initial);

    return (
        <div className={`fixed top-0 z-10 h-16 w-full shadow-lg flex gap-[1rem] ${info.darkMode ? 'bg-gray-900 text-white' : 'bg-white'}`}>
            <Sidebar />
            <div className='mx-2 flex-grow flex justify-between items-center'>
                <div className='z-20 relative'>
                    <IonIcon
                        icon={state.icon}
                        className={`absolute top-[-15px] text-4xl duration-500 rounded-md cursor-pointer transform ${state.icon === close ? 'rotate-[450deg] text-white translate-x-[250px]' : ''} ease-in-out`}
                        onClick={() => dispatch({ type: "toggle", toggleSidebar: info.toggleSidebar })}
                    />
                </div>

                <div className='flex gap-4 items-center'>
                    <IonIcon icon={state.mode} className='text-2xl cursor-pointer' onClick={() => dispatch({ type: "mode", toggleDarkMode: info.toggleDarkMode })} />
                    <div className="relative flex items-center cursor-pointer">
                        <IonIcon icon={notificationsOutline} className='text-3xl' />
                        <span className="absolute left-6 bottom-8 h-2 w-2 bg-red-500 rounded-full"></span>
                    </div>
                    <div className='flex items-center cursor-pointer' onClick={() =>  dispatch({type: "profile", toggleVisible: info.toggleVisible})}>
                        <img srcSet={profilePic} alt='profile' className='w-12 h-12 object-cover rounded-full' />
                        <IonIcon icon={caretDownOutline} />
                    </div>
                </div>
            </div>
            {state.visible ? <UserDetails /> : null}
        </div>
    );
}

export default Navbar;
