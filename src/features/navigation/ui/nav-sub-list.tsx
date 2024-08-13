import { cn } from '@/lib/utils';
import React from 'react'
import { INavSubItem, NavSubItem } from './nav-sub-item';

interface IProps {
    aside?: boolean;
    navSubItems: Array<INavSubItem>
    className?: string;
}

export const NavSubList: React.FC<IProps> = ({ navSubItems, className }) => {
    return (
        <ul className={cn('grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]', className)}>
            {
                navSubItems.map(navSubItem => (
                    <NavSubItem aside={navSubItem.aside} href={navSubItem.href} key={navSubItem.id} text={navSubItem.text} description={navSubItem.description}/>
                ))
            }
        </ul>
    )
}