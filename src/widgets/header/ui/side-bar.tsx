import { INavItem, NavList } from '@/features';
import { cn } from '@/lib/utils';
import { Button, Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger, NavigationMenu, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/shared';
import { NavigationMenuItem } from '@radix-ui/react-navigation-menu';
import { CircleX, Menu } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface IProps {
    navItems: Array<INavItem>;
    className?: string;
}

export const SideBar: React.FC<IProps> = ({ navItems, className }) => {
    return (
        <Drawer direction='left'>
            <DrawerTrigger className='xs:block lg:hidden text-primary'>
                <Menu size={20} />
            </DrawerTrigger>
            <DrawerContent className="fixed left-0 top-0 w-96 md:w-96 bg-white shadow-lg transform transition-transform duration-300">
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader className='flex items-center justify-between'>
                        <DrawerTitle>Меню</DrawerTitle>
                        <DrawerClose asChild>
                            <Button size={'icon'} variant="outline">
                                <CircleX size={20} />
                            </Button>
                        </DrawerClose>
                    </DrawerHeader>
                    <div className="p-4 pb-0">
                        <NavigationMenu className=''>
                            <NavigationMenuList className='flex flex-col '>
                                {
                                    navItems.map(navItem => (
                                        <NavigationMenuItem key={navItem.id} className='ml-0'>
                                            <Link href={navItem.href} className={navigationMenuTriggerStyle()}>
                                                <NavigationMenuLink >
                                                    {navItem.text}
                                                </NavigationMenuLink>
                                            </Link>
                                        </NavigationMenuItem>
                                    ))
                                }
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}