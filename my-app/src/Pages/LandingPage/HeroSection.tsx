import React from 'react';
import img_bg from '../../assets/img/img_bg_cover.jpg';
import img_selfie from '../../assets/img/img_deco_selfie.png'
import TextSpaceBetween from '../../Components/Component/TextSpaceBetween';
import HeroFooter from './HeroFooter';

export default function HeroSection() {
    
    return (
        <>
            <div
                className='relative'
                style={{
                    backgroundImage: `url(${img_bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className='container grid grid-cols-4 gap-4 pt-48 mx-auto relative'>
                <img src={img_selfie} className='w-[500px] absolute -bottom-24 left-[46%] 2xl:left-[45%] z-10' />
                    <div className='col-span-4 text-white text-[96px] font-serif mb-24'>
                        <TextSpaceBetween text='SEBASTIAN   WANG' />
                    </div>
                    <div className='col-span-2 mb-24 relative z-20'>
                        <p className='text-[#DD663C] mb-3 text-xl font-light'>Service Design</p>
                        <p className='text-black mb-3 text-3xl font-light'>A Strategy Weaver Who Spins</p>
                        <p className='text-black mb-3 text-3xl font-bold'>Smooth Services For The Next Era.</p>
                    </div>
                    <div className='col-span-2 text-right flex flex-col-reverse mb-24 gap-4 font-light'>
                        <div><button className='border border-[#595757] py-2 text-[#595757] w-[180px]'>View Projects</button></div>
                        <div><button className='bg-[#EA5514] py-2 text-white w-[180px]'>Contact Me</button></div>
                    </div>
                </div>
                <HeroFooter />
            </div>
        </>
    );
}