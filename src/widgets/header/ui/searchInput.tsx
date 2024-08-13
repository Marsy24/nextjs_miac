import { cn } from '@/lib/utils';
import { Button, Input } from '@/shared';
import { Search } from 'lucide-react';
import React from 'react'

interface IProps {
    onClickSearchButton: () => void
    isActive: boolean;
    className?: string;
}

export const SearchInput: React.FC<IProps> = ({ onClickSearchButton, isActive, className }) => {
    return (
        <div className={cn('search-wrapper flex relative items-center', className)}>
            <Input className={cn(
                'transition-all duration-300 opacity-0 absolute w-[270px] -left-[260px]',
                `${!isActive ? '-top-[10000%]' : 'opacity-100'}`
            )}/>

            <Button onClick={onClickSearchButton} variant={'link'} size={'icon'}>
                <Search size={20} />
            </Button>
        </div>
    )
}