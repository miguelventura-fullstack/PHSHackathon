import Head from 'next/head'
import Image from 'next/image'
/* import Navbar from '../components/Navbar'
import { auth } from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth"; */

export default function Home() {

  // Firebase user status
  //const [user, loading, error] = useAuthState(auth);


  const axios = require("axios").default;

  const options = {
    method: 'GET',
    url: 'https://cloud.iexapis.com/stable/stock/tsla/quote',
    params: {
      token: process.env.NEXT_PUBLIC_IEX_API_KEY
    }
  };

  axios.request(options).then(function (response) {
    const dataOfStock = response.data;
    console.log(dataOfStock.symbol + "\n" +
      "Open: " + dataOfStock.open + "\n" +
      "Close: " + dataOfStock.close + "\n" +
      "Day high: " + dataOfStock.high + "\n" +
      "Day low: " + dataOfStock.low + "\n" +
      "Last price: " + dataOfStock.latestPrice + "\n" +
      "Previous close: " + dataOfStock.previousClose + "\n" +
      "Year high: " + dataOfStock.week52High + "\n" +
      "Year low: " + dataOfStock.week52Low + "\n"
    );
  }).catch(function (error) {
    console.error(error);
  });


  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/*First Page*/}
        <svg className='w-full h-full bg-grassgreen' viewBox="00 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
          
          <rect width="1920" height="1080" fill="#61D9FF"/>
          <path d="M1004.47 631.909C555.448 873.509 147.731 837.909 0 789.909V1079.91H1920V485.409C1801.92 433.575 1453.49 390.309 1004.47 631.909Z" fill="#43F464"/>
          <path d="M1022.57 892.841C825.159 1035.24 273.452 1020.66 0 992.523V1080H1920V808.415C1717.96 779.256 1248.3 730 1022.57 892.841Z" fill="#1FDA80"/>
          
          {/*Title*/}
          <text x='215' y='547' className='pl-96 font-thin text-[6rem] fill-brown'>
            Green.house
          </text>

          {/*Guzzlers*/}
          <text x='215' y='594' className='pl-96 pt-48 font-bold text-[2rem] fill-brown'>
            A Guzzlers Production
          </text>

          {/*Circle*/}
          <svg x='910' y="1000" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="40" fill="white"/>
            <rect x="34" y="12" width="11" height="44" fill="black"/>
            <path d="M57.6097 36.4442L65.4285 43.8692L39.8187 68.1892L31.9999 60.7642L57.6097 36.4442Z" fill="black"/>
            <path d="M14 43.8491L21.8188 36.4242L44.437 57.9032L36.6182 65.3282L14 43.8491Z" fill="black"/>
          </svg>
        </svg>

        

        {/*Second Page*/}
        <svg className='w-full h-full bg-grassgreen' viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/*Background*/}
          <path d="M0 -18H1920V1080H0V-18Z" fill="url(#paint0_linear_0_1)"/>
          
          {/*Small Tree*/}
          <g filter="url(#filter0_d_0_1)">
            <rect x="1207.96" y="895.8" width="14.087" height="37.2" fill="#897065"/>
            <path d="M1215 871L1238.38 913.75H1191.62L1215 871Z" fill="#43F464"/>
          </g>

          {/*Medium Tree*/}
          <g filter="url(#filter1_d_0_1)">
            <rect x="1291" y="838" width="24" height="98" fill="#897065"/>
            <path d="M1303 815L1346.3 899H1259.7L1303 815Z" fill="#31E52D"/>
            <path d="M1303 802L1337.64 866.5H1268.36L1303 802Z" fill="#43F464"/>
          </g>

          {/*Big tree*/}
          <g filter="url(#filter2_d_0_1)">
            <rect x="1417" y="830" width="36" height="98" fill="#897065"/>
            <path d="M1435 697L1506.01 854.5H1363.99L1435 697Z" fill="#06C302"/>
            <path d="M1435 697L1498.22 818.5H1371.78L1435 697Z" fill="#31E52D"/>
            <path d="M1434.5 697L1489.49 788.5H1379.51L1434.5 697Z" fill="#43F464"/>
          </g>
          
          {/*Title*/}
          <text x='215' y='547' className='pl-96 italic font-thin text-[3rem] fill-brown'>
            The Beginner's Broker
          </text>

          {/*Text*/}
          <>
          <text x='1000' y='394'className='pl-96 pt-48 font-bold text-[3rem] fill-brown'>
            We at Green.house seek to make
          </text>
          <text x='1000' y='464' className='pl-96 pt-48 font-bold text-[3rem] fill-brown'>
            the world of stocks easier to
          </text>
          <text x='1000' y='534' className='pl-96 pt-48 font-bold text-[3rem] fill-brown'>
            comprehend for laypeople by 
          </text>
          <text x='1000' y='604' className='pl-96 pt-48 font-bold text-[3rem] fill-brown'>
            visualizing the growth in 
          </text>
          <text x='1000' y='674' className='pl-96 pt-48 font-bold text-[3rem] fill-brown'>
            equity with trees.
          </text>
          <text x='1000' y='744' className='pl-96 pt-48 font-bold text-[3rem] fill-brown'>
            
          </text>
          </>


          <defs>
            {/*Small Tree Filter*/}
            <filter id="filter0_d_0_1" x="1187.62" y="871" width="54.7654" height="70" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
            </filter>

            {/*Medium Tree Filter*/}
            <filter id="filter1_d_0_1" x="1255.7" y="802" width="94.6025" height="142" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
            </filter>

            {/*Large Tree Filter*/}
            <filter id="filter2_d_0_1" x="1359.99" y="697" width="150.028" height="239" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
            </filter>
            
            {/*Background Gradient*/}
            <linearGradient id="paint0_linear_0_1" x1="1043.5" y1="1022" x2="1048" y2="347" gradientUnits="userSpaceOnUse">
              <stop stop-color="#61D9FF"/>
              <stop offset="1" stop-color="#61D9FF" stop-opacity="0"/>
            </linearGradient>
          </defs>
        </svg>

        {/*Third Page*/}
        <svg className='w-full h-full bg-grassgreen' viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/*Background*/}
          <path d="M0 0H1920V1080H0V0Z" fill="url(#paint0_radial_0_1)"/>
          {/*Title*/}
          <text x='1300' y='547' className='pl-96 italic font-thin text-[3rem] fill-brown'>
            How it Works
          </text>

          {/*Text*/}
          <>
          <text x='100' y='194'className='pl-96 pt-48 font-bold text-[3rem] fill-brown'>
            We use IEX Cloud to track top performing
          </text>
          <text x='100' y='264' className='pl-96 pt-48 font-bold text-[3rem] fill-brown'>
            stocks, and invest in them based on the
          </text>
          <text x='100' y='334' className='pl-96 pt-48 font-bold text-[3rem] fill-brown'>
            user's preference.
          </text>


          <text x='100' y='474' className='pl-96 pt-48 font-bold text-[3rem] fill-brown'>
            The user can choose which types of 
          </text>
          <text x='100' y='544' className='pl-96 pt-48 font-bold text-[3rem] fill-brown'>
            companies they wish to invest in and how 
          </text>
          <text x='100' y='614' className='pl-96 pt-48 font-bold text-[3rem] fill-brown'>
            much money to invest in them.
          </text>

          <text x='100' y='754' className='pl-96 pt-48 font-bold text-[3rem] fill-brown'>
            In addition to holding stock for the user,
          </text>
          <text x='100' y='824' className='pl-96 pt-48 font-bold text-[3rem] fill-brown'>
            we recommend new stocks to invest in as
          </text>
          <text x='100' y='894' className='pl-96 pt-48 font-bold text-[3rem] fill-brown'>
            well as display historical data.
          </text>
          </>
          
          <defs>
            {/*Background Gradient*/}
            <radialGradient id="paint0_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1185.5 1164.5) rotate(-94.4512) scale(1005.03 1786.72)">
              <stop offset="0.198494" stop-color="#43F464"/>
              <stop offset="1" stop-color="#61D9FF"/>
            </radialGradient>
          </defs>
        </svg>

        {/*Login Button*/}
        <button className='absolute top-0 right-0 p-8 w-1/12'>
          <svg viewBox="0 0 214 107" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 53.5C0 23.9528 23.9528 0 53.5 0H160.5C190.047 0 214 23.9528 214 53.5V53.5C214 83.0472 190.047 107 160.5 107H53.5C23.9528 107 0 83.0472 0 53.5V53.5Z" fill="#393424"/>
            <path d="M39.4872 70V35.0909H46.8679V63.9148H61.8338V70H39.4872ZM78.4148 70.5114C75.767 70.5114 73.4773 69.9489 71.5455 68.8239C69.625 67.6875 68.142 66.108 67.0966 64.0852C66.0511 62.0511 65.5284 59.6932 65.5284 57.0114C65.5284 54.3068 66.0511 51.9432 67.0966 49.9205C68.142 47.8864 69.625 46.3068 71.5455 45.1818C73.4773 44.0455 75.767 43.4773 78.4148 43.4773C81.0625 43.4773 83.3466 44.0455 85.267 45.1818C87.1989 46.3068 88.6875 47.8864 89.733 49.9205C90.7784 51.9432 91.3011 54.3068 91.3011 57.0114C91.3011 59.6932 90.7784 62.0511 89.733 64.0852C88.6875 66.108 87.1989 67.6875 85.267 68.8239C83.3466 69.9489 81.0625 70.5114 78.4148 70.5114ZM78.4489 64.8864C79.6534 64.8864 80.6591 64.5455 81.4659 63.8636C82.2727 63.1705 82.8807 62.2273 83.2898 61.0341C83.7102 59.8409 83.9205 58.483 83.9205 56.9602C83.9205 55.4375 83.7102 54.0795 83.2898 52.8864C82.8807 51.6932 82.2727 50.75 81.4659 50.0568C80.6591 49.3636 79.6534 49.017 78.4489 49.017C77.233 49.017 76.2102 49.3636 75.3807 50.0568C74.5625 50.75 73.9432 51.6932 73.5227 52.8864C73.1136 54.0795 72.9091 55.4375 72.9091 56.9602C72.9091 58.483 73.1136 59.8409 73.5227 61.0341C73.9432 62.2273 74.5625 63.1705 75.3807 63.8636C76.2102 64.5455 77.233 64.8864 78.4489 64.8864ZM107.818 80.3636C105.466 80.3636 103.449 80.0398 101.767 79.392C100.097 78.7557 98.767 77.8864 97.7784 76.7841C96.7898 75.6818 96.1477 74.4432 95.8523 73.0682L102.568 72.1648C102.773 72.6875 103.097 73.1761 103.54 73.6307C103.983 74.0852 104.568 74.4489 105.295 74.7216C106.034 75.0057 106.932 75.1477 107.989 75.1477C109.568 75.1477 110.869 74.7614 111.892 73.9886C112.926 73.2273 113.443 71.9489 113.443 70.1534V65.3636H113.136C112.818 66.0909 112.341 66.7784 111.705 67.4261C111.068 68.0739 110.25 68.6023 109.25 69.0114C108.25 69.4205 107.057 69.625 105.67 69.625C103.705 69.625 101.915 69.1705 100.301 68.2614C98.6989 67.3409 97.4205 65.9375 96.4659 64.0511C95.5227 62.1534 95.0511 59.7557 95.0511 56.858C95.0511 53.892 95.5341 51.4148 96.5 49.4261C97.4659 47.4375 98.75 45.9489 100.352 44.9602C101.966 43.9716 103.733 43.4773 105.653 43.4773C107.119 43.4773 108.347 43.7273 109.335 44.2273C110.324 44.7159 111.119 45.3295 111.722 46.0682C112.335 46.7955 112.807 47.5114 113.136 48.2159H113.409V43.8182H120.619V70.2557C120.619 72.483 120.074 74.3466 118.983 75.8466C117.892 77.3466 116.381 78.4716 114.449 79.2216C112.528 79.983 110.318 80.3636 107.818 80.3636ZM107.972 64.1705C109.142 64.1705 110.131 63.8807 110.938 63.3011C111.756 62.7102 112.381 61.8693 112.812 60.7784C113.256 59.6761 113.477 58.358 113.477 56.8239C113.477 55.2898 113.261 53.9602 112.83 52.8352C112.398 51.6989 111.773 50.8182 110.955 50.1932C110.136 49.5682 109.142 49.2557 107.972 49.2557C106.778 49.2557 105.773 49.5795 104.955 50.2273C104.136 50.8636 103.517 51.75 103.097 52.8864C102.676 54.0227 102.466 55.3352 102.466 56.8239C102.466 58.3352 102.676 59.642 103.097 60.7443C103.528 61.8352 104.148 62.6818 104.955 63.2841C105.773 63.875 106.778 64.1705 107.972 64.1705ZM137.507 70V43.8182H144.768V70H137.507ZM141.155 40.4432C140.075 40.4432 139.149 40.0852 138.376 39.3693C137.615 38.642 137.234 37.7727 137.234 36.7614C137.234 35.7614 137.615 34.9034 138.376 34.1875C139.149 33.4602 140.075 33.0966 141.155 33.0966C142.234 33.0966 143.155 33.4602 143.916 34.1875C144.689 34.9034 145.075 35.7614 145.075 36.7614C145.075 37.7727 144.689 38.642 143.916 39.3693C143.155 40.0852 142.234 40.4432 141.155 40.4432ZM157.847 54.8636V70H150.585V43.8182H157.506V48.4375H157.812C158.392 46.9148 159.364 45.7102 160.727 44.8239C162.091 43.9261 163.744 43.4773 165.688 43.4773C167.506 43.4773 169.091 43.875 170.443 44.6705C171.795 45.4659 172.847 46.6023 173.597 48.0795C174.347 49.5455 174.722 51.2955 174.722 53.3295V70H167.46V54.625C167.472 53.0227 167.063 51.7727 166.233 50.875C165.403 49.9659 164.261 49.5114 162.807 49.5114C161.83 49.5114 160.966 49.7216 160.216 50.142C159.477 50.5625 158.898 51.1761 158.477 51.983C158.068 52.7784 157.858 53.7386 157.847 54.8636Z" fill="white"/>
          </svg>
        </button>

      </main>

    </div>
  )
}
