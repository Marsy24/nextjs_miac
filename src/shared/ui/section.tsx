import { cn } from '@/lib/utils';
import React, { ReactElement } from 'react';

interface IProps {
    children: ReactElement,
    className?: string;
}

export const Section: React.FC<IProps> = ({ children, className }) => {
    return (    
        <section className={cn('', className)}>
            {children}
        </section>
    )
}