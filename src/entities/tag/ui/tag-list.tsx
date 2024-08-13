import { cn } from '@/lib/utils';
import React from 'react';
import { ITag, TagItem } from '..';

interface IProps {
    tags: Array<ITag>;
    className?: string;
    take?: number; 
}

export const TagList: React.FC<IProps> = ({ tags, take, className }) => {
    return (
        <ul className={cn('flex flex-wrap items-center mb-5', className)}>
            {
                tags.map(tag => (
                    <TagItem key={tag.id} tag={tag}/>
                )).slice(0, take ? take : tags.length)
            }
        </ul>
    )
}