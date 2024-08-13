'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { cn } from '@/lib/utils';

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from 'next/link';

export interface Slide {
    id: string;
    imageUrl: string;
    title: string;
    description: string;
    href: string;
    linkText: string;
}

interface IProps {
    slides: Array<Slide>
    className?: string;
}

export const Slider: React.FC<IProps> = ({ slides, className }) => {
    return (
        <div className={cn('', className)}>
            <Swiper className='w-full rounded-[20px]'
                slidesPerView={1}
                navigation
                pagination={{ type: 'bullets', clickable: true }}
                autoplay={true}
                modules={[Navigation, Pagination]}
            >

                {
                    slides.map(slide => (
                        <SwiperSlide key={slide.id} style={{ backgroundImage: `url(${slide.imageUrl})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className='banner relative z-[1] rounded-[20px] overflow-hidden md:py-[58px] pt-[38px] pb-[70px] md:px-[94px] px-[25px] min-h-[450px]'>
                            <h2 className='max-w-[355px] w-full text-[white] mb-[24px] sm:text-[36px] text-[27px] tracking-[-0.36px] sm:leading-[100%] leading-[100%] font-medium'>{slide.title}</h2>
                            <p className="max-w-[355px] w-full text-[white] sm:leading-[100%] leading-[100%] sm:text-lg text-base sm:mb-[61px] mb-[24px]">{slide.description}</p>
                            <Link className='bg-[white] text-[black] py-5 px-10 rounded-xl transition-all duration-300 hover:bg-primary hover:text-[white]' href={slide.href}>{slide.linkText}</Link>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}