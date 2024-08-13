'use client'

import { cn } from '@/lib/utils';
import React from 'react';
import Image from 'next/image';
import { Glasses, Menu, Twitch, UserRoundCheck } from 'lucide-react';
import Link from 'next/link';
import { Button, Container, NavigationMenu, Title } from '@/shared';
import { INavItem, NavList } from '@/features';
import { SearchInput } from './searchInput';
import { SideBar } from './side-bar';

interface IProps {
    className?: string;
}

export const Header: React.FC<IProps> = ({ className }) => {
    const navItems: Array<INavItem> = [
        {
            id: 'asdddddd',
            text: 'О центре',
            href: '/about',
            subItems: [
                {
                    id: 'asdddddd',
                    text: 'Структура',
                    href: '/about',
                    description: "Описана структура организации",
                    aside: true
                },
                {
                    id: 'asdddddd',
                    text: 'Контакты',
                    href: '/about',
                    description: "Контакты ЧОМИАЦд"
                }
            ]
        },
        {
            id: 'asssd',
            text: 'О центре',
            href: '/about',
        },
        {
            id: 'aasd',
            text: 'О центре',
            href: '/about',
            subItems: [
                {
                    id: 'asdddddd',
                    text: 'О центре',
                    href: '/about',
                    description: "asdasdsd",
                    aside: true
                },
                {
                    id: 'asdddddd',
                    text: 'О центре',
                    href: '/about',
                    description: "asdasdsd"
                }
            ]
        },
        {
            id: 'asdd',
            text: 'О центре',
            href: '/about',
        },
        {
            id: 'assd',
            text: 'О центре',
            href: '/about',
        }
    ]

    const [activeSearch, setActiveSearch] = React.useState<boolean>(false);

    const handleOpenSearch = () => {
        setActiveSearch(!activeSearch)
    }

    return (
        <header className={cn('', className)}>
            <Container className='flex flex-col py-5'>
                <div className="header-wrapper flex items-center justify-between xs:flex-col lg:flex-row">
                    <div className="header__left flex items-center">
                        <Link href='/' className='block'>
                            <Image src={'/logo.png'} width={200} height={200} className='block mr-4' alt='Логотип' />
                        </Link>
                    </div>

                    <div className="header__right flex flex-col flex-1 xs:w-full">
                        <div className="header__top flex items-center border-b py-2 lg:justify-end xs:justify-center">
                            <a href="tel:+73412787914" className="header__tel header__link mr-16">+7 (3412) 78-79-14</a>

                            <ul className="header__list header-list flex items-center">
                                <li className="header-list__item mr-4">
                                    <Button size='icon' className='rounded-xl'>
                                        <Glasses size={20} />
                                    </Button>
                                </li>
                                <li className="header-list__item mr-4">
                                    <Button size={'icon'} className='rounded-xl'>
                                        <Twitch size={20} />
                                    </Button>
                                </li>
                                <li className="header-list__item">
                                    <Button size={'icon'} className='rounded-xl'>
                                        <UserRoundCheck size={20} />
                                    </Button>
                                </li>
                            </ul>
                        </div>

                        <div className="header__bottom flex relative items-center py-2 justify-end">
                            <SideBar className='' navItems={navItems}></SideBar>
                            <NavigationMenu className={cn(
                                'xs:hidden lg:flex transition-transform duration-300',
                                `${activeSearch && '-translate-x-64'}`,
                                
                            )}>
                                <NavList navItems={navItems} />
                            </NavigationMenu>

                            <SearchInput className='xs:-order-1 lg:order-1' onClickSearchButton={handleOpenSearch} isActive={activeSearch} />
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}