import React from 'react';
import { IPost } from '../models';
import { cn } from '@/lib/utils';
import { PostItem } from './post-item';

interface IProps {
    posts: Array<IPost>
    loading: boolean;
    take?: number;
    className?: string;
}

export const PostList: React.FC<IProps> = ({ loading, posts, take, className }) => {
    return (
        <ul className={cn('flex flex-wrap justify-between gap-y-[30px]', className)}>
            {
                posts.map(post => (
                    <PostItem loading={loading} key={post.id} post={post}/>
                )).slice(0, take ? take : posts.length)
            }
        </ul>
    )
}