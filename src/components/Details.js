import React, { useContext } from 'react';
import { IonIcon } from '@ionic/react';
import { pieChart, swapVertical, alertCircle, logoTwitter, warning, calendar, pricetag, refresh, logoFacebook, logoDribbble } from 'ionicons/icons';
import { Needs } from '../App';
import ReactApexChart from 'react-apexcharts';

const Details = () => {
    const info = useContext(Needs);

    const arr = [
        {
            icon1: pieChart,
            p1: "Use space",
            h1: "49/50GB",
            icon2: warning,
            p2: "Get more space",
            bg: "bg-blue-500",
            text: "text-blue-500"
        },
        {
            icon1: swapVertical,
            p1: "Revenue",
            h1: "$23,589",
            icon2: calendar,
            p2: "Last 24 hours",
            bg: "bg-pink-600",
            text: "text-pink-600"
        },
        {
            icon1: alertCircle,
            p1: "Fixed issue",
            h1: "45",
            icon2: pricetag,
            p2: "Tracked via microsoft",
            bg: "bg-green-600",
            text: "text-green-600"
        },
        {
            icon1: logoTwitter,
            p1: "Followers",
            h1: "+562",
            icon2: refresh,
            p2: "Just update",
            bg: "bg-orange-400",
            text: "text-orange-400"
        }
    ];

    const array2 = [
        {
            app: 'facebook',
            p1: 'blog page timeline',
            n1: 23,
            p2: 'Active',
            n2: 23,
            p3: 'Comment',
            bg: 'bg-[#4e6dbc]',
            bg2: '',
            logo: logoFacebook
        },
        {
            app: 'dribble',
            p1: 'product page analysis',
            n1: 23,
            p2: 'Live',
            n2: 23,
            p3: 'Message',
            bg: 'bg-[#f278a7]',
            bg2: 'bg-[#E51F6B]',
            logo: logoDribbble
        },
        {
            app: 'twitter',
            p1: 'current new timeline',
            n1: 25,
            p2: 'tweet',
            n2: '450+',
            p3: 'Followers',
            bg: 'bg-sky-400',
            bg2: 'bg-sky-500',
            logo: logoTwitter
        }
    ]
    const lightColors = ['#ededed', '#fff'];
    const darkColors = ['#2c2c2c', '#1e1e1e'];

    const gridColors = info.darkMode ? darkColors : lightColors;
    const bg = info.darkMode ? '#1e2735' : '#fefefe';

    var option = {
        chart: {
            type: 'line',
            sparkline: false,
            background: bg
        },
        theme: {
            mode: info.darkMode ? 'dark' : 'light'
        },
        stroke: {
            curve: 'smooth',
        },
        series: [{
            name: 'Statistics',
            data: [1, 1.8, 1, 1.5, 0.5, 2.8, 5.3, 0.8, 3.2]
        }],
        xaxis: {
            categories: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep']
        },
        yaxis: {
            min: 0
        },
        grid: {
            strokeDashArray: 5,
            borderColor: '#ccc',
            column: {
                colors: gridColors
            }
        }
    };

    return (
        <div className={`mt-16 duration-500 ease-in-out ${info.darkMode ? 'bg-gray-800 text-white' : 'bg-[#   fefefe]'}`}>
            <div className={`${info.isSidebarVisible ? 'lg:ml-[320px] mr-2' : ''} flex flex-wrap justify-center flex-col sm:flex-row max-w-[90%] gap-[2rem] py-8 mx-auto`}>
                {
                    arr.map((data, index) => (
                        <div key={index}
                            className="group sm:flex-1 shrink-0 min-w-[150px] sm:max-lg:min-w-[300px] flex flex-col h-28 rounded-lg shadow-xl border border-1">
                            <div className="p-2 flex justify-between relative">
                                <div>
                                    <IonIcon icon={data.icon1} className={`text-3xl text-white p-2 rounded-lg absolute bottom-8 left-5 ${data.bg} group-hover:bottom-10 duration-200`} />
                                </div>
                                <div className="text-center">
                                    <p className={`${data.text} font-medium`}>{data.p1}</p>
                                    <h1 className="font-medium">{data.h1}</h1>
                                </div>
                            </div>
                            <p className="text-xs mt-2 ml-4 flex items-center">
                                <IonIcon icon={data.icon2} className={`text-2xl ${data.text} mr-2`} />{data.p2}
                            </p>
                        </div>
                    ))
                }

            </div>
            <div className={`${info.isSidebarVisible ? 'lg:ml-[320px] mr-2' : ''} flex flex-col items-start lg:flex-row max-w-[90%] justify-center gap-[2rem] mx-auto pb-10 duration-500 ease-in-out`}>
                <div className='flex flex-col gap-[1px] mx-auto flex-1'>
                    <h2>Statistics</h2>
                    <hr />
                    <ReactApexChart options={option} series={option.series} type="line" className='flex-1 mx-auto sm:w-[540px] md:w-[640px]' />
                </div>
                <div className='flex lg:flex-col w-full flex-wrap flex-1 gap-[1rem] mx-auto justify-center'>
                    {
                        array2.map((data, index) => (
                            <div key={index} className="sm:max-md:max-w-[250px] w-full lg:flex-1">
                                <div className={`flex gap-[1rem] p-2 ${data.bg}`}>
                                    <div>
                                        <IonIcon icon={data.logo} className={`p-2 text-2xl text-white ${data.bg2} rounded-3xl`} />
                                    </div>
                                    <div className="text-white text-sm">
                                        <p className="font-medium">{data.app}</p>
                                        <p>{data.p1}</p>
                                    </div>
                                </div>
                                <div className="flex justify-evenly items-center p-2 shadow-xl border border-1">
                                    <div className="text-center">
                                        <h1 className="font-medium">{data.n1}</h1>
                                        <p className="text-sm text-slate-500">{data.p2}</p>
                                    </div>
                                    <div className="w-[.1rem] h-12 border border-1 border-slate-300"></div>
                                    <div className="text-center">
                                        <h1 className="font-medium">{data.n2}</h1>
                                        <p className="text-sm text-slate-500">{data.p3}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Details
