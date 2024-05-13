import React, { useContext } from 'react'
import { IonIcon } from '@ionic/react'
import { homeOutline, grid, newspaperOutline, copyOutline, statsChartOutline, navigateCircleOutline, gridOutline, caretDownOutline, searchOutline, chevronForwardOutline } from 'ionicons/icons'
import profilePic from '../images/compressed.jpg'
import logo from '../images/Logo_G.png'
import { Needs } from '../App'

const Sidebar = () => {
  const info = useContext(Needs)
  const array = [
    {
      heading: 'Layout',
      m1: 'Dashboard',
      m2: 'Components',
      mi1: homeOutline,
      mi2: grid
    },
    {
      heading: 'Forms & Tables',
      m1: 'Form Components',
      m2: 'Basic Table',
      mi1: newspaperOutline,
      mi2: copyOutline
    },
    {
      heading: 'Chart & Maps',
      m1: 'Chart',
      m2: 'Maps',
      m3: 'Pages',
      mi1: statsChartOutline,
      mi2: navigateCircleOutline,
      mi3: gridOutline
    }
  ]
  return (
    <div className={`sidebar h-screen ${info.isSidebarVisible ? 'absolute left-0' : 'absolute left-[-100vw]'} w-[300px] duration-300 z-20`}>
      <div id="menuItems"
        className={`pb-4 flex flex-col gap-[1rem] menuItems w-[300px] absolute duration-300 shadow-xl ${info.darkMode ? 'bg-gray-900' : 'bg-white'} `}>
        <div className="px-3 py-2 flex justify-between items-center flex-row bg-gray-900 rounded-tl-2xl">
          <div className="flex justify-center items-center gap-[1vw]">
            <div className="">
              <img srcSet={logo} className={`w-12 h-12 rounded-lg object-cover`} alt="" />
            </div>
            <h1 className="text-white font-poppins">
              <strong>GURU</strong> able
            </h1>
          </div>
        </div>

        <div className='flex flex-col gap-[1rem] h-[80vh] overflow-y-scroll' style={{ scrollbarWidth: 'none' }}>
          <div className="px-3 flex gap-[1rem]">
            <img srcSet={profilePic} className="w-12 h-12 object-cover" alt="" />
            <div className="text-start">
              <h1 className="font-bold">John Doe</h1>
              <h2 className="text-slate-600">
                UX Designer
                <IonIcon icon={caretDownOutline} />
              </h2>
            </div>
          </div>

          <div className="px-3 relative">
            <input type="search" className="focus:outline-none p-1 rounded-md w-[80%] border border-1 border-slate-300 text-black"
              placeholder="Search..." id="" search-clear="false" />
            <IonIcon icon={searchOutline} className="text-2xl absolute bottom-1 right-20 text-slate-500" />
          </div>

          {
            array.map((data, index) => (
              <div className="px-3" key={index}>
                <p className="text-slate-500">{data.heading}</p>
                <button className={`group w-full p-2 flex items-center ${info.darkMode ? 'hover:bg-gray-800' : 'hover:bg-slate-200'} duration-100 cursor-pointer focus:font-bold flex justify-between`}>
                  <div className='flex items-center'>
                    <span className="mr-2 flex items-center"><IonIcon title={data.m1} className="text-white text-2xl bg-blue-500 rounded-sm p-1"
                      icon={data.mi1} /></span>{data.m1}
                  </div>
                  <IonIcon icon={chevronForwardOutline} className='text-xl text-slate-500 hidden group-hover:block' />
                </button>
                <button className={`group w-full p-2 flex items-center ${info.darkMode ? 'hover:bg-gray-800' : 'hover:bg-slate-200'} duration-100 cursor-pointer focus:font-bold flex justify-between item`}>
                  <div className='flex items-center'>
                    <span className="mr-2 flex items-center"><IonIcon title={data.m2} className="text-white text-2xl bg-red-500 rounded-sm p-1"
                      icon={data.mi2} /></span>{data.m2}
                  </div>
                  <IonIcon icon={chevronForwardOutline} className='text-xl text-slate-500 hidden group-hover:block' />
                </button>
                {
                  data.m3 ? (
                    <button className={`group w-full p-2 flex items-center ${info.darkMode ? 'hover:bg-gray-800' : 'hover:bg-slate-200'} duration-100 cursor-pointer focus:font-bold flex justify-between item`}>
                      <div className='flex items-center'>
                        <span className="mr-2 flex items-center"><IonIcon title={data.m3} className="text-white text-2xl bg-green-500 rounded-sm p-1"
                          icon={data.mi3} /></span>{data.m3}
                      </div>
                      <IonIcon icon={chevronForwardOutline} className='text-xl text-slate-500 hidden group-hover:block' />
                    </button>
                  ) : null
                }
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Sidebar
