import React from 'react'
import GC from'../assets/Original Certificates/Graduation.jpg'
import HS from'../assets/Original Certificates/HS.jpg'
import SE from'../assets/Original Certificates/Secondary.jpg'
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Certificates = () => {
  return (
    <>
    <Navbar />
    <div className='flex flex-col items-center justify-center mt-5 gap-8'>
        <div>
            <h1 className='text-4xl font-semibold underline mb-4'>Certificates</h1>
        </div>
        <div className='flex flex-row justify-around items-center'>
            <p className='w-[300px] mr-[20px] text-xl font-sans border-2 border-black rounded-lg p-4 shadow-lg shadow-black hover:shadow-xl hover:shadow-black'>I Completed My Graduation in 2024 with a CGPA of 9.08.
            My Subject Combination was Computer Science , Chemistry and Physics with a optional subject of Botany.Here my Graduation Certificate.
            </p>
            <TbArrowBigRightLinesFilled className='w-[200px] h-[150px]'/>
            <img src={GC} alt=" Graduation Certificate" className='w-[500px] h-auto  border-2 border-black shadow-black shadow-md hover:shadow-xl hover:shadow-black' />
        </div>
        <div className='flex flex-row justify-around items-center'>
            <p className='w-[300px] mr-[20px] text-xl font-sans border-2 border-black rounded-lg p-4 shadow-lg shadow-black hover:shadow-xl hover:shadow-black'>I Completed My Higher Secondary in 2021 with a Percentage of 83.4%.Here my Higher Secondary Certificate.
            </p>
            <TbArrowBigRightLinesFilled className='w-[200px] h-[150px]'/>
            <img src={HS} alt=" Graduation Certificate" className='w-[500px] h-auto  border-2 border-black shadow-black shadow-md hover:shadow-xl hover:shadow-black' />
        </div>
        <div className='flex flex-row justify-around items-center'>
            <p className='w-[300px] mr-[20px] text-xl font-sans border-2 border-black rounded-lg p-4 shadow-lg shadow-black hover:shadow-xl hover:shadow-black'>I Completed My Secondary Examination in 2019 with a percentage of 83.85%.Here my Secondary Examination Certificate.
            </p>
            <TbArrowBigRightLinesFilled className='w-[200px] h-[150px]'/>
            <img src={SE} alt=" Graduation Certificate" className='w-[500px] h-auto  border-2 border-black shadow-black shadow-md hover:shadow-xl hover:shadow-black' />
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Certificates