import { cn } from '@/lib/utils';
import { NavigationMenuContent, NavigationMenuTrigger } from '@/shared';
import { NavigationMenuItem } from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import React from 'react';
import { INavSubItem } from './nav-sub-item';
import { NavSubList } from './nav-sub-list';

export interface INavItem {
    id?: string;
    text: string;
    href: string;
    subItems?: Array<INavSubItem>
}

interface IProps {
    navItem: INavItem
    className?: string;
}

export const NavItem: React.FC<IProps> = ({
    navItem,
    className,
}) => {
    return (
        <NavigationMenuItem className={cn('', className, `${navItem.subItems ? 'with-childrens' : ''}`)}>
            <Link href={navItem.href}>
                <NavigationMenuTrigger showIcon={navItem.subItems ? true : false}>{navItem.text}</NavigationMenuTrigger>
            </Link>
            {navItem.subItems && (
                <NavigationMenuContent>
                    <NavSubList navSubItems={navItem.subItems} />
                </NavigationMenuContent>
            )}
        </NavigationMenuItem>
    )
}