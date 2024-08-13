import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import Image from 'next/image'

interface IProps {
    title: string;
    subTitle: string;
    href?: string;
    imageUrl?: string;
    imageWidth?: number;
    imageHeight?: number;
    className?: string;
}

export const SmallBanner: React.FC<IProps> = ({ title, subTitle, href, imageUrl, imageWidth, imageHeight, className }) => {
    return (
        <div className={cn(
            'banner-right z-[1] lg:h-[calc((100%_-_32px)/3)] h-auto lg:w-full md:w-[calc((100%_-_20px)/3)] w-full relative max-h-[200px] py-5 lg:px-[50px] px-[34px] overflow-hidden bg-[linear-gradient(110deg,_#EEEAFC_6.51%,_#47c7ab_103.35%)] rounded-[20px] lg:mb-[18px] mb-[5px] last:mb-0 flex justify-center flex-col items-start',
             className
        )}>
            {href && (
                <Link href={href} className='absolute top-0 left-0 w-full h-full z-[5]'/>
            )}
            <div className='text-[gray-blue] font-medium tracking-[-0.2px] sm:leading-[100%] leading-[100%] sm:text-xl text-lg mb-2.5 lg:max-w-[175px] sm:max-w-full'>
                {title}
            </div>
            <div className='text-[gray-blue] sm:leading-[100%] leading-[100%] sm:text-base text-[15px] mb-2.5 lg:max-w-[175px] sm:max-w-full'>
                {subTitle}
            </div>
            {imageUrl && (
                <Image className='absolute z-[-1] top-[35px] md:w-[65%] sm:w-auto w-[65%] rounded-[10px] bottom-0 my-auto sm:-right-[0%] lg:-right-[20%] -rotate-[9deg]' width={imageWidth ? imageWidth : 264} height={imageHeight ? imageHeight : 168} src={imageUrl} alt={'logo'}></Image>
            )}
        </div>
    )
}